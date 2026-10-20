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

  const privacy = document.getElementById('privacy-dialog');
  if (privacy) {
    let dialogTrigger = null;
    document.querySelectorAll('[data-privacy]').forEach((button) => {
      button.addEventListener('click', () => { dialogTrigger = button; privacy.showModal(); });
    });
    privacy.querySelector('[data-close-privacy]')?.addEventListener('click', () => privacy.close());
    privacy.addEventListener('close', () => dialogTrigger?.focus({ preventScroll: true }));
  }
  const year = document.getElementById('footer-year');
  if (year) year.textContent = new Date().getFullYear();

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
  const progress = carousel.querySelector('[data-carousel-progress]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let automatic = !reducedMotion.matches;
  let visible = false;
  let positions = [0];
  let sampleOffsets = [];
  let maximum = 0;
  let current = 0;
  let targetIndex = null;
  let direction = 1;
  let timer = null;
  let animationFrame = 0;
  let paintFrame = 0;
  let snapFrame = 0;
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
    const selected = targetIndex ?? current;
    previous.disabled = selected === 0;
    next.disabled = selected === positions.length - 1;
    let nearestSample = 0;
    sampleOffsets.forEach((offset, index) => {
      if (Math.abs(offset - track.scrollLeft) < Math.abs(sampleOffsets[nearestSample] - track.scrollLeft)) nearestSample = index;
    });
    samples.forEach((sample, index) => sample.classList.toggle('is-current', index === nearestSample));
    if (progress) {
      const fraction = maximum > 0 ? Math.max(0, Math.min(1, track.scrollLeft / maximum)) : 1;
      progress.style.transform = `scaleX(${fraction.toFixed(4)})`;
    }
  }

  function measure() {
    maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    const origin = samples[0]?.offsetLeft || 0;
    sampleOffsets = samples.map((sample) => sample.offsetLeft - origin);
    positions = [...new Set(sampleOffsets.map((offset) => Math.round(Math.max(0, Math.min(offset, maximum)))))];
    if (!positions.length) positions = [0];
    update();
  }

  function clearTimer() { window.clearTimeout(timer); timer = null; }

  function cancelMotion(restoreSnap = true) {
    window.cancelAnimationFrame(animationFrame);
    window.cancelAnimationFrame(snapFrame);
    animationFrame = 0;
    snapFrame = 0;
    targetIndex = null;
    if (restoreSnap) track.classList.remove('is-gliding');
    update();
  }

  function goTo(index, announce = false) {
    const target = Math.max(0, Math.min(index, positions.length - 1));
    const from = Math.max(0, Math.min(track.scrollLeft, maximum));
    const to = positions[target];
    cancelMotion(false);
    targetIndex = target;
    // Snap y animación programada nunca actúan a la vez.
    track.classList.add('is-gliding');
    if (announce) announcement.textContent = `Vista ${target + 1} de ${positions.length} del muestrario.`;
    const finish = () => {
      track.scrollTo({ left: to, behavior: 'auto' });
      animationFrame = 0;
      targetIndex = null;
      update();
      snapFrame = window.requestAnimationFrame(() => {
        snapFrame = 0;
        track.classList.remove('is-gliding');
      });
    };
    if (reducedMotion.matches || Math.abs(to - from) < .5) { finish(); return; }
    let startedAt = null;
    const duration = 760;
    const frame = (time) => {
      if (startedAt === null) startedAt = time;
      const elapsed = Math.min(1, (time - startedAt) / duration);
      const eased = (1 - Math.cos(Math.PI * elapsed)) / 2;
      track.scrollTo({ left: from + (to - from) * eased, behavior: 'auto' });
      update();
      if (elapsed < 1) animationFrame = window.requestAnimationFrame(frame);
      else finish();
    };
    animationFrame = window.requestAnimationFrame(frame);
    update();
  }

  function advance() {
    current = nearest();
    if (current === positions.length - 1) direction = -1;
    else if (current === 0) direction = 1;
    goTo(current + direction);
  }

  function schedule() {
    clearTimer();
    if (!automatic || !visible || document.hidden || positions.length < 2) return;
    timer = window.setTimeout(() => { advance(); schedule(); }, 8000);
  }

  function setAutomatic(value) {
    automatic = value;
    play.setAttribute('aria-pressed', String(automatic));
    play.setAttribute('aria-label', automatic ? 'Pausar movimiento de materiales' : 'Reproducir movimiento de materiales');
    label.textContent = automatic ? 'Pausar' : 'Reproducir';
    schedule();
  }

  function pause() { if (automatic) setAutomatic(false); }
  function interrupt() {
    pause();
    cancelMotion(false);
    // El gesto continúa libre desde la posición actual, sin un ajuste forzado.
    track.classList.add('is-gliding');
  }
  previous.addEventListener('click', () => {
    const base = targetIndex ?? nearest();
    pause();
    goTo(base - 1, true);
  });
  next.addEventListener('click', () => {
    const base = targetIndex ?? nearest();
    pause();
    goTo(base + 1, true);
  });
  play.addEventListener('click', () => {
    if (automatic) { setAutomatic(false); cancelMotion(); }
    else {
      setAutomatic(true);
      if (visible && !document.hidden && positions.length > 1) advance();
    }
  });
  track.addEventListener('pointerdown', interrupt, { passive: true });
  track.addEventListener('wheel', interrupt, { passive: true });
  track.addEventListener('focusin', interrupt);
  track.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') interrupt(); });
  track.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const base = targetIndex ?? nearest();
    pause();
    if (event.key === 'Home') goTo(0, true);
    else if (event.key === 'End') goTo(positions.length - 1, true);
    else goTo(base + (event.key === 'ArrowRight' ? 1 : -1), true);
  });
  track.addEventListener('scroll', () => {
    if (animationFrame || paintFrame) return;
    paintFrame = window.requestAnimationFrame(() => { paintFrame = 0; update(); });
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelMotion();
    schedule();
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) { setAutomatic(false); cancelMotion(); }
  });
  window.addEventListener('resize', () => {
    cancelMotion();
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => { measure(); schedule(); }, 150);
  }, { passive: true });
  window.addEventListener('pagehide', () => {
    clearTimer();
    cancelMotion();
    window.cancelAnimationFrame(paintFrame);
    paintFrame = 0;
    window.clearTimeout(resizeTimer);
  });
  window.addEventListener('pageshow', () => { measure(); schedule(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (!visible) cancelMotion();
      schedule();
    }, { threshold: .25 });
    observer.observe(carousel);
  } else visible = true;
  measure();
  controls.hidden = false;
  setAutomatic(automatic);
})();
