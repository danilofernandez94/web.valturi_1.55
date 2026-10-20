const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
function node(extra = {}) {
  const flags = new Set();
  return { attrs: {}, listeners: {}, style: {}, hidden: true, focused: false,
    classList: { add: (v) => flags.add(v), remove: (v) => flags.delete(v), contains: (v) => flags.has(v), toggle: (v, state) => state ? flags.add(v) : flags.delete(v) },
    addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); },
    setAttribute(name, value) { this.attrs[name] = value; },
    focus() { this.focused = true; },
    fire(name, event = {}) { for (const fn of this.listeners[name] || []) fn(event); }, ...extra };
}
function harness(reduce = false, desktop = false, count = 6) {
  const timers = new Map(); let clockId = 0;
  const frames = new Map(); let frameId = 0; let frameClock = 0;
  const samples = Array.from({ length: count }, (_, index) => node({ offsetLeft: 6 + index * (desktop ? 320 : 235) }));
  const moves = [];
  const track = node({ scrollWidth: desktop ? count * 320 : count * 235 + 6, clientWidth: desktop ? 960 : 354, scrollLeft: 0,
    querySelectorAll: () => samples,
    scrollTo(options) { this.scrollLeft = options.left; moves.push(options); this.fire('scroll'); }
  });
  const controls = node(); const playLabel = node(); const progress = node();
  const carousel = node({ querySelector: (selector) => selector === '[data-carousel-progress]' ? progress : controls });
  const play = node({ querySelector: () => playLabel });
  const menu = node({ open: false, showModal() { this.open = true; }, close() { this.open = false; this.fire('close'); } });
  const fields = {
    'mobile-menu': menu, 'menu-toggle': node(), 'menu-close': node(),
    'material-carousel': carousel, 'swatch-track': track, 'sample-prev': node(), 'sample-next': node(), 'sample-play': play,
    'sample-announcement': node(), 'lead-name': node({ matches: () => true }), 'servicios': node({ matches: () => false })
  };
  const document = node({ body: node(), hidden: false, getElementById: (id) => fields[id], querySelector: (selector) => fields[selector.slice(1)] });
  const reduced = node({ matches: reduce }); const wide = node({ matches: desktop });
  let intersection;
  class Observer { constructor(fn) { intersection = fn; } observe() {} }
  const window = node({ IntersectionObserver: Observer,
    matchMedia: (query) => query.includes('reduced-motion') ? reduced : wide,
    setTimeout(fn, delay) { const id = ++clockId; timers.set(id, { fn, delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
    requestAnimationFrame(fn) { const id = ++frameId; frames.set(id, fn); return id; },
    cancelAnimationFrame(id) { frames.delete(id); }
  });
  vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname, '../home-ui.js'), 'utf8'), { document, window, IntersectionObserver: Observer });
  const tick = (delay) => {
    const found = Array.from(timers).find(([, item]) => item.delay === delay);
    if (!found) return false;
    const [id, item] = found; timers.delete(id); item.fn(); return true;
  };
  const frame = (delta = 16) => {
    frameClock += delta;
    const work = Array.from(frames.values()); frames.clear();
    for (const fn of work) fn(frameClock);
  };
  const settle = () => { let remaining = 100; while (frames.size && remaining-- > 0) frame(); assert.ok(!frames.size, 'la animación termina'); };
  return { fields, document, window, menu, track, controls, progress, play, playLabel, moves, timers, tick, frame, settle, reduced, wide, visible: (value) => intersection([{ isIntersecting: value }]) };
}
test('El menú abre, restaura foco con Escape/cierre y lleva a la sección seleccionada', () => {
  const h = harness();
  h.fields['menu-toggle'].fire('click');
  assert.equal(h.menu.open, true);
  assert.equal(h.fields['menu-toggle'].attrs['aria-expanded'], 'true');
  assert.ok(h.document.body.classList.contains('menu-open'));
  h.menu.close();
  assert.ok(h.fields['menu-toggle'].focused);
  assert.equal(h.fields['menu-toggle'].attrs['aria-expanded'], 'false');
  assert.ok(!h.document.body.classList.contains('menu-open'));
  h.fields['menu-toggle'].focused = false;
  h.fields['menu-toggle'].fire('click');
  h.menu.fire('click', { target: { closest: () => ({ getAttribute: () => '#consulta' }) } });
  assert.equal(h.menu.open, false);
  assert.ok(h.fields['lead-name'].focused);
  assert.equal(h.fields['menu-toggle'].focused, false);
  h.fields['menu-toggle'].fire('click');
  h.wide.matches = true; h.wide.fire('change');
  assert.equal(h.menu.open, false);
});
test('El muestrario avanza con pasos intermedios continuos y vuelve de a una posición', () => {
  const h = harness();
  assert.equal(h.controls.hidden, false);
  assert.equal(h.tick(8000), false, 'fuera de pantalla no se mueve');
  h.visible(true);
  const targets = [];
  for (let i = 0; i < 6; i++) { assert.ok(h.tick(8000)); h.settle(); targets.push(h.track.scrollLeft); }
  assert.deepEqual(targets, [235, 470, 705, 940, 1062, 940]);
  assert.ok(h.moves.length > 200, 'cada transición recorre posiciones intermedias');
  assert.ok(h.moves.every((move) => move.behavior === 'auto'), 'el navegador no añade otra curva de animación');
  for (let i = 1; i < h.moves.length; i++) assert.ok(Math.abs(h.moves[i].left - h.moves[i - 1].left) < 9, 'no hay un salto entre cuadros');
  h.track.fire('pointerdown');
  assert.equal(h.play.attrs['aria-pressed'], 'false');
  assert.equal(h.tick(8000), false, 'el gesto no compite con una animación automática');
  h.fields['sample-next'].fire('click');
  h.settle();
  assert.equal(h.track.scrollLeft, 1062);
  h.visible(false);
  h.play.fire('click');
  assert.equal(h.tick(8000), false);
});
test('Movimiento reducido, teclado y pestaña oculta mantienen el control del usuario', () => {
  const h = harness(true);
  h.visible(true);
  assert.equal(h.tick(8000), false);
  assert.equal(h.play.attrs['aria-pressed'], 'false');
  h.track.fire('keydown', { key: 'End', preventDefault() {} });
  h.settle();
  assert.equal(h.moves[0].behavior, 'auto');
  assert.equal(h.moves[0].left, 1062);
  h.track.fire('keydown', { key: 'Home', preventDefault() {} });
  h.settle();
  assert.equal(h.moves[1].left, 0);
  h.play.fire('click');
  h.settle();
  assert.ok(h.tick(8000), 'reproducción explícita permitida sin transición suave');
  h.settle();
  assert.equal(h.moves.at(-1).behavior, 'auto');
  h.document.hidden = true; h.document.fire('visibilitychange');
  assert.equal(h.tick(8000), false);
});
test('En escritorio se deduplican los extremos cuando hay tres muestras visibles', () => {
  const h = harness(false, true);
  h.visible(true);
  const targets = [];
  for (let i = 0; i < 4; i++) { h.tick(8000); h.settle(); targets.push(h.track.scrollLeft); }
  assert.deepEqual(targets, [320, 640, 960, 640]);
  assert.ok(h.moves.every((move) => move.left >= 0 && move.left <= 960));
});

