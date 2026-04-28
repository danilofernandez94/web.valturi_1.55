const WHATSAPP_LINK = 'https://wa.link/ogxnv3';

const products = [
  {
    id: 'silla-nordica-lino',
    name: 'Silla Nórdica Lino',
    price: '$ 185.000',
    category: 'Sillas',
    shortDescription: 'Silla tapizada para comedor o escritorio con terminación en lino.',
    description:
      'Ideal para sumar calidez y textura a livings, comedores o espacios de trabajo. El objetivo de este catálogo es mostrar el producto y derivar la consulta a WhatsApp.',
    features: ['Tapizado premium', 'Terminación prolija', 'Consulta personalizada por color'],
    image: 'assets/product-01.svg'
  },
  {
    id: 'banqueta-canelon',
    name: 'Banqueta Canelón',
    price: '$ 142.000',
    category: 'Banquetas',
    shortDescription: 'Banqueta compacta con detalle canelón y estructura firme.',
    description:
      'Pensada para barras, desayunadores o sectores de apoyo. Podés adaptar tela, tono y terminación según disponibilidad.',
    features: ['Opciones de tela', 'Medidas consultables', 'Salida directa a WhatsApp'],
    image: 'assets/product-02.svg'
  },
  {
    id: 'cabecera-curva',
    name: 'Cabecera Curva',
    price: '$ 260.000',
    category: 'Dormitorio',
    shortDescription: 'Cabecera tapizada con líneas suaves y estética contemporánea.',
    description:
      'Una pieza pensada para vestir el dormitorio con una solución elegante y funcional. En la versión final podés sumar más variantes.',
    features: ['Diseño a medida', 'Asesoramiento en telas', 'Presupuesto por WhatsApp'],
    image: 'assets/product-03.svg'
  },
  {
    id: 'almohadon-premium',
    name: 'Almohadón Premium',
    price: '$ 38.000',
    category: 'Decoración',
    shortDescription: 'Almohadón decorativo para sumar textura y contraste.',
    description:
      'Producto ideal para acompañar trabajos de tapicería o complementar una ambientación ya resuelta.',
    features: ['Varias medidas', 'Diferentes tonos', 'Consulta directa'],
    image: 'assets/product-04.svg'
  },
  {
    id: 'sillon-curvo',
    name: 'Sillón Curvo',
    price: '$ 590.000',
    category: 'Sillones',
    shortDescription: 'Sillón protagonista para living, lobby o rincón de lectura.',
    description:
      'Modelo pensado para destacar en espacios con una estética más cálida y contemporánea.',
    features: ['Opciones de género', 'Posibilidad de personalización', 'Atención por WhatsApp'],
    image: 'assets/product-05.svg'
  },
  {
    id: 'respaldo-botones',
    name: 'Respaldo Botones',
    price: '$ 320.000',
    category: 'Dormitorio',
    shortDescription: 'Respaldo capitoné para dormitorios con una presencia clásica.',
    description:
      'Una opción visualmente fuerte para proyectos que buscan un detalle decorativo más marcado.',
    features: ['Capitoné artesanal', 'Hecho a medida', 'Consulta personalizada'],
    image: 'assets/product-06.svg'
  }
];

function createWhatsappLink() {
  return WHATSAPP_LINK;
}

function formatInquiryMessage(productName) {
  return `Hola! Quiero consultar por ${productName}. ¿Me pasan más info?`;
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">No encontramos productos con esa búsqueda.</div>`;
    return;
  }

  grid.innerHTML = list
    .map(
      (product) => `
      <article class="product-card card">
        <a class="product-thumb" href="producto.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </a>
        <div class="product-meta">
          <div>
            <h3>${product.name}</h3>
            <p>${product.category}</p>
          </div>
          <div class="product-price">${product.price}</div>
        </div>
        <p>${product.shortDescription}</p>
        <div class="product-actions">
          <a class="link-button link-muted" href="producto.html?id=${product.id}">Ver producto</a>
          <a class="link-button link-accent" href="${createWhatsappLink()}" target="_blank" rel="noreferrer">Consultar</a>
        </div>
      </article>
    `
    )
    .join('');
}

function bindSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    const filtered = products.filter((product) => {
      return [product.name, product.category, product.shortDescription]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });

    renderProducts(filtered);
  });
}

function setupWhatsappButtons() {
    ['contactWhatsapp', 'footerWhatsapp', 'homeBannerWhatsapp'].forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.href = createWhatsappLink();
      element.target = '_blank';
      element.rel = 'noreferrer';
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!menuToggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    nav.classList.add('open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const toggleMenu = (event) => {
    if (event) event.stopPropagation();
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
      requestAnimationFrame(closeMenu);
      window.setTimeout(closeMenu, 40);
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

  window.addEventListener('pageshow', closeMenu);
  window.addEventListener('pagehide', closeMenu);
  window.addEventListener('load', closeMenu);
  window.addEventListener('beforeunload', closeMenu);
  window.addEventListener('popstate', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  closeMenu();
}

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find((item) => item.id === productId) || products[0];

  document.title = `${product.name} | Valturi`;

  container.innerHTML = `
    <div class="detail-layout">
      <div class="detail-media card">
        <img src="${product.image}" alt="${product.name}" />
      </div>

      <div class="detail-copy">
        <span class="detail-tag">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="detail-price">${product.price}</div>
        <p>${product.description}</p>
        <ul class="detail-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="contact-actions">
          <a class="button button-primary" href="${createWhatsappLink()}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
          <a class="button button-secondary" href="productos.html">Volver al catálogo</a>
        </div>
      </div>
    </div>
  `;
}


function setupHomeCarousel() {
  const carousel = document.querySelector('.hero-fan-carousel');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('[data-home-card]'));
  const total = cards.length;
  if (total < 2) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobileBreakpoint = 760;

  const desktopSlots = [
    { x: 0.50, y: 0.02, rotate: 0, scale: 1.12, z: 6, opacity: 1 },
    { x: 0.73, y: 0.16, rotate: 6, scale: 0.99, z: 4, opacity: 0.94 },
    { x: 0.88, y: 0.39, rotate: 11, scale: 0.86, z: 2, opacity: 0.78 },
    { x: 1.06, y: 0.56, rotate: 14, scale: 0.72, z: 1, opacity: 0 },
    { x: 0.12, y: 0.39, rotate: -11, scale: 0.86, z: 2, opacity: 0.78 },
    { x: 0.27, y: 0.16, rotate: -6, scale: 0.99, z: 4, opacity: 0.94 }
  ];

  const mobileSlots = [
    { x: 0.50, y: 0.02, rotate: 0, scale: 1, z: 6, opacity: 1 },
    { x: 0.80, y: 0.10, rotate: 8, scale: 0.88, z: 4, opacity: 0.78 },
    { x: 1.12, y: 0.22, rotate: 12, scale: 0.74, z: 2, opacity: 0 },
    { x: 1.28, y: 0.28, rotate: 16, scale: 0.66, z: 1, opacity: 0 },
    { x: -0.12, y: 0.22, rotate: -12, scale: 0.74, z: 2, opacity: 0 },
    { x: 0.20, y: 0.10, rotate: -8, scale: 0.88, z: 4, opacity: 0.78 }
  ];

  let activeIndex = 0;
  let autoTimer = null;
  let resizeTimer = null;
  let isDragging = false;
  let dragProgress = 0;
  let dragDirection = 1;
  let startX = 0;
  let startY = 0;
  let dragLocked = false;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerp(from, to, progress) {
    return from + (to - from) * progress;
  }

  function slotDistance(cardIndex, index) {
    return (cardIndex - index + total) % total;
  }

  function getSlots() {
    return window.innerWidth <= mobileBreakpoint ? mobileSlots : desktopSlots;
  }

  function getSlotFor(cardIndex, index, slots) {
    const distance = slotDistance(cardIndex, index);
    return slots[distance] || slots[slots.length - 1];
  }

  function applySlot(card, slot, dims) {
    const cardWidth = card.offsetWidth;
    const x = dims.width * slot.x - cardWidth / 2;
    const y = dims.height * slot.y;

    card.style.setProperty('--fan-x', `${x}px`);
    card.style.setProperty('--fan-y', `${y}px`);
    card.style.setProperty('--fan-rotate', `${slot.rotate}deg`);
    card.style.setProperty('--fan-scale', `${slot.scale}`);
    card.style.setProperty('--fan-opacity', `${slot.opacity}`);
    card.style.zIndex = String(slot.z);
    card.classList.toggle('is-hidden', slot.opacity === 0);
  }

  function render(progress = 0, direction = 1) {
    const slots = getSlots();
    const dims = {
      width: carousel.clientWidth,
      height: carousel.clientHeight || carousel.offsetHeight
    };

    cards.forEach((card, cardIndex) => {
      const currentSlot = getSlotFor(cardIndex, activeIndex, slots);
      let finalSlot = currentSlot;

      if (progress > 0) {
        const nextIndex = (activeIndex + direction + total) % total;
        const targetSlot = getSlotFor(cardIndex, nextIndex, slots);

        finalSlot = {
          x: lerp(currentSlot.x, targetSlot.x, progress),
          y: lerp(currentSlot.y, targetSlot.y, progress),
          rotate: lerp(currentSlot.rotate, targetSlot.rotate, progress),
          scale: lerp(currentSlot.scale, targetSlot.scale, progress),
          z: progress < 0.5 ? currentSlot.z : targetSlot.z,
          opacity: lerp(currentSlot.opacity, targetSlot.opacity, progress)
        };
      }

      applySlot(card, finalSlot, dims);
    });
  }

  function stopAuto() {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAuto() {
    stopAuto();
    if (prefersReducedMotion) return;

    autoTimer = window.setInterval(() => {
      if (isDragging) return;
      activeIndex = (activeIndex + 1) % total;
      render();
    }, 3000);
  }

  function setDraggingState(value) {
    isDragging = value;
    carousel.classList.toggle('is-dragging', value);
  }

  function resetDrag() {
    dragProgress = 0;
    dragDirection = 1;
    dragLocked = false;
  }

  function finalizeDrag(shouldAdvance) {
    const direction = dragDirection;
    setDraggingState(false);

    if (shouldAdvance) {
      activeIndex = (activeIndex + direction + total) % total;
    }

    resetDrag();

    window.requestAnimationFrame(() => {
      render();
      startAuto();
    });
  }

  function handleTouchStart(event) {
    if (window.innerWidth > mobileBreakpoint) return;
    if (!event.touches.length) return;

    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    dragProgress = 0;
    dragDirection = 1;
    dragLocked = false;
    stopAuto();
    setDraggingState(true);
  }

  function handleTouchMove(event) {
    if (!isDragging || window.innerWidth > mobileBreakpoint || !event.touches.length) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (!dragLocked) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        setDraggingState(false);
        resetDrag();
        startAuto();
        return;
      }

      if (Math.abs(deltaX) > 8) {
        dragLocked = true;
      }
    }

    if (!dragLocked) return;

    event.preventDefault();

    dragDirection = deltaX < 0 ? 1 : -1;
    dragProgress = clamp(Math.abs(deltaX) / (carousel.clientWidth * 0.68), 0, 1);
    render(dragProgress, dragDirection);
  }

  function handleTouchEnd() {
    if (!isDragging) return;
    finalizeDrag(dragProgress > 0.18);
  }

  function syncLayout() {
    setDraggingState(false);
    resetDrag();
    render();
    startAuto();
  }

  syncLayout();

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(syncLayout, 120);
  });

  carousel.addEventListener('mouseenter', () => {
    if (window.innerWidth > mobileBreakpoint) stopAuto();
  });

  carousel.addEventListener('mouseleave', () => {
    if (window.innerWidth > mobileBreakpoint) startAuto();
  });

  carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
  carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
  carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
  carousel.addEventListener('touchcancel', handleTouchEnd, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAuto();
      return;
    }
    startAuto();
  });
}

renderProducts(products);
bindSearch();
setupWhatsappButtons();
setupMenu();
setupHomeCarousel();
renderProductDetail();
