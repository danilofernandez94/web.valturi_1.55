const SITE_CONFIG = {
  whatsappNumber: '543515930925',
  genericWhatsappMessage: 'Hola! Quiero hacer una consulta 😃',
  baseUrl: 'https://web-valturi-1-55.vercel.app'
};

const products = [
  { id:'silla-nordica-lino', name:'Silla Nórdica Lino', price:'$ 185.000', priceValue:185000, category:'Sillas', shortDescription:'Silla tapizada para comedor o escritorio con terminación en lino.', description:'Ideal para sumar calidez y textura a livings, comedores o espacios de trabajo. Consultanos por las opciones de tapizado y terminación para tu espacio.', features:['Tapizado premium','Terminación prolija','Consulta personalizada por color'], image:'assets/product-01.svg' },
  { id:'banqueta-canelon', name:'Banqueta Canelón', price:'$ 142.000', priceValue:142000, category:'Banquetas', shortDescription:'Banqueta compacta con detalle canelón y estructura firme.', description:'Pensada para barras, desayunadores o sectores de apoyo. Podés adaptar tela, tono y terminación según disponibilidad.', features:['Opciones de tela','Medidas consultables','Salida directa a WhatsApp'], image:'assets/product-02.svg' },
  { id:'cabecera-curva', name:'Cabecera Curva', price:'$ 260.000', priceValue:260000, category:'Dormitorio', shortDescription:'Cabecera tapizada con líneas suaves y estética contemporánea.', description:'Una pieza pensada para vestir el dormitorio con una solución elegante y funcional. Consultanos por las medidas y alternativas de tapizado.', features:['Diseño a medida','Asesoramiento en telas','Presupuesto por WhatsApp'], image:'assets/product-03.svg' },
  { id:'almohadon-premium', name:'Almohadón Premium', price:'$ 38.000', priceValue:38000, category:'Decoración', shortDescription:'Almohadón decorativo para sumar textura y contraste.', description:'Producto ideal para acompañar trabajos de tapicería o complementar una ambientación ya resuelta.', features:['Varias medidas','Diferentes tonos','Consulta directa'], image:'assets/product-04.svg' },
  { id:'sillon-curvo', name:'Sillón Curvo', price:'$ 590.000', priceValue:590000, category:'Sillones', shortDescription:'Sillón protagonista para living, lobby o rincón de lectura.', description:'Modelo pensado para destacar en espacios con una estética más cálida y contemporánea.', features:['Opciones de género','Posibilidad de personalización','Atención por WhatsApp'], image:'assets/product-05.svg' },
  { id:'respaldo-botones', name:'Respaldo Botones', price:'$ 320.000', priceValue:320000, category:'Dormitorio', shortDescription:'Respaldo capitoné para dormitorios con una presencia clásica.', description:'Una opción visualmente fuerte para proyectos que buscan un detalle decorativo más marcado.', features:['Capitoné artesanal','Hecho a medida','Consulta personalizada'], image:'assets/product-06.svg' }
];

