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
  if (!cards.length) return;

  const desktopSlots = [
    { x: 34, y: 266, rotate: -10, scale: 0.98, z: 2, opacity: 1 },
    { x: 212, y: 82, rotate: -4, scale: 1.04, z: 4, opacity: 1 },
    { x: 422, y: 16, rotate: 0, scale: 1.18, z: 6, opacity: 1 },
    { x: 646, y: 92, rotate: 6, scale: 1.04, z: 4, opacity: 1 },
    { x: 804, y: 284, rotate: 10, scale: 0.98, z: 2, opacity: 1 },
    { x: 564, y: 426, rotate: 3, scale: 0.78, z: 1, opacity: 0 }
  ];

  let offset = 0;
  let timer = null;

  function clearCardStyle(card) {
    card.style.removeProperty('--fan-x');
    card.style.removeProperty('--fan-y');
    card.style.removeProperty('--fan-rotate');
    card.style.removeProperty('--fan-scale');
    card.style.removeProperty('--fan-opacity');
    card.style.removeProperty('z-index');
    card.classList.remove('is-hidden');
  }

  function applyDesktop() {
    carousel.classList.remove('is-mobile-layout');
    cards.forEach((card, index) => {
      const slot = desktopSlots[(index + offset) % desktopSlots.length];
      card.style.setProperty('--fan-x', `${slot.x}px`);
      card.style.setProperty('--fan-y', `${slot.y}px`);
      card.style.setProperty('--fan-rotate', `${slot.rotate}deg`);
      card.style.setProperty('--fan-scale', `${slot.scale}`);
      card.style.setProperty('--fan-opacity', `${slot.opacity}`);
      card.style.zIndex = String(slot.z);
      card.classList.toggle('is-hidden', slot.opacity === 0);
    });
  }

  function applyMobile() {
    cards.forEach(clearCardStyle);
  }

  function stopTimer() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    stopTimer();
    timer = window.setInterval(() => {
      offset = (offset + 1) % cards.length;
      applyDesktop();
    }, 3000);
  }

  function syncLayout() {
    const isMobile = window.innerWidth <= 760;
    if (isMobile) {
      stopTimer();
      applyMobile();
      return;
    }
    applyDesktop();
    startTimer();
  }

  syncLayout();
  window.addEventListener('resize', syncLayout);

  carousel.addEventListener('mouseenter', () => {
    if (window.innerWidth > 760) stopTimer();
  });

  carousel.addEventListener('mouseleave', () => {
    if (window.innerWidth > 760) startTimer();
  });
}

renderProducts(products);
bindSearch();
setupWhatsappButtons();
setupMenu();
setupHomeCarousel();
renderProductDetail();
