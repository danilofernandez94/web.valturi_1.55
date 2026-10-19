/* Independiente del carrusel y del formulario de la home actual. */
(() => {
  'use strict';
  const WHATSAPP_NUMBER = '543515930925';
  const furnitureNames = { sillon: 'un sillón', sillas: 'unas sillas', otro: 'otro mueble' };
  const form = document.getElementById('lead-form');
  const status = document.getElementById('form-status');
  const followup = document.getElementById('whatsapp-followup');
  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const phone = form.elements.phone;
  let started = false;
  let pending = false;
  let lastPayload = '';
  let leadId = '';
  let savedPayload = '';
  let dialogTrigger = null;

  // Nunca incluir nombre, teléfono, localidad ni texto de WhatsApp en los eventos.
  function track(eventName, extra = {}) {
    const parameters = { form_id: 'home2_consulta', page_variant: 'home2', ...extra };
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') window.gtag('event', eventName, parameters);
    else window.dataLayer.push({ event: eventName, ...parameters });
  }

  function campaign() {
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const query = new URLSearchParams(window.location.search);
    const result = {};
    for (const key of keys) {
      const value = query.get(key);
      if (value) result[key] = value.slice(0, 120);
    }
    // Conserva únicamente la atribución de campaña dentro de esta pestaña.
    try {
      if (Object.keys(result).length) sessionStorage.setItem('valturi_home2_campaign', JSON.stringify(result));
      else return JSON.parse(sessionStorage.getItem('valturi_home2_campaign') || '{}');
    } catch (_) { /* El formulario también funciona con almacenamiento bloqueado. */ }
    return result;
  }

  function referrer() {
    try { const url = new URL(document.referrer); return url.origin + url.pathname; }
    catch (_) { return ''; }
  }

  function whatsappUrl(data) {
    const text = `Hola Valturi, soy ${data.name}. Quiero consultar por el retapizado o restauración de ${furnitureNames[data.furniture]}. Estoy en ${data.location}. Mi WhatsApp es ${data.phone}. Les comparto las fotos y medidas por acá.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  function message(text, success = false) {
    status.textContent = text;
    status.hidden = false;
    status.classList.toggle('is-success', success);
  }

  function openWhatsapp(url, registered) {
    track('whatsapp_open_attempt', { lead_registered: registered });
    // En la misma pestaña: evita depender de ventanas emergentes tras el guardado.
    try { window.location.assign(url); }
    catch (_) {
      message(registered
        ? 'Tu consulta está registrada. Abrí WhatsApp desde el enlace de abajo para continuar.'
        : 'No pudimos abrir WhatsApp automáticamente. Probá desde el enlace de abajo.', registered);
    }
  }

  phone.addEventListener('input', () => phone.setCustomValidity(''));
  form.addEventListener('input', (event) => {
    if (!started && event.target.name !== 'website') {
      started = true;
      track('home2_form_start');
    }
  });

  document.querySelectorAll('[data-furniture]').forEach((link) => {
    link.addEventListener('click', () => {
      const radio = Array.from(form.elements.furniture).find((input) => input.value === link.dataset.furniture);
      if (radio) radio.checked = true;
      // El foco acompaña el destino del enlace, también al usar teclado.
      form.elements.name.focus({ preventScroll: true });
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending) return;
    const digits = phone.value.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15) {
      phone.setCustomValidity('Ingresá un WhatsApp con código de área, entre 8 y 15 dígitos.');
      phone.reportValidity();
      return;
    }
    if (!form.reportValidity()) return;
    const data = {
      name: form.elements.name.value.trim(),
      phone: phone.value.trim(),
      furniture: form.elements.furniture.value,
      location: form.elements.location.value.trim(),
      consent: form.elements.consent.checked,
      website: form.elements.website.value,
      source: '/home2.html',
      campaign: campaign(),
      referrer: referrer()
    };
    if (data.name.length < 2 || data.location.length < 2) {
      message('Revisá tu nombre y tu barrio o localidad antes de continuar.');
      status.focus();
      return;
    }
    const snapshot = JSON.stringify(data);
    const url = whatsappUrl(data);
    followup.href = url;
    if (snapshot === savedPayload) {
      openWhatsapp(url, true);
      return;
    }
    if (snapshot !== lastPayload) {
      leadId = crypto.randomUUID();
      lastPayload = snapshot;
    }
    pending = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    submitLabel.textContent = 'Registrando tu consulta…';
    followup.hidden = true;
    message('Estamos guardando tus datos antes de abrir WhatsApp.');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 18000);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ ...data, leadId }),
        signal: controller.signal
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true || result.leadId !== leadId) {
        const error = new Error('No se confirmó el registro');
        error.code = result.code || 'SAVE_FAILED';
        throw error;
      }
      savedPayload = snapshot;
      message('Tu consulta ya está registrada. Seguimos por WhatsApp; todavía tenés que enviar el mensaje allí.', true);
      followup.textContent = 'Abrir WhatsApp para enviar mi mensaje ↗';
      followup.hidden = false;
      submitLabel.textContent = 'Volver a abrir WhatsApp';
      track('home2_lead_saved', { furniture_type: data.furniture });
      openWhatsapp(url, true);
    } catch (error) {
      const isLimited = error.code === 'RATE_LIMITED';
      message(isLimited
        ? 'Recibimos varios intentos. Esperá unos minutos para registrar la consulta, o seguí por WhatsApp sin registro.'
        : 'No pudimos confirmar el registro de tu consulta. Podés reintentar o continuar por WhatsApp sin registro.');
      followup.textContent = 'Continuar por WhatsApp sin registro ↗';
      followup.hidden = false;
      submitLabel.textContent = 'Reintentar y continuar';
      track('home2_form_error', { error_type: isLimited ? 'rate_limit' : 'save_unconfirmed' });
      status.focus({ preventScroll: true });
    } finally {
      window.clearTimeout(timeout);
      pending = false;
      submit.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });

  followup.addEventListener('click', () => {
    track('whatsapp_open_attempt', { lead_registered: !!savedPayload && lastPayload === savedPayload });
  });

  const privacy = document.getElementById('privacy-dialog');
  document.querySelectorAll('[data-privacy]').forEach((button) => {
    button.addEventListener('click', () => { dialogTrigger = button; privacy.showModal(); });
  });
  document.querySelector('[data-close-privacy]').addEventListener('click', () => privacy.close());
  privacy.addEventListener('close', () => dialogTrigger?.focus({ preventScroll: true }));
  document.getElementById('footer-year').textContent = new Date().getFullYear();
})();