function createWhatsappLink(message = SITE_CONFIG.genericWhatsappMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function formatInquiryMessage(productName) {
  return `Hola! Quiero consultar por ${productName}, que vi en la web de Valturi. ¿Me pasan más información?`;
}
function pushDataLayer(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
function trackGoogleEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
}
function trackWhatsapp(location, product = null) {
  const params = {
    link_location: location || 'unknown',
    page_type: document.body.dataset.page || 'unknown'
  };
  if (product) {
    params.product_id = product.id;
    params.product_name = product.name;
    params.value = product.priceValue;
    params.currency = 'ARS';
  }
  pushDataLayer('whatsapp_click', params);
  trackGoogleEvent('generate_lead', { lead_source: 'whatsapp', ...params });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function productCardMarkup(product) {
  const url = `/productos/${encodeURIComponent(product.id)}.html`;
  return `<article class="product-card card" data-product-id="${escapeHtml(product.id)}" data-product-name="${escapeHtml(product.name)}">
    <a class="product-thumb" href="${url}" data-product-action="view" data-product-id="${escapeHtml(product.id)}" aria-label="Ver ${escapeHtml(product.name)}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async" width="1200" height="900"></a>
    <div class="product-meta"><div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.category)}</p></div><div class="product-price">${escapeHtml(product.price)}</div></div>
    <p>${escapeHtml(product.shortDescription)}</p>
    <div class="product-actions"><a class="link-button link-muted" href="${url}" data-product-action="view" data-product-id="${escapeHtml(product.id)}">Ver producto</a><a class="link-button link-accent" href="${escapeHtml(createWhatsappLink(formatInquiryMessage(product.name)))}" target="_blank" rel="noopener noreferrer" data-whatsapp data-track-location="catalog_card" data-product-id="${escapeHtml(product.id)}">Consultar</a></div>
  </article>`;
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = list.length ? list.map(productCardMarkup).join('') : '<div class="empty-state" role="status">No encontramos productos con esa búsqueda.</div>';
}

function bindSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  let searchTimer = null;
  let lastTracked = '';
  input.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    const filtered = products.filter((product) => [product.name, product.category, product.shortDescription].join(' ').toLowerCase().includes(query));
    renderProducts(filtered);
    window.clearTimeout(searchTimer);
    if (query.length >= 2 && query !== lastTracked) {
      searchTimer = window.setTimeout(() => {
        lastTracked = query;
        pushDataLayer('catalog_search', { search_length: query.length, results_count: filtered.length });
        trackGoogleEvent('catalog_search', { search_length: query.length, results_count: filtered.length });
      }, 700);
    }
  });
}

function setupWhatsappButtons() {
  const configs = {
    contactWhatsapp: ['Hola! Quiero coordinar una consulta por un retapizado.', 'contact_card'],
    footerWhatsapp: [SITE_CONFIG.genericWhatsappMessage, 'footer']
  };
  Object.entries(configs).forEach(([id, [message, location]]) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.href = createWhatsappLink(message);
    element.target = '_blank'; element.rel = 'noopener noreferrer';
    element.dataset.whatsapp = ''; element.dataset.trackLocation = location;
  });
  document.querySelectorAll('[data-whatsapp]').forEach((element) => {
    if (!element.href || element.getAttribute('href') === '#') element.href = createWhatsappLink();
    element.target = '_blank'; element.rel = 'noopener noreferrer';
  });
}

