const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function events(extra = {}) {
  const handlers = new Map();
  const flags = new Set();
  return { attrs: {}, handlers,
    classList: { toggle(key, value) { if (value) flags.add(key); else flags.delete(key); } },
    addEventListener(key, fn) { if (!handlers.has(key)) handlers.set(key, new Set()); handlers.get(key).add(fn); },
    removeEventListener(key, fn) { handlers.get(key)?.delete(fn); },
    setAttribute(key, value) { this.attrs[key] = value; },
    getAttribute(key) { return this.attrs[key]; },
    removeAttribute(key) { delete this.attrs[key]; },
    fire(key, event = {}) { for (const fn of handlers.get(key) || []) fn(event); }, ...extra };
}
function harness({ count = 5, reduced = false, width = 700 } = {}) {
  let clock = 0; let id = 0; let intersection;
  const frames = new Map();
  const preference = events({ matches: reduced });
  const document = events({ hidden: false });
  const window = events({
    matchMedia: () => preference,
    requestAnimationFrame(fn) { frames.set(++id, fn); return id; },
    cancelAnimationFrame(key) { frames.delete(key); }
  });
  class Observer {
    constructor(fn) { intersection = fn; }
    observe() {}
    disconnect() { intersection = null; }
  }
  window.IntersectionObserver = Observer;
  const track = events({ scrollLeft: 0, clientWidth: width, children: [],
    prepend(node) { node.parent = this; this.children.unshift(node); },
    append(node) { node.parent = this; this.children.push(node); }
  });
  function bank() {
    const node = events({ children: Array.from({ length: count }, (_, i) => events({ offsetLeft: i * 300 })) });
    Object.defineProperty(node, 'offsetLeft', { get() { return 8 + track.children.indexOf(node) * (count * 300); } });
    node.getBoundingClientRect = () => ({ width: count * 300 - 20 });
    node.cloneNode = bank;
    node.querySelectorAll = () => node.children;
    node.remove = () => { track.children = track.children.filter((child) => child !== node); };
    return node;
  }
  const original = bank(); original.setAttribute('data-catalog-original', ''); track.append(original);
  const controls = events({ hidden: true }); const play = events(); const prev = events(); const next = events();
  const root = events({ querySelector: (selector) => ({ '.catalog-track': track, '[data-catalog-original]': original, '[data-catalog-controls]': controls, '[data-catalog-play]': play, '[data-catalog-prev]': prev, '[data-catalog-next]': next })[selector] });
  root.setAttribute('aria-label', 'Panas');
  const context = vm.createContext({ window, document, URLSearchParams, IntersectionObserver: Observer });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../materials.js'), 'utf8'), context);
  const create = vm.runInContext('setupCatalogCarousel', context);
  const controller = create(root);
  const frame = (delta = 16) => {
    clock += delta;
    const callbacks = [...frames.values()]; frames.clear();
    for (const fn of callbacks) fn(clock);
  };
  return { track, original, controls, play, prev, next, preference, document, window, frames, controller, frame, context,
    visible(value) { intersection?.([{ isIntersecting: value }]); }
  };
}

test('El bucle atraviesa el límite con el mismo contenido y respeta interacción y visibilidad', () => {
  const h = harness();
  assert.equal(h.track.children.length, 3);
  assert.equal(h.controls.hidden, false);
  assert.equal(h.frames.size, 0, 'no se anima fuera de pantalla');
  h.visible(true);
  h.track.scrollLeft = 2999.5;
  h.frame(); h.frame(50);
  assert.equal(h.track.scrollLeft, 1500.5, 'el límite se normaliza a la copia idéntica, conservando el avance de un píxel');
  assert.equal(h.track.children[0].attrs['aria-hidden'], 'true');
  assert.ok(h.track.children[0].children.every((node) => node.attrs.tabindex === '-1'), 'las copias no duplican la navegación por teclado');
  h.track.fire('pointerdown');
  const paused = h.track.scrollLeft; h.frame(50);
  assert.equal(h.track.scrollLeft, paused);
  assert.equal(h.play.attrs['aria-pressed'], 'false');
  h.play.fire('click'); h.visible(false);
  assert.equal(h.frames.size, 0);
  h.visible(true); h.document.hidden = true; h.document.fire('visibilitychange');
  assert.equal(h.frames.size, 0, 'no se anima en pestañas ocultas');
});

test('Los clics rápidos cerca del límite siguen una transición corta y continua', () => {
  const h = harness();
  h.track.scrollLeft = 2999;
  h.next.fire('click'); h.frame(); h.frame(300);
  h.next.fire('click');
  let before = h.track.scrollLeft;
  for (let i = 0; i < 45; i++) {
    h.frame();
    const delta = ((h.track.scrollLeft - before) % 1500 + 1500) % 1500;
    assert.ok(delta < 25, `avance entre cuadros: ${delta}`);
    before = h.track.scrollLeft;
  }
  assert.equal(h.frames.size, 0);
  assert.equal(h.track.scrollLeft, 2099);
  h.prev.fire('click'); for (let i = 0; i < 45; i++) h.frame();
  assert.equal(h.track.scrollLeft, 1799);
});

test('Las pocas muestras no se duplican y movimiento reducido permite recorrido manual', () => {
  const few = harness({ count: 2, width: 800 });
  few.visible(true);
  assert.equal(few.track.children.length, 1);
  assert.equal(few.controls.hidden, true);
  assert.equal(few.frames.size, 0);
  const h = harness({ reduced: true }); h.visible(true);
  assert.equal(h.frames.size, 0);
  h.next.fire('click'); assert.equal(h.track.scrollLeft, 1800);
  assert.equal(h.frames.size, 0, 'el avance manual no anima con movimiento reducido');
  h.track.fire('keydown', { key: 'End', preventDefault() {} }); assert.equal(h.track.scrollLeft, 2700);
  h.track.fire('keydown', { key: 'Home', preventDefault() {} }); assert.equal(h.track.scrollLeft, 1500);
});

test('Cambiar filtros libera observadores, animaciones y escuchas del carrusel anterior', () => {
  const h = harness(); h.visible(true);
  assert.equal(h.frames.size, 1);
  h.controller.destroy();
  assert.equal(h.frames.size, 0);
  assert.equal(h.track.children.length, 1);
  assert.equal(h.window.handlers.get('resize').size, 0);
  assert.equal(h.document.handlers.get('visibilitychange').size, 0);
  h.window.fire('resize'); h.visible(true); h.play.fire('click');
  assert.equal(h.frames.size, 0);
});

test('Cada ficha conserva sus colores reales y no ofrece contactos ni formularios', () => {
  const context = vm.createContext({ window: { addEventListener() {} }, URLSearchParams });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../materials.js'), 'utf8'), context);
  const results = vm.runInContext('MATERIAL_COLLECTIONS.map(item => ({ id:item.id, html:materialDetailMarkup(item), count:uniqueMaterialColors(item).length }))', context);
  assert.equal(results.length, 19);
  for (const { html, count } of results) {
    assert.equal((html.match(/data-color-index=/g) || []).length, count);
    assert.ok(!/(?:wa\.me|wa\.link|contacto\.html|<form\b)/i.test(html));
    assert.ok(html.includes('<dialog'));
  }
});
