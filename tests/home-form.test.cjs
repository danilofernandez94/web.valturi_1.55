const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const { webcrypto } = require('node:crypto');

function element(extra = {}) {
  return { hidden: true, textContent: '', listeners: {}, classList: { toggle() {} },
    addEventListener(name, fn) { this.listeners[name] = fn; }, focus() {}, ...extra };
}
function harness() {
  const radio = ['sillon', 'sillas', 'otro'].map((value, i) => ({ value, checked: i === 0 }));
  Object.defineProperty(radio, 'value', { get: () => radio.find((x) => x.checked)?.value });
  const fields = { name: element({ value: 'Persona de prueba' }), phone: element({ value: '+54 351 1234567', setCustomValidity(text) { this.validityMessage = text; }, reportValidity() {} }), furniture: radio, location: { value: 'Barrio de prueba' }, consent: { checked: true }, website: { value: '' } };
  const button = element({ disabled: false }); const label = element();
  const form = element({ elements: fields, action: 'https://test.local/api/home2-leads', reportValidity: () => true, setAttribute() {}, removeAttribute() {}, querySelector: (selector) => selector.includes('submit-label') ? label : button });
  const status = element(); const followup = element();
  const privacy = element({ showModal() {}, close() {} });
  const elements = { 'lead-form': form, 'form-status': status, 'whatsapp-followup': followup, 'privacy-dialog': privacy, 'footer-year': element() };
  const navigations = []; const calls = []; const store = new Map();
  const window = { dataLayer: [], location: { search: '?utm_source=test&utm_campaign=home2', assign: (url) => navigations.push(url) }, setTimeout, clearTimeout };
  const context = vm.createContext({
    document: { getElementById: (id) => elements[id], querySelectorAll: () => [], querySelector: () => element(), referrer: 'https://example.com/origen?private=123' },
    window, crypto: webcrypto, URL, URLSearchParams, AbortController,
    sessionStorage: { getItem: (key) => store.get(key), setItem: (key, value) => store.set(key, value) },
    fetch: async (...args) => { calls.push(args); return context.respond(...args); }
  });
  vm.runInContext(fs.readFileSync(require('node:path').join(__dirname, '../home-form.js'), 'utf8'), context);
  return { context, fields, button, label, form, status, followup, navigations, calls, window, store, submit: () => form.listeners.submit({ preventDefault() {} }) };
}

test('No abre WhatsApp antes de la confirmación; recupera el fallo sin fingir guardado', async () => {
  const h = harness();
  let resolveResponse;
  h.context.respond = () => new Promise((resolve) => { resolveResponse = resolve; });
  const pending = h.submit();
  assert.equal(h.button.disabled, true);
  assert.equal(h.navigations.length, 0);
  const firstId = JSON.parse(h.calls[0][1].body).leadId;
  resolveResponse({ ok: false, json: async () => ({ ok: false, code: 'STORAGE_NOT_CONFIGURED' }) });
  await pending;
  assert.equal(h.navigations.length, 0);
  assert.match(h.status.textContent, /No pudimos confirmar/);
  assert.equal(h.followup.hidden, false);
  assert.match(h.followup.textContent, /sin registro/);
  assert.equal(h.button.disabled, false);
  assert.ok(!h.window.dataLayer.some((event) => event.event === 'home2_lead_saved'));
  h.context.respond = async (url, options) => ({ ok: true, json: async () => ({ ok: true, leadId: JSON.parse(options.body).leadId }) });
  await h.submit();
  assert.equal(JSON.parse(h.calls[1][1].body).leadId, firstId, 'reintentar usa el mismo ID');
  assert.equal(h.navigations.length, 1);
  assert.match(h.status.textContent, /ya está registrada/);
  assert.match(decodeURIComponent(h.navigations[0]), /Persona de prueba/);
  assert.match(decodeURIComponent(h.navigations[0]), /Barrio de prueba/);
  assert.ok(h.window.dataLayer.some((event) => event.event === 'home2_lead_saved'));
  const events = JSON.stringify(h.window.dataLayer);
  for (const privateValue of ['Persona de prueba', 'Barrio de prueba', '351 1234567']) assert.ok(!events.includes(privateValue));
  assert.ok(!JSON.stringify(Array.from(h.store.values())).includes('Persona de prueba'));
  await h.submit();
  assert.equal(h.calls.length, 2, 'volver a abrir no vuelve a guardar');
  assert.equal(h.navigations.length, 2);
  assert.equal(h.window.dataLayer.filter((event) => event.event === 'home2_lead_saved').length, 1);
  h.fields.name.value = 'Otra persona';
  await h.submit();
  assert.notEqual(JSON.parse(h.calls[2][1].body).leadId, firstId, 'otra consulta obtiene un ID nuevo');
});

test('Una respuesta incorrecta o un teléfono inválido no producen un contacto guardado', async () => {
  const h = harness();
  h.context.respond = async () => ({ ok: true, json: async () => ({ ok: true, leadId: 'otro' }) });
  await h.submit();
  assert.equal(h.navigations.length, 0);
  assert.ok(!h.window.dataLayer.some((event) => event.event === 'home2_lead_saved'));
  h.fields.phone.value = '123';
  await h.submit();
  assert.equal(h.calls.length, 1);
  assert.match(h.fields.phone.validityMessage, /entre 8 y 15/);
});

test('Un bloqueo al abrir WhatsApp conserva el guardado confirmado y ofrece el enlace', async () => {
  const h = harness();
  h.window.location.assign = () => { throw Error('Navigation blocked'); };
  h.context.respond = async (url, options) => ({ ok: true, json: async () => ({ ok: true, leadId: JSON.parse(options.body).leadId }) });
  await h.submit();
  assert.match(h.status.textContent, /Tu consulta está registrada/);
  assert.match(h.status.textContent, /enlace de abajo/);
  assert.equal(h.followup.hidden, false);
  assert.ok(h.window.dataLayer.some((event) => event.event === 'home2_lead_saved'));
  assert.ok(!h.window.dataLayer.some((event) => event.event === 'home2_form_error'));
});

test('El enlace de recuperación conserva el mensaje fuera de los atributos del DOM', async () => {
  const h = harness();
  h.followup.href = 'https://wa.me/543515930925';
  h.context.respond = async () => ({ ok: false, json: async () => ({ ok: false, code: 'SAVE_UNCONFIRMED' }) });
  await h.submit();
  assert.equal(h.followup.href, 'https://wa.me/543515930925');
  let prevented = false;
  h.followup.listeners.click({ preventDefault() { prevented = true; } });
  assert.ok(prevented);
  assert.match(decodeURIComponent(h.navigations[0]), /Persona de prueba/);
  assert.match(decodeURIComponent(h.navigations[0]), /Barrio de prueba/);
  assert.equal(h.window.dataLayer.at(-1).lead_registered, false);
});