test('Tocar durante una transición conserva la posición y cancela el movimiento automático', () => {
  const h = harness(); h.visible(true); h.tick(8000);
  h.frame(); h.frame(220);
  const interruptedAt = h.track.scrollLeft;
  assert.ok(interruptedAt > 0 && interruptedAt < 235);
  h.track.fire('pointerdown'); h.settle();
  assert.equal(h.track.scrollLeft, interruptedAt);
  assert.equal(h.tick(8000), false);
  assert.ok(h.track.classList.contains('is-gliding'), 'el gesto no fuerza un snap intermedio');
});

test('Varios clics rápidos avanzan hacia el destino solicitado sin reiniciar desde el inicio', () => {
  const h = harness();
  h.fields['sample-next'].fire('click'); h.frame(); h.frame(120);
  const before = h.track.scrollLeft;
  h.fields['sample-next'].fire('click'); h.settle();
  assert.equal(h.track.scrollLeft, 470);
  const tail = h.moves.slice(h.moves.findIndex((move) => move.left === before));
  assert.ok(tail.every((move) => move.left >= before));
  assert.ok(!h.track.classList.contains('is-gliding'), 'se restaura el ajuste sólo al terminar el recorrido');
});

test('Las 19 colecciones se recorren hasta ambos extremos con posiciones continuas', () => {
  const h = harness(false, false, 19);
  for (let i = 0; i < 25; i++) { h.fields['sample-next'].fire('click'); h.settle(); }
  assert.equal(h.track.scrollLeft, h.track.scrollWidth - h.track.clientWidth);
  assert.equal(h.fields['sample-next'].disabled, true);
  for (let i = 0; i < 25; i++) { h.fields['sample-prev'].fire('click'); h.settle(); }
  assert.equal(h.track.scrollLeft, 0);
  assert.equal(h.fields['sample-prev'].disabled, true);
});
