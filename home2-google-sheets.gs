/**
 * Valturi · Registro de consultas Home 2
 * Pegar en un proyecto nuevo de script.google.com. Ejecutar setupHome2 una vez.
 * Implementar como aplicación web: ejecutar como vos, acceso "Cualquier persona".
 * La URL /exec y el secreto van en Vercel, nunca en home2.js.
 */
const HOME2_HEADERS = ['Fecha UTC', 'ID consulta', 'Estado comercial', 'Nombre', 'WhatsApp', 'Mueble', 'Barrio / localidad', 'Consentimiento', 'Origen', 'UTM source', 'UTM medium', 'UTM campaign', 'UTM content', 'UTM term', 'Referente'];

function setupHome2() {
  const properties = PropertiesService.getScriptProperties();
  let sheetId = properties.getProperty('HOME2_SHEET_ID');
  if (!sheetId) {
    const book = SpreadsheetApp.create('Valturi · Consultas web');
    const sheet = book.getSheets()[0];
    sheet.setName('Consultas');
    sheet.appendRow(HOME2_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HOME2_HEADERS.length).setFontWeight('bold').setBackground('#3b2b25').setFontColor('#faf7f1');
    sheet.autoResizeColumns(1, HOME2_HEADERS.length);
    sheetId = book.getId();
    properties.setProperty('HOME2_SHEET_ID', sheetId);
  }
  let secret = properties.getProperty('HOME2_SECRET');
  if (!secret) {
    secret = Utilities.getUuid() + Utilities.getUuid();
    properties.setProperty('HOME2_SECRET', secret);
  }
  // Sólo visible al propietario al ejecutar la configuración, no desde la web.
  console.log('Planilla: https://docs.google.com/spreadsheets/d/' + sheetId + '/edit');
  console.log('HOME2_LEADS_WEBHOOK_SECRET: ' + secret);
}

function home2Json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

function home2Text_(value, limit) {
  return typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, '').slice(0, limit) : '';
}

function home2Cell_(value) {
  const text = String(value || '');
  // Los teléfonos con + y cualquier texto que parezca fórmula se guardan como texto.
  return /^[=+\-@\t\r\n]/.test(text) ? "'" + text : text;
}

function doGet() {
  return home2Json_({ ok: false, code: 'POST_REQUIRED' });
}

function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty('HOME2_SECRET');
  const sheetId = properties.getProperty('HOME2_SHEET_ID');
  if (!expectedSecret || !sheetId) return home2Json_({ ok: false, code: 'NOT_CONFIGURED' });
  let body;
  try {
    const raw = event && event.postData && event.postData.contents;
    if (!raw || raw.length > 12000) return home2Json_({ ok: false, code: 'INVALID_REQUEST' });
    body = JSON.parse(raw);
  } catch (_) { return home2Json_({ ok: false, code: 'INVALID_REQUEST' }); }
  if (body.secret !== expectedSecret) return home2Json_({ ok: false, code: 'UNAUTHORIZED' });
  const lead = body.lead || {};
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(lead.leadId || '')) return home2Json_({ ok: false, code: 'INVALID_FIELDS' });
  const name = home2Text_(lead.name, 80);
  const phone = home2Text_(lead.phone, 30);
  const location = home2Text_(lead.location, 100);
  const furniture = { sillon: 'Sillón', sillas: 'Sillas', otro: 'Otro mueble' };
  if (name.length < 2 || location.length < 2 || lead.consent !== true || !Object.prototype.hasOwnProperty.call(furniture, lead.furniture) || !/^[+\d\s().-]+$/.test(phone) || !/^\d{8,15}$/.test(phone.replace(/\D/g, ''))) return home2Json_({ ok: false, code: 'INVALID_FIELDS' });
  if (!/^[a-f0-9]{64}$/.test(body.rateKey || '')) return home2Json_({ ok: false, code: 'INVALID_FIELDS' });
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return home2Json_({ ok: false, code: 'BUSY' });
  try {
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Consultas');
    if (!sheet) return home2Json_({ ok: false, code: 'NOT_CONFIGURED' });
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const previous = sheet.getRange(2, 2, lastRow - 1, 1).createTextFinder(lead.leadId).matchEntireCell(true).findNext();
      if (previous) return home2Json_({ ok: true, leadId: lead.leadId, duplicate: true });
    }
    const cache = CacheService.getScriptCache();
    const bucket = Math.floor(Date.now() / 600000);
    const rateKey = 'h2:' + body.rateKey + ':' + bucket;
    const count = Number(cache.get(rateKey) || 0);
    if (count >= 8) return home2Json_({ ok: false, code: 'RATE_LIMITED' });
    const campaign = lead.campaign || {};
    const row = [new Date().toISOString(), lead.leadId, 'Nueva', name, phone, furniture[lead.furniture], location, 'Sí · consulta', '/home2.html', home2Text_(campaign.utm_source, 120), home2Text_(campaign.utm_medium, 120), home2Text_(campaign.utm_campaign, 120), home2Text_(campaign.utm_content, 120), home2Text_(campaign.utm_term, 120), home2Text_(lead.referrer, 300)].map(home2Cell_);
    sheet.getRange(lastRow + 1, 1, 1, row.length).setNumberFormat('@').setValues([row]);
    SpreadsheetApp.flush();
    cache.put(rateKey, String(count + 1), 1200);
    return home2Json_({ ok: true, leadId: lead.leadId, duplicate: false });
  } catch (_) {
    return home2Json_({ ok: false, code: 'SAVE_FAILED' });
  } finally { lock.releaseLock(); }
}
