/* Vercel Function. Las credenciales sólo se leen del entorno del servidor. */
const { createHmac } = require('node:crypto');

const allowedFurniture = new Set(['sillon', 'sillas', 'otro']);
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const plain = (value, limit) => typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, limit) : '';

function sanitize(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  if (body.website) return null;
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(body.leadId || '')) return null;
  const name = plain(body.name, 80);
  const phone = plain(body.phone, 30);
  const location = plain(body.location, 100);
  if (name.length < 2 || location.length < 2 || body.consent !== true) return null;
  if (!/^[+\d\s().-]+$/.test(phone) || !/^\d{8,15}$/.test(phone.replace(/\D/g, ''))) return null;
  if (!allowedFurniture.has(body.furniture)) return null;
  const campaign = {};
  for (const key of campaignKeys) {
    const value = plain(body.campaign?.[key], 120);
    if (value) campaign[key] = value;
  }
  let referrer = '';
  try {
    const url = new URL(body.referrer);
    if (['http:', 'https:'].includes(url.protocol)) referrer = (url.origin + url.pathname).slice(0, 300);
  } catch (_) { /* Un referente ausente o inválido no impide consultar. */ }
  return { leadId: body.leadId, name, phone, furniture: body.furniture, location, consent: true, source: body.source === '/home2.html' ? '/home2.html' : '/', campaign, referrer };
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const reply = (status, code, extra = {}) => res.status(status).json({ ok: status === 200, ...(code ? { code } : {}), ...extra });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(405, 'METHOD_NOT_ALLOWED');
  }
  const contentType = String(req.headers['content-type'] || '').split(';')[0].trim();
  if (contentType !== 'application/json') return reply(415, 'JSON_REQUIRED');
  if (Number(req.headers['content-length']) > 8192) return reply(413, 'PAYLOAD_TOO_LARGE');
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (origin) {
    try {
      if (new URL(origin).host !== host || !['http:', 'https:'].includes(new URL(origin).protocol)) return reply(403, 'ORIGIN_NOT_ALLOWED');
    } catch (_) { return reply(403, 'ORIGIN_NOT_ALLOWED'); }
  }
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (Buffer.byteLength(JSON.stringify(body) || '') > 8192) return reply(413, 'PAYLOAD_TOO_LARGE');
  } catch (_) { return reply(400, 'INVALID_JSON'); }
  const lead = sanitize(body);
  if (!lead) return reply(400, 'INVALID_FIELDS');
  const webhook = process.env.HOME2_LEADS_WEBHOOK_URL || '';
  const secret = process.env.HOME2_LEADS_WEBHOOK_SECRET || '';
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/.test(webhook) || secret.length < 32) {
    return reply(503, 'STORAGE_NOT_CONFIGURED');
  }
  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  // Sólo se manda una huella temporal para limitar abuso. No se guarda la IP.
  const rateKey = createHmac('sha256', secret).update(forwarded || 'unknown').digest('hex');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 14000);
  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, rateKey, lead }),
      redirect: 'follow',
      signal: controller.signal
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok !== true || result.leadId !== lead.leadId) {
      if (result.code === 'RATE_LIMITED') return reply(429, 'RATE_LIMITED');
      return reply(502, 'SAVE_UNCONFIRMED');
    }
    return reply(200, null, { leadId: lead.leadId, duplicate: result.duplicate === true });
  } catch (_) {
    // No registrar el payload ni el error del proveedor: podrían contener datos.
    return reply(502, 'SAVE_UNCONFIRMED');
  } finally { clearTimeout(timeout); }
};
