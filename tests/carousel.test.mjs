import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

class Element {
  constructor() {
    this.events = {}; this.attributes = {}; this.children = []; this.props = {};
    this.offsetWidth = 300; this.clientWidth = 374; this.clientHeight = 398;
    const classes = new Set();
    this.classList = { add: (...names) => names.forEach((name) => classes.add(name)), remove: (...names) => names.forEach((name) => classes.delete(name)), contains: (name) => classes.has(name), toggle: (name, on) => on ? classes.add(name) : classes.delete(name) };
    this.style = { setProperty: (name, value) => { this.props[name] = value; } };
  }
  addEventListener(name, fn) { (this.events[name] ||= []).push(fn); }
  emit(name, value = {}) { for (const fn of this.events[name] || []) fn(value); }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this.attributes[name]; }
  querySelector() { return null; }
  appendChild(child) { this.children.push(child); child.parent = this; }
  cloneNode() { return new Element(); }
  remove() { this.parent.children = this.parent.children.filter((child) => child !== this); }
}

function setup({ reduced = false } = {}) {
  let clock = 0, sequence = 0;
  const frames = new Map(), timers = new Map();
  const carousel = new Element(), cards = Array.from({ length: 6 }, () => new Element());
  carousel.querySelectorAll = () => cards;
  const ids = Object.fromEntries(['carouselPrev', 'carouselNext', 'carouselPause', 'carouselStatus'].map((id) => [id, new Element()]));
  const win = new Element();
  win.innerWidth = 390; win.matchMedia = () => ({ matches: reduced }); win.dataLayer = [];
  const context = vm.createContext({
    window: win, URLSearchParams, performance: { now: () => clock },
    setTimeout: (fn, delay) => { const id = ++sequence; timers.set(id, { fn, at: clock + delay }); return id; },
    clearTimeout: (id) => timers.delete(id),
    requestAnimationFrame: (fn) => { const id = ++sequence; frames.set(id, fn); return id; },
    cancelAnimationFrame: (id) => frames.delete(id)
  });
  vm.runInContext(readFileSync(new URL('../script.js', import.meta.url), 'utf8'), context);
  const doc = new Element(); doc.hidden = false;
  doc.querySelector = () => carousel; doc.getElementById = (id) => ids[id] || null;
  context.document = doc;
  vm.runInContext('setupHomeCarousel()', context);
  const tick = (amount) => {
    clock += amount;
    const pending = [...frames.values()]; frames.clear(); pending.forEach((fn) => fn(clock));
    for (const [id, timer] of [...timers]) if (timer.at <= clock) { timers.delete(id); timer.fn(); }
  };
  const touch = (x, y = 0) => ({ touches: [{ clientX: x, clientY: y }], preventDefault() {} });
  const drag = (progress, direction = 1) => carousel.emit('touchmove', touch(200 - direction * carousel.clientWidth * .68 * progress));
  const settle = () => { for (let i = 0; i < 90; i++) tick(16); };
  return { carousel, cards, ids, win, doc, frames, timers, tick, touch, drag, settle };
}

test('overlapping photos do not change stacking abruptly around halfway through a swipe', () => {
  for (const direction of [1, -1]) {
    const e = setup();
    e.carousel.emit('touchstart', e.touch(200)); e.drag(.47, direction);
    const before = e.cards.map((card) => ({ x: parseFloat(card.props['--fan-x']), z: card.style.zIndex }));
    const opacityBefore = Number(e.carousel.children[0].props['--fan-opacity']);
    e.drag(.49, direction);
    e.cards.forEach((card, i) => {
      assert.equal(card.style.zIndex, before[i].z, 'No midpoint layer swap');
      assert.ok(Math.abs(parseFloat(card.props['--fan-x']) - before[i].x) < 12, 'No position jump');
    });
    assert.ok(Math.abs(Number(e.carousel.children[0].props['--fan-opacity']) - opacityBefore) < .06, 'Continuous layer handoff');
  }
});

test('mobile toolbar height changes cannot cancel an active swipe', () => {
  const e = setup(); e.carousel.emit('touchstart', e.touch(200)); e.drag(.4);
  const before = e.cards[0].props['--fan-x'];
  e.win.emit('resize'); e.tick(160);
  assert.equal(e.cards[0].props['--fan-x'], before);
  assert.ok(e.carousel.classList.contains('is-dragging'));
});

test('swipes settle and loop in both directions without leaking overlay cards', () => {
  const e = setup(); e.ids.carouselPause.emit('click');
  for (const direction of [1, -1]) for (let i = 0; i < 6; i++) {
    e.carousel.emit('touchstart', e.touch(200)); e.drag(.65, direction); e.carousel.emit('touchend'); e.settle();
    assert.equal(e.carousel.children.length, 0);
    assert.ok(!e.carousel.classList.contains('is-animating'));
  }
  assert.equal(e.ids.carouselStatus.textContent, 'Imagen 1 de 6');
});

test('a canceled or vertical gesture does not advance a photo', () => {
  const e = setup(); e.carousel.emit('touchstart', e.touch(200)); e.drag(.7); e.carousel.emit('touchcancel'); e.settle();
  assert.equal(e.ids.carouselStatus.textContent, 'Imagen 1 de 6');
  e.carousel.emit('touchstart', e.touch(200)); e.carousel.emit('touchmove', e.touch(202, 80)); e.carousel.emit('touchend');
  assert.ok(!e.carousel.classList.contains('is-dragging'));
  assert.equal(e.carousel.children.length, 0);
});

test('width changes clear an unfinished transition and lay out the same active photo', () => {
  const e = setup(); e.carousel.emit('touchstart', e.touch(200)); e.drag(.4);
  e.win.innerWidth = 844; e.carousel.clientWidth = 828; e.win.emit('resize'); e.tick(160);
  assert.equal(e.carousel.children.length, 0);
  assert.equal(e.ids.carouselStatus.textContent, 'Imagen 1 de 6');
  assert.ok(!e.carousel.classList.contains('is-dragging'));
});

test('reduced motion keeps automatic movement off while allowing navigation', () => {
  const e = setup({ reduced: true });
  assert.equal(e.timers.size, 0); e.ids.carouselNext.emit('click');
  assert.equal(e.ids.carouselStatus.textContent, 'Imagen 2 de 6');
  assert.equal(e.frames.size, 0);
});
