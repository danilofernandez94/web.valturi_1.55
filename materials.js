const MATERIALS_WHATSAPP = typeof WHATSAPP_LINK !== 'undefined' ? WHATSAPP_LINK : 'https://wa.link/ogxnv3';

const materialFamilies = [
  {
    id: 'pana-panne',
    group: 'Tapicería',
    status: 'Disponible',
    title: 'Pana Panne antimancha',
    description:
      'Tela premium para tapizados y cortinería. Ya cargamos el muestrario real con colores, detalle de trama y ficha técnica.',
    shortMeta: ['19 tonos cargados', 'Proceso antimancha', 'Ideal para tapizados y cortinas'],
    preview: [
      'assets/materials/pana-panne/gamuza-main.webp',
      'assets/materials/pana-panne/azul-main.webp',
      'assets/materials/pana-panne/borravino-main.webp'
    ],
    href: 'material.html?id=pana-panne',
    live: true,
    filters: ['todos', 'tapiceria']
  },
  {
    id: 'pana-thor',
    group: 'Tapicería',
    status: 'Disponible',
    title: 'Pana Thor',
    description:
      'Colección tramada para tapicería con lectura más mate y textura visible. Ya cargamos tonos reales y acercamientos para consulta online.',
    shortMeta: ['12 tonos cargados', 'Trama visible', 'Ideal para tapicería interior'],
    preview: [
      'assets/materials/pana-thor/natural-main.webp',
      'assets/materials/pana-thor/bronce-main.webp',
      'assets/materials/pana-thor/azul-main.webp'
    ],
    href: 'material.html?id=pana-thor',
    live: true,
    filters: ['todos', 'tapiceria']
  },
  {
    id: 'pana-hulk',
    group: 'Tapicería',
    status: 'Disponible',
    title: 'Pana Hulk',
    description:
      'Pana de tacto suave y presencia cálida, pensada para tapicería interior. El muestrario reúne 12 tonos con vista completa y acercamiento de textura.',
    shortMeta: ['12 tonos cargados', '100% poliéster', 'Suave al tacto'],
    preview: [
      'assets/materials/pana-hulk/latte-main-640.webp',
      'assets/materials/pana-hulk/verde-ingles-main-640.webp',
      'assets/materials/pana-hulk/bronce-main-640.webp'
    ],
    href: 'material.html?id=pana-hulk',
    live: true,
    filters: ['todos', 'tapiceria']
  },
  {
    id: 'lino',
    group: 'Tapicería',
    status: 'En preparación',
    title: 'Linos',
    description: 'Estamos curando colores, tramas y composiciones para sumar una biblioteca consistente.',
    shortMeta: ['Próximamente', 'Tapicería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'tapiceria']
  },
  {
    id: 'cuero-vacuno',
    group: 'Tapicería',
    status: 'En preparación',
    title: 'Cuero vacuno',
    description: 'Se cargará con tonos, espesores y observaciones de terminación.',
    shortMeta: ['Próximamente', 'Tapicería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'tapiceria']
  },
  {
    id: 'cuerina-indoor',
    group: 'Tapicería',
    status: 'En preparación',
    title: 'Cuerina indoor',
    description: 'Colección pensada para interior, con foco en limpieza y mantenimiento.',
    shortMeta: ['Próximamente', 'Interior'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'tapiceria', 'interior']
  },
  {
    id: 'cuerina-outdoor',
    group: 'Exterior',
    status: 'En preparación',
    title: 'Cuerina outdoor',
    description: 'Material pensado para exterior. Sumaremos propiedades y recomendaciones de uso.',
    shortMeta: ['Próximamente', 'Exterior'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'exterior']
  },
  {
    id: 'gazas',
    group: 'Cortinería',
    status: 'En preparación',
    title: 'Gazas',
    description: 'Familia liviana para cortinería. Más adelante sumaremos caída, transparencia y tonos.',
    shortMeta: ['Próximamente', 'Cortinería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'cortineria']
  },
  {
    id: 'tejidos',
    group: 'Cortinería',
    status: 'En preparación',
    title: 'Tejidos',
    description: 'Selección de tejidos para resolver distintos niveles de calidez y textura.',
    shortMeta: ['Próximamente', 'Cortinería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'cortineria']
  },
  {
    id: 'tusor-liviano',
    group: 'Cortinería',
    status: 'En preparación',
    title: 'Tusor liviano',
    description: 'Se cargará con opciones suaves para acompañar ambientes más livianos.',
    shortMeta: ['Próximamente', 'Cortinería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'cortineria']
  },
  {
    id: 'tusor-pesado',
    group: 'Cortinería',
    status: 'En preparación',
    title: 'Tusor pesado',
    description: 'Alternativa con mayor cuerpo y caída para resolver cortinería con presencia.',
    shortMeta: ['Próximamente', 'Cortinería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'cortineria']
  },
  {
    id: 'blackout',
    group: 'Cortinería',
    status: 'En preparación',
    title: 'Blackout',
    description: 'Subiremos opciones con información de oscurecimiento, reverso y composición.',
    shortMeta: ['Próximamente', 'Cortinería'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'cortineria']
  },
  {
    id: 'lonas',
    group: 'Exterior',
    status: 'En preparación',
    title: 'Lonas',
    description: 'La familia ya queda creada para sumar subcategorías y usos cuando esté definida la selección final.',
    shortMeta: ['Próximamente', 'Subcategorías a definir'],
    placeholder: 'assets/materials/material-placeholder.svg',
    live: false,
    filters: ['todos', 'exterior']
  }
];

const materialCatalog = {
  'pana-panne': {
    title: 'Pana Panne antimancha',
    group: 'Tapicería',
    eyebrow: 'Biblioteca de materiales',
    assetPath: 'assets/materials/pana-panne',
    intro:
      'La Pana Panne es una tela de calidad premium con proceso antimancha (repele líquidos). Tiene un efecto marmolado, es semiopaca y pesada. Es suave al tacto y resistente, ideal para quienes buscan un tejido de excelente calidad para tapizados y cortinas.',
    chips: ['Proceso antimancha', 'Repele líquidos', 'Efecto marmolado', 'Semiopaca', 'Pesada'],
    specs: [
      { label: 'Composición', value: '100% poliéster' },
      { label: 'Ancho', value: '1,45 mts' },
      { label: 'Peso', value: '540 gr. por metro lineal' }
    ],
    uses: ['Tapizados', 'Sillas', 'Sillones', 'Sofás', 'Acolchados', 'Almohadones', 'Cortinería'],
    notes: [
      'El tono puede variar dependiendo de la partida y la pantalla.',
      'Las fotos se optimizaron para web cuidando que la paleta se vea lo más fiel posible.',
      'En tonos oscuros vamos a sumar también referencias sin sol directo para reforzar su lectura real.'
    ],
    future: [
      {
        title: 'Aplicado real',
        text: 'Más adelante podés sumar acá fotos de productos ya tapizados con cada tono para ayudar a visualizar mejor la tela en uso.'
      },
      {
        title: 'Prueba de repelencia',
        text: 'Para los textiles con tratamiento hidrófugo o antimanchas ya queda reservado un bloque donde luego podés mostrar foto o video de la prueba.'
      }
    ],
    colors: [
      { name: 'Azul', slug: 'azul' },
      { name: 'Beige', slug: 'beige' },
      { name: 'Borravino', slug: 'borravino' },
      { name: 'Chocolate', slug: 'chocolate' },
      { name: 'Dulce de leche', slug: 'dulce-de-leche' },
      { name: 'Fucsia', slug: 'fucsia' },
      { name: 'Gamuza', slug: 'gamuza' },
      { name: 'Gris', slug: 'gris' },
      { name: 'Jade', slug: 'jade' },
      { name: 'Lima', slug: 'lima' },
      { name: 'Naranja', slug: 'naranja' },
      { name: 'Natural', slug: 'natural' },
      { name: 'Negro', slug: 'negro' },
      { name: 'Océano', slug: 'oceano' },
      { name: 'Orange', slug: 'orange' },
      { name: 'Perla', slug: 'perla' },
      { name: 'Rojo', slug: 'rojo' },
      { name: 'Verde inglés', slug: 'verde-ingles' },
      { name: 'Violeta', slug: 'violeta' }
    ]
  },
  'pana-thor': {
    title: 'Pana Thor',
    group: 'Tapicería',
    eyebrow: 'Biblioteca de materiales',
    assetPath: 'assets/materials/pana-thor',
    intro:
      'La Pana Thor es una colección de tapicería con textura tramada, lectura mate y una presencia sobria que funciona muy bien en piezas contemporáneas. Cargamos el muestrario real con tomas cuidadas para que puedas ver color y trama con la mejor fidelidad posible desde la web.',
    chips: ['Textura tramada', 'Lectura mate', 'Tapicería interior', '12 tonos cargados'],
    specs: [
      { label: 'Colección', value: '12 tonos cargados' },
      { label: 'Enfoque', value: 'Tapicería y proyectos de interior' },
      { label: 'Visualización', value: 'Vista principal + zoom de trama' }
    ],
    uses: ['Tapizados', 'Sillas', 'Sillones', 'Sofás', 'Cabeceras', 'Almohadones decorativos'],
    notes: [
      'El tono puede variar según pantalla, luz ambiente y partida del textil.',
      'Las fotos se optimizaron priorizando fidelidad visual y detalle de trama, evitando sobreexponer los tonos claros.',
      'En tonos oscuros podemos sumar también referencias sin sol directo para reforzar su lectura real.'
    ],
    future: [
      {
        title: 'Aplicado real',
        text: 'Más adelante podés sumar acá fotos de muebles ya tapizados con cada tono para ayudar a visualizar mejor la tela en contexto.'
      },
      {
        title: 'Prueba hidrófuga',
        text: 'Cuando el material tenga esa propiedad, ya queda reservado un bloque para mostrar foto o video de la prueba con agua.'
      }
    ],
    colors: [
      { name: 'Alga', slug: 'alga' },
      { name: 'Azul', slug: 'azul' },
      { name: 'Beige', slug: 'beige' },
      { name: 'Bronce', slug: 'bronce' },
      { name: 'Dijon', slug: 'dijon' },
      { name: 'Gamuza', slug: 'gamuza' },
      { name: 'Gris', slug: 'gris' },
      { name: 'Gris oscuro', slug: 'gris-oscuro' },
      { name: 'Lino', slug: 'lino' },
      { name: 'Natural', slug: 'natural' },
      { name: 'Perla', slug: 'perla' },
      { name: 'Topo', slug: 'topo' }
    ]
  },
  'pana-hulk': {
    title: 'Pana Hulk',
    group: 'Tapicería',
    eyebrow: 'Biblioteca de materiales',
    assetPath: 'assets/materials/pana-hulk',
    responsiveImages: true,
    intro:
      'La Pana Hulk es un tejido 100% poliéster de tacto suave, pensado para sumar textura y calidez visual a piezas de interior. Su peso de 380 g y su superficie aterciopelada la convierten en una alternativa especialmente agradable para proyectos de otoño e invierno.',
    chips: ['Suave al tacto', '100% poliéster', 'Tapicería interior', 'Otoño · invierno'],
    specs: [
      { label: 'Composición', value: '100% poliéster' },
      { label: 'Ancho', value: '1,40 m' },
      { label: 'Peso', value: '380 g' }
    ],
    uses: ['Tapizados', 'Sillas', 'Sillones', 'Sofás', 'Cabeceras', 'Almohadones decorativos'],
    notes: [
      'El tono puede variar según la pantalla, la luz ambiente y la partida del textil.',
      'Las imágenes conservan la fotografía original y se normalizaron de tamaño sin recortar información relevante del muestrario.',
      'Para definir un tono con precisión recomendamos validar la muestra física antes de la confección.'
    ],
    future: [
      {
        title: 'Aplicado real',
        text: 'La ficha ya queda preparada para sumar fotografías de muebles tapizados con cada tono y mostrar cómo cambia la lectura del material sobre una pieza terminada.'
      }
    ],
    colors: [
      { name: 'Latte', slug: 'latte' },
      { name: 'Ivory', slug: 'ivory' },
      { name: 'Mustang', slug: 'mustang' },
      { name: 'Stone', slug: 'stone' },
      { name: 'Bronce', slug: 'bronce' },
      { name: 'Dijon', slug: 'dijon' },
      { name: 'Verde inglés', slug: 'verde-ingles' },
      { name: 'Musgo', slug: 'musgo' },
      { name: 'Azul', slug: 'azul' },
      { name: 'Piedra', slug: 'piedra' },
      { name: 'Ónix', slug: 'onix' },
      { name: 'Nickel', slug: 'nickel' }
    ]
  }
};

function createMaterialFamilyCard(item) {
  const meta = item.shortMeta.map((text) => `<span class="material-chip-muted">${text}</span>`).join('');
  const media = item.live
    ? `
      <div class="material-family-media">
        <span class="material-status-badge">${item.status}</span>
        <div class="material-family-preview">
          <div class="material-preview-main"><img src="${item.preview[0]}" alt="${item.title}" loading="lazy" decoding="async" /></div>
          <div class="material-preview-stack">
            <img src="${item.preview[1]}" alt="Detalle ${item.title}" loading="lazy" decoding="async" />
            <img src="${item.preview[2]}" alt="Detalle ${item.title}" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>`
    : `
      <div class="material-family-media">
        <span class="material-status-badge">${item.status}</span>
        <img src="${item.placeholder}" alt="${item.title}" loading="lazy" decoding="async" />
      </div>`;

  const actions = item.live
    ? `<div class="material-family-actions">
         <a class="material-link-button" href="${item.href}">Ver ficha completa</a>
         <a class="material-secondary-button" href="${MATERIALS_WHATSAPP}" target="_blank" rel="noreferrer">Consultar disponibilidad</a>
       </div>`
    : `<div class="material-family-actions">
         <a class="material-secondary-button" href="${MATERIALS_WHATSAPP}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
       </div>`;

  return `
    <article class="material-family-card ${item.live ? 'is-live' : 'is-placeholder'}" data-filters="${item.filters.join(' ')}">
      ${media}
      <div class="material-family-body">
        <div class="material-family-head">
          <div>
            <span class="material-group-badge">${item.group}</span>
            <h3>${item.title}</h3>
          </div>
        </div>
        <p>${item.description}</p>
        <div class="material-family-meta">${meta}</div>
        ${actions}
      </div>
    </article>`;
}

function renderMaterialsLibrary(activeFilter = 'todos') {
  const container = document.getElementById('materialsLibrary');
  if (!container) return;

  const filtered = materialFamilies.filter((item) => item.filters.includes(activeFilter));
  if (!filtered.length) {
    container.innerHTML = `<div class="materials-empty">No encontramos materiales para ese filtro todavía.</div>`;
    return;
  }

  container.innerHTML = filtered.map(createMaterialFamilyCard).join('');
}

function setupMaterialsFilters() {
  const buttons = document.querySelectorAll('[data-material-filter]');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      renderMaterialsLibrary(button.dataset.materialFilter);
    });
  });
}

function materialImageMarkup(material, color, kind, className, alt) {
  const isMain = kind === 'main';
  const src = `${material.assetPath}/${color.slug}-${kind}.webp`;
  if (!material.responsiveImages) {
    return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" decoding="async" />`;
  }

  const small = isMain
    ? `${material.assetPath}/${color.slug}-main-640.webp`
    : `${material.assetPath}/${color.slug}-detail-500.webp`;
  const srcset = isMain
    ? `${small} 640w, ${src} 1200w`
    : `${small} 500w, ${src} 1100w`;
  const sizes = isMain ? '(max-width: 760px) 92vw, 33vw' : '(max-width: 760px) 26vw, 110px';

  return `<img class="${className}" src="${small}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" loading="lazy" decoding="async" />`;
}

function renderMaterialSwatch(material, color) {
  const mainSrc = `${material.assetPath}/${color.slug}-main.webp`;
  const detailSrc = `${material.assetPath}/${color.slug}-detail.webp`;
  return `
    <article class="material-swatch-card">
      <button type="button" class="material-swatch-trigger" data-lightbox-name="${color.name}" data-lightbox-main="${mainSrc}" data-lightbox-detail="${detailSrc}">
        <div class="material-swatch-main">
          ${materialImageMarkup(material, color, 'main', '', `Tela ${material.title} color ${color.name}`)}
        </div>
        <div class="material-swatch-content">
          <div class="material-swatch-topline">
            <h3>${color.name}</h3>
            <span class="material-chip-muted">Ver detalle</span>
          </div>
          <div class="material-swatch-detail">
            <div class="material-swatch-detail-thumb">
              ${materialImageMarkup(material, color, 'detail', '', `Detalle de trama ${color.name}`)}
            </div>
            <p class="material-swatch-note">Vista de textura para apreciar mejor trama, matices y profundidad del tono.</p>
          </div>
        </div>
      </button>
    </article>`;
}

function renderMaterialDetail() {
  const container = document.getElementById('materialDetail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const materialId = params.get('id') || 'pana-panne';
  const material = materialCatalog[materialId];
  if (!material) return;

  document.title = `${material.title} | Valturi`;

  container.innerHTML = `
    <section class="page-hero page-hero-compact">
      <div class="eyebrow">${material.eyebrow}</div>
      <h1>${material.title}</h1>
    </section>

    <section class="material-detail-shell top-tight">
      <article class="material-hero-card">
        <div class="material-copy-block">
          <nav class="material-breadcrumb" aria-label="Breadcrumb">
            <a href="materiales.html">Materiales</a>
            <span>•</span>
            <span>${material.title}</span>
          </nav>
          <div class="material-hero-tags">
            <span class="material-group-badge">${material.group}</span>
            ${material.chips.map((chip) => `<span class="material-chip">${chip}</span>`).join('')}
          </div>
          <p class="material-intro">${material.intro}</p>
          <div class="material-hero-actions">
            <a class="material-link-button" href="${MATERIALS_WHATSAPP}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
            <a class="material-secondary-button" href="materiales.html">Volver a materiales</a>
          </div>
        </div>
        <aside class="material-data-panel" aria-label="Ficha técnica">
          <div class="material-data-heading">
            <span class="material-data-kicker">Ficha esencial</span>
            <span class="material-data-caption">Datos del material</span>
          </div>
          <dl class="material-data-list">
            ${material.specs.map((spec) => `
              <div class="material-data-row">
                <dt>${spec.label}</dt>
                <dd>${spec.value}</dd>
              </div>`).join('')}
          </dl>
        </aside>
      </article>

      <section class="material-section-block">
        <div class="material-section-heading">
          <div>
            <h2 class="material-section-title">Colores disponibles</h2>
            <p>Cada tono combina una vista completa con un acercamiento de textura para comparar mejor sin sacrificar calidad.</p>
          </div>
          <div class="material-legend">
            <span class="material-chip-muted">Vista principal</span>
            <span class="material-chip-muted">Detalle de trama</span>
          </div>
        </div>
        <div class="material-gallery-grid">
          ${material.colors.map((color) => renderMaterialSwatch(material, color)).join('')}
        </div>
      </section>

      <section class="material-info-grid">
        <article class="material-callout">
          <h3>Usos sugeridos</h3>
          <ul class="material-uses-list">
            ${material.uses.map((use) => `<li>${use}</li>`).join('')}
          </ul>
        </article>
        <article class="material-callout">
          <h3>Antes de elegir</h3>
          <ul>
            ${material.notes.map((note) => `<li>${note}</li>`).join('')}
          </ul>
        </article>
      </section>

      ${material.future?.length ? `
      <section class="material-future-grid">
        ${material.future.map((item) => `
          <article class="material-future-card">
            <span class="material-data-kicker">Próxima capa</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </section>` : ''}
    </section>

    <div class="material-lightbox" id="materialLightbox" aria-hidden="true">
      <div class="material-lightbox-panel">
        <div class="material-lightbox-head">
          <div>
            <h3 id="materialLightboxTitle">Detalle del material</h3>
            <p class="material-hint">Vista completa y acercamiento de textura en alta definición.</p>
          </div>
          <button class="material-lightbox-close" type="button" aria-label="Cerrar">✕</button>
        </div>
        <div class="material-lightbox-grid">
          <img id="materialLightboxMain" src="" alt="" />
          <img id="materialLightboxDetail" src="" alt="" />
        </div>
      </div>
    </div>
  `;

  setupMaterialLightbox(material.title);
}

function setupMaterialLightbox(materialTitle) {
  const lightbox = document.getElementById('materialLightbox');
  if (!lightbox) return;

  const title = document.getElementById('materialLightboxTitle');
  const main = document.getElementById('materialLightboxMain');
  const detail = document.getElementById('materialLightboxDetail');
  const closeButton = lightbox.querySelector('.material-lightbox-close');
  const triggers = document.querySelectorAll('.material-swatch-trigger');

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const name = trigger.dataset.lightboxName;
      title.textContent = `${name} · ${materialTitle}`;
      main.src = trigger.dataset.lightboxMain;
      main.alt = `Tela ${materialTitle} color ${name}`;
      detail.src = trigger.dataset.lightboxDetail;
      detail.alt = `Detalle de trama ${name}`;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  closeButton?.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('materialsLibrary')) {
    renderMaterialsLibrary();
    setupMaterialsFilters();
  }

  if (document.getElementById('materialDetail')) {
    renderMaterialDetail();
  }
});
