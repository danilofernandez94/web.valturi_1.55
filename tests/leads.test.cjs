const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const handler = require('../api/home2-leads.js');
const originalFetch = global.fetch;
const leadId = '01234567-89ab-4cde-8fab-0123456789ab';
const valid = () => ({ leadId, name: 'Persona de prueba', phone: '+54 351 123 4567', furniture: 'sillon', location: 'Córdoba', consent: true, website: '', source: '/otra?dato=privado', campaign: { utm_source: 'prueba', unknown: 'discard' }, referrer: 'https://example.org/pagina?dato=privado#secreto' });
function request(body = valid(), changes = {}) {
  return { method: 'POST', body, headers: { host: 'valturi.example', origin: 'https://valturi.example', 'content-type': 'application/json', 'x-forwarded-for': '192.0.2.10' }, ...changes };
}
async function call(req) {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(n) { this.statusCode = n; return this; }, json(v) { this.body = v; return this; } };
  await handler(req, res); return res;
}
test('El endpoint distingue validación, configuración, escritura y errores del proveedor', async (t) => {
  t.after(() => { global.fetch = originalFetch; });
  delete process.env.HOME2_LEADS_WEBHOOK_URL;
  delete process.env.HOME2_LEADS_WEBHOOK_SECRET;
  let fetches = 0;
  global.fetch = async () => { fetches++; throw Error('No debe conectarse'); };
  assert.equal((await call(request())).body.code, 'STORAGE_NOT_CONFIGURED');
  assert.equal((await call(request(valid(), { method: 'GET' }))).statusCode, 405);
  assert.equal((await call(request({ ...valid(), consent: false }))).statusCode, 400);
  assert.equal((await call(request({ ...valid(), website: 'spam' }))).statusCode, 400);
  assert.equal((await call(request({ ...valid(), phone: 'abcdefghi' }))).statusCode, 400);
  assert.equal((await call(request({ ...valid(), furniture: '__proto__' }))).statusCode, 400);
  assert.equal((await call(request({ ...valid(), leadId: 'no-uuid' }))).statusCode, 400);
  const crossOrigin = request(); crossOrigin.headers.origin = 'https://other.example';
  assert.equal((await call(crossOrigin)).statusCode, 403);
  assert.equal((await call(request({ ...valid(), padding: 'x'.repeat(9000) }))).statusCode, 413);
  assert.equal(fetches, 0);
  for (const origin of [undefined, 'null', 'http://valturi.example', 'https://valturi.example.attacker.test', 'https://user:pass@valturi.example', 'https://valturi.example/path']) {
    const req = request(); req.headers.origin = origin;
    assert.equal((await call(req)).statusCode, 403, `origen rechazado: ${origin}`);
  }
  for (const site of ['cross-site', 'same-site', 'none']) {
    const req = request(); req.headers['sec-fetch-site'] = site;
    assert.equal((await call(req)).statusCode, 403, `Fetch Metadata: ${site}`);
  }
  for (const invalid of [null, [], 'texto', { ...valid(), leadId: [leadId] }, { ...valid(), name: ['nombre'] }, { ...valid(), name: 'a'.repeat(81) }, { ...valid(), location: 'b'.repeat(101) }, { ...valid(), phone: '+543511234567' + ' '.repeat(40) }, { ...valid(), name: 'Nombre\ninyectado' }, { ...valid(), campaign: [] }, { ...valid(), website: false }]) {
    assert.equal((await call(request(invalid))).statusCode, 400, 'estructura inválida');
  }
  assert.equal((await call(request('{malformado'))).body.code, 'INVALID_JSON');
  const wrongType = request(); wrongType.headers['content-type'] = 'text/plain';
  assert.equal((await call(wrongType)).statusCode, 415);
  const oversized = request(); oversized.headers['content-length'] = '8193';
  assert.equal((await call(oversized)).statusCode, 413);
  assert.equal((await call(request({ ...valid(), padding: 'á'.repeat(4100) }))).statusCode, 413, 'límite en bytes UTF-8');
  assert.equal(fetches, 0, 'ninguna entrada rechazada alcanza Google Sheets');
  process.env.HOME2_LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/fake-deployment/exec';
  process.env.HOME2_LEADS_WEBHOOK_SECRET = 'fake-secret-for-tests-only-0123456789abcdef';
  let sent;
  global.fetch = async (url, options) => {
    assert.equal(options.redirect, 'follow');
    sent = JSON.parse(options.body);
    return { ok: true, json: async () => ({ ok: true, leadId, duplicate: false }) };
  };
  const saved = await call(request());
  assert.equal(saved.statusCode, 200);
  assert.deepEqual(saved.body, { ok: true, leadId, duplicate: false });
  assert.equal(saved.headers['Cache-Control'], 'no-store');
  assert.equal(sent.lead.source, '/');
  assert.equal(sent.lead.referrer, 'https://example.org/pagina');
  assert.deepEqual(sent.lead.campaign, { utm_source: 'prueba' });
  assert.match(sent.rateKey, /^[a-f0-9]{64}$/);
  assert.ok(!JSON.stringify(sent).includes('192.0.2.10'));
  assert.ok(!JSON.stringify(saved.body).includes('Persona de prueba'));
  global.fetch = async () => ({ ok: true, json: async () => ({ ok: true, leadId: 'wrong' }) });
  assert.equal((await call(request())).body.code, 'SAVE_UNCONFIRMED');
  global.fetch = async () => ({ ok: true, json: async () => ({ ok: false, code: 'RATE_LIMITED' }) });
  assert.equal((await call(request())).statusCode, 429);
  assert.equal((await call(request())).headers['Retry-After'], '600');
  for (const webhook of ['http://script.google.com/macros/s/id/exec', 'https://script.google.com.attacker.test/macros/s/id/exec', 'https://127.0.0.1/exec', 'https://script.google.com/macros/s/id/exec?redirect=evil']) {
    process.env.HOME2_LEADS_WEBHOOK_URL = webhook;
    assert.equal((await call(request())).statusCode, 503, 'no permite otro destino de red');
  }
  process.env.HOME2_LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/fake-deployment/exec';
  global.fetch = async () => { throw Error('timeout'); };
  assert.equal((await call(request())).body.code, 'SAVE_UNCONFIRMED');
  global.fetch = originalFetch;
});