function setupTracking() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    if (link.matches('[data-whatsapp]') || /(?:wa\.me|wa\.link|api\.whatsapp\.com)/.test(link.href)) {
      const product = products.find((item) => item.id === link.dataset.productId) || null;
      trackWhatsapp(link.dataset.trackLocation || 'link', product);
      return;
    }
    if (/instagram\.com/.test(link.href)) {
      const params = { link_location: link.dataset.trackLocation || 'footer', page_type: document.body.dataset.page || 'unknown' };
      pushDataLayer('instagram_click', params);
      trackGoogleEvent('select_content', { content_type: 'social', item_id: 'instagram', ...params });
    }
    if (link.dataset.productAction === 'view') {
      const product = products.find((item) => item.id === link.dataset.productId);
      if (product) {
        const ecommerce = { item_list_name:'Catálogo', items:[{ item_id:product.id, item_name:product.name, item_category:product.category, price:product.priceValue, currency:'ARS' }] };
        pushDataLayer('product_select', ecommerce);
        trackGoogleEvent('select_item', ecommerce);
      }
    }
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!menuToggle || !nav) return;
  const closeMenu = (focusToggle = false) => {
    nav.classList.remove('open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Abrir menú');
    document.body.classList.remove('menu-open');
    if (focusToggle && document.visibilityState === 'visible') menuToggle.focus();
  };
  const openMenu = () => {
    nav.classList.add('open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded','true');
    menuToggle.setAttribute('aria-label','Cerrar menú');
    document.body.classList.add('menu-open');
  };
  menuToggle.addEventListener('click',(event) => {
    event.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click',() => closeMenu()));
  document.addEventListener('click',(event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown',(event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
  });
  window.addEventListener('resize',() => { if (window.innerWidth > 760) closeMenu(); });
  ['pageshow','pagehide','load','beforeunload','popstate'].forEach((name) => window.addEventListener(name,() => closeMenu()));
  closeMenu();
}

function updateProductMetadata(product) {
  const title = `${product.name} | Valturi Tapizados`;
  const description = `${product.shortDescription} Consultá disponibilidad y opciones por WhatsApp.`;
  const url = `${SITE_CONFIG.baseUrl}/productos/${encodeURIComponent(product.id)}.html`;
  const image = `${SITE_CONFIG.baseUrl}/${product.image}`;
  document.title = title;
  const setContent = (id, value) => { const el = document.getElementById(id); if (el) el.setAttribute('content', value); };
  setContent('metaDescription',description); setContent('ogTitle',title); setContent('ogDescription',description); setContent('ogUrl',url); setContent('ogType','product'); setContent('ogImage',image); setContent('twitterTitle',title); setContent('twitterDescription',description); setContent('twitterImage',image);
  const canonical = document.getElementById('canonicalUrl'); if (canonical) canonical.href = url;
  const structured = document.getElementById('productStructuredData');
  if (structured) structured.textContent = JSON.stringify({
    '@context':'https://schema.org', '@type':'Product', name:product.name, image:[image], description:product.description, sku:product.id,
    brand:{'@type':'Brand',name:'Valturi'},
    offers:{'@type':'Offer',url,priceCurrency:'ARS',price:product.priceValue,itemCondition:'https://schema.org/NewCondition'}
  });
}

function productDetailMarkup(product) {
  return `<div class="detail-layout">
    <div class="detail-media card"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" width="1200" height="900" decoding="async"></div>
    <div class="detail-copy"><span class="detail-tag">${escapeHtml(product.category)}</span><h1>${escapeHtml(product.name)}</h1><div class="detail-price">${escapeHtml(product.price)}</div><p>${escapeHtml(product.description)}</p>
      <ul class="detail-list">${product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul>
      <div class="contact-actions"><a class="button button-primary" href="${escapeHtml(createWhatsappLink(formatInquiryMessage(product.name)))}" target="_blank" rel="noopener noreferrer" data-whatsapp data-track-location="product_detail" data-product-id="${escapeHtml(product.id)}">Consultar por WhatsApp</a><a class="button button-secondary" href="/productos.html">Volver al catálogo</a></div>
    </div>
  </div>`;
}

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const id = document.body.dataset.productId || new URLSearchParams(window.location.search).get('id');
  const product = products.find((item) => item.id === id);
  if (!product) {
    container.innerHTML = '<div class="not-found"><h1>No encontramos ese producto.</h1><p>Explorá los modelos del catálogo o consultanos por tu proyecto.</p><a class="button button-primary" href="/productos.html">Ver productos</a></div>';
    return;
  }
  if (container.dataset.rendered !== product.id) {
    updateProductMetadata(product);
    container.innerHTML = productDetailMarkup(product);
  }
  const ecommerce = { currency:'ARS', value:product.priceValue, items:[{item_id:product.id,item_name:product.name,item_category:product.category,price:product.priceValue,currency:'ARS'}] };
  pushDataLayer('product_view',ecommerce); trackGoogleEvent('view_item',ecommerce);
}

// The static build also uses the renderers above, without a browser DOM.
if (typeof document !== 'undefined') {
  if (!document.getElementById('productGrid')?.hasChildNodes()) renderProducts(products);
  bindSearch();
  setupWhatsappButtons();
  setupTracking();
  setupMenu();
  renderProductDetail();
}
