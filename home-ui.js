/* Navegación y muestrario. El formulario funciona en su propio archivo. */
(() => {
  'use strict';
  const menu = document.getElementById('mobile-menu');
  const trigger = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  if (menu && trigger && close) {
    let restoreFocus = true;
    trigger.addEventListener('click', () => {
      restoreFocus = true;
      menu.showModal();
      trigger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
      close.focus({ preventScroll: true });
    });
    close.addEventListener('click', () => menu.close());
    menu.addEventListener('close', () => {
      trigger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      if (restoreFocus) trigger.focus({ preventScroll: true });
    });
    menu.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link) {
        restoreFocus = false;
        menu.close();
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
          const target = href === '#consulta' ? document.getElementById('lead-name') : document.querySelector(href);
          if (target) {
            if (!target.matches('input,button,a')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        }
      } else if (event.target === menu) {
        const rect = menu.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right) menu.close();
      }
    });
    const desktop = window.matchMedia('(min-width: 1000px)');
    desktop.addEventListener('change', () => {
      if (desktop.matches && menu.open) { restoreFocus = false; menu.close(); }
    });
  }

  const carousel = document.getElementById('material-carousel');
  const track = document.getElementById('swatch-track');
  if (!carousel || !track) return;
  const samples = Array.from(track.querySelectorAll('.swatch-card'));
  const previous = document.getElementById('sample-prev');
  const next = document.getElementById('sample-next');
  const play = document.getElementById('sample-play');
  const label = play.querySelector('[data-play-label]');
  const announcement = document.getElementById('sample-announcement');
  const controls = carousel.querySelector('[data-carousel-controls]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let automatic = !reducedMotion.matches;
  let visible = false;
  let positions = [0];
  let current = 0;
  let direction = 1;
  let timer = null;
  let scrollTimer = null;
  let resizeTimer = null;

  function nearest() {
    let found = 0;
    positions.forEach((position, index) => {
      if (Math.abs(position - track.scrollLeft) < Math.abs(positions[found] - track.scrollLeft)) found = index;
    });
    return found;
  }

  function update() {
    current = nearest();
    previous.disabled = current === 0;
    next.disabled = current === positions.length - 1;
    // El desplazamiento táctil nunca depende de transformaciones del contenedor.
    let nearestSample = 0;
    samples.forEach((sample, index) => {
      if (Math.abs(sample.offsetLeft - track.scrollLeft - 6) < Math.abs(samples[nearestSample].offsetLeft - track.scrollLeft - 6)) nearestSample = index;
    });
    samples.forEach((sample, index) => sample.classList.toggle('is-current', index === nearestSample));
  }

  function measure() {
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    positions = [...new Set(samples.map((sample) => Math.round(Math.max(0, Math.min(sample.offsetLeft - 6, max)))))];
    if (!positions.length) positions = [0];
    update();
  }

  function clearTimer() { window.clearTimeout(timer); timer = null; }

  function goTo(index, announce = false) {
    const target = Math.max(0, Math.min(index, positions.length - 1));
    track.scrollTo({ left: positions[target], behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    if (announce) announcement.textContent = `Vista ${target + 1} de ${positions.length} del muestrario.`;
  }

  function schedule() {
    clearTimer();
    if (!automatic || !visible || document.hidden || positions.length < 2) return;
    timer = window.setTimeout(() => {
      current = nearest();
      if (current === positions.length - 1) direction = -1;
      else if (current === 0) direction = 1;
      // Al llegar al extremo vuelve de a una posición, sin saltar al inicio.
      goTo(current + direction);
      schedule();
    }, 8000);
  }

  function setAutomatic(value) {
    automatic = value;
    play.setAttribute('aria-pressed', String(automatic));
    play.setAttribute('aria-label', automatic ? 'Pausar movimiento de materiales' : 'Reproducir movimiento de materiales');
    label.textContent = automatic ? 'Pausar' : 'Reproducir';
    schedule();
  }

  function pause() { if (automatic) setAutomatic(false); }
  previous.addEventListener('click', () => { pause(); goTo(nearest() - 1, true); });
  next.addEventListener('click', () => { pause(); goTo(nearest() + 1, true); });
  play.addEventListener('click', () => setAutomatic(!automatic));
  track.addEventListener('pointerdown', pause, { passive: true });
  track.addEventListener('wheel', pause, { passive: true });
  track.addEventListener('focusin', pause);
  track.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') pause(); });
  track.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    pause();
    if (event.key === 'Home') goTo(0, true);
    else if (event.key === 'End') goTo(positions.length - 1, true);
    else goTo(nearest() + (event.key === 'ArrowRight' ? 1 : -1), true);
  });
  track.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(update, 100);
  }, { passive: true });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) setAutomatic(false); });
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => { measure(); schedule(); }, 150);
  }, { passive: true });
  window.addEventListener('pagehide', () => {
    clearTimer();
    window.clearTimeout(scrollTimer);
    window.clearTimeout(resizeTimer);
  });
  window.addEventListener('pageshow', schedule);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      schedule();
    }, { threshold: .25 });
    observer.observe(carousel);
  } else visible = true;
  measure();
  controls.hidden = false;
  setAutomatic(automatic);
})();