test('Apps Script confirma sólo después de escribir, deduplica reintentos y conserva texto seguro', () => {
  const rows = [['cabecera']]; const cache = new Map(); let flushed = false; let lockReleased = false; let failFlush = false;
  const sheet = { getLastRow: () => rows.length, getRange: (row, col, count, width) => ({
    createTextFinder: (id) => ({ matchEntireCell() { return this; }, findNext: () => rows.slice(1).some((r) => r[1] === id) ? {} : null }),
    setNumberFormat() { return this; }, setValues(data) { rows[row - 1] = data[0]; return this; }
  }) };
  const context = vm.createContext({
    PropertiesService: { getScriptProperties: () => ({ getProperty: (key) => ({ HOME2_SECRET: 'test-secret', HOME2_SHEET_ID: 'test-sheet' })[key] }) },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: (text) => ({ setMimeType: () => JSON.parse(text) }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }), flush: () => { if (failFlush) throw Error('save failed'); flushed = true; } },
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock: () => { lockReleased = true; } }) },
    CacheService: { getScriptCache: () => ({ get: (key) => cache.get(key), put: (key, value) => cache.set(key, value) }) }, console
  });
  vm.runInContext(fs.readFileSync(require('node:path').join(__dirname, '../integrations/google-sheets.gs'), 'utf8'), context);
  const post = (lead, secret = 'test-secret') => context.doPost({ postData: { contents: JSON.stringify({ secret, rateKey: 'a'.repeat(64), lead }) } });
  assert.equal(post(valid(), 'bad-secret').code, 'UNAUTHORIZED');
  assert.equal(rows.length, 1);
  assert.equal(post({ ...valid(), name: '=HYPERLINK("x")', phone: '+543511234567' }).ok, true);
  assert.ok(flushed && lockReleased);
  assert.equal(rows.length, 2);
  assert.equal(rows[1][3], "'=HYPERLINK(\"x\")");
  assert.equal(rows[1][4], "'+543511234567");
  assert.equal(post(valid()).duplicate, true);
  assert.equal(rows.length, 2);
  failFlush = true;
  assert.equal(post({ ...valid(), leadId: '11234567-89ab-4cde-8fab-0123456789ab' }).code, 'SAVE_FAILED');
  failFlush = false;
  assert.equal(post({ ...valid(), leadId: '11234567-89ab-4cde-8fab-0123456789ab' }).duplicate, true);
  for (let i = 2; i <= 8; i++) post({ ...valid(), leadId: `${i}1234567-89ab-4cde-8fab-0123456789ab` });
  assert.equal(post({ ...valid(), leadId: '91234567-89ab-4cde-8fab-0123456789ab' }).code, 'RATE_LIMITED');
});
