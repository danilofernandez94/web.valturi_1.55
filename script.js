const SITE_CONFIG = {
  whatsappNumber: '543515930925',
  genericWhatsappMessage: 'Hola! Quiero hacer una consulta 😃',
  baseUrl: 'https://web-valturi-1-55.vercel.app'
};

const products = [
  { id:'silla-nordica-lino', name:'Silla Nórdica Lino', price:'$ 185.000', priceValue:185000, category:'Sillas', shortDescription:'Silla tapizada para comedor o escritorio con terminación en lino.', description:'Ideal para sumar calidez y textura a livings, comedores o espacios de trabajo. El objetivo de este catálogo es mostrar el producto y derivar la consulta a WhatsApp.', features:['Tapizado premium','Terminación prolija','Consulta personalizada por color'], image:'assets/product-01.svg' },
  { id:'banqueta-canelon', name:'Banqueta Canelón', price:'$ 142.000', priceValue:142000, category:'Banquetas', shortDescription:'Banqueta compacta con detalle canelón y estructura firme.', description:'Pensada para barras, desayunadores o sectores de apoyo. Podés adaptar tela, tono y terminación según disponibilidad.', features:['Opciones de tela','Medidas consultables','Salida directa a WhatsApp'], image:'assets/product-02.svg' },
  { id:'cabecera-curva', name:'Cabecera Curva', price:'$ 260.000', priceValue:260000, category:'Dormitorio', shortDescription:'Cabecera tapizada con líneas suaves y estética contemporánea.', description:'Una pieza pensada para vestir el dormitorio con una solución elegante y funcional. En la versión final podés sumar más variantes.', features:['Diseño a medida','Asesoramiento en telas','Presupuesto por WhatsApp'], image:'assets/product-03.svg' },
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
function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof text === 'string') el.textContent = text;
  return el;
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.replaceChildren();
  if (!list.length) {
    const empty = makeElement('div','empty-state','No encontramos productos con esa búsqueda.');
    empty.setAttribute('role','status');
    grid.appendChild(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  list.forEach((product) => {
    const article = makeElement('article','product-card card');
    article.dataset.productId = product.id;
    article.dataset.productName = product.name;

    const thumb = makeElement('a','product-thumb');
    thumb.href = `producto.html?id=${encodeURIComponent(product.id)}`;
    thumb.dataset.productAction = 'view';
    thumb.dataset.productId = product.id;
    thumb.setAttribute('aria-label', `Ver ${product.name}`);
    const img = document.createElement('img');
    img.src = product.image; img.alt = product.name; img.loading = 'lazy'; img.decoding = 'async'; img.width = 1200; img.height = 900;
    thumb.appendChild(img);

    const meta = makeElement('div','product-meta');
    const metaText = document.createElement('div');
    metaText.append(makeElement('h3','',product.name), makeElement('p','',product.category));
    meta.append(metaText, makeElement('div','product-price',product.price));

    const description = makeElement('p','',product.shortDescription);
    const actions = makeElement('div','product-actions');
    const view = makeElement('a','link-button link-muted','Ver producto');
    view.href = `producto.html?id=${encodeURIComponent(product.id)}`;
    view.dataset.productAction = 'view'; view.dataset.productId = product.id;
    const consult = makeElement('a','link-button link-accent','Consultar');
    consult.href = createWhatsappLink(formatInquiryMessage(product.name));
    consult.target = '_blank'; consult.rel = 'noopener noreferrer';
    consult.dataset.whatsapp = ''; consult.dataset.trackLocation = 'catalog_card'; consult.dataset.productId = product.id;
    actions.append(view, consult);
    article.append(thumb, meta, description, actions);
    fragment.appendChild(article);
  });
  grid.appendChild(fragment);
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
        pushDataLayer('catalog_search', { search_term: query, results_count: filtered.length });
        trackGoogleEvent('search', { search_term: query, results_count: filtered.length });
      }, 700);
    }
  });
}

function setupWhatsappButtons() {
  const configs = {
    contactWhatsapp: ['Hola! Quiero coordinar una consulta por un retapizado.', 'contact_card'],
    footerWhatsapp: [SITE_CONFIG.genericWhatsappMessage, 'footer'],
    homeBannerWhatsapp: ['Hola! Quiero cotizar un retapizado.', 'home_cta']
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
  let returnFocus = false;
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
  const url = `${SITE_CONFIG.baseUrl}/producto.html?id=${encodeURIComponent(product.id)}`;
  const image = `${SITE_CONFIG.baseUrl}/${product.image}`;
  document.title = title;
  const setContent = (id, value) => { const el = document.getElementById(id); if (el) el.setAttribute('content', value); };
  setContent('metaDescription',description); setContent('ogTitle',title); setContent('ogDescription',description); setContent('ogUrl',url); setContent('ogType','product'); setContent('ogImage',image); setContent('twitterTitle',title); setContent('twitterDescription',description); setContent('twitterImage',image);
  const canonical = document.getElementById('canonicalUrl'); if (canonical) canonical.href = url;
  const structured = document.getElementById('productStructuredData');
  if (structured) structured.textContent = JSON.stringify({
    '@context':'https://schema.org', '@type':'Product', name:product.name, image:[image], description:product.description, sku:product.id,
    brand:{'@type':'Brand',name:'Valturi'},
    offers:{'@type':'Offer',url,priceCurrency:'ARS',price:product.priceValue,itemCondition:'https://schema.org/NewCondition',availability:'https://schema.org/InStock'}
  });
}

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const product = products.find((item) => item.id === params.get('id')) || products[0];
  updateProductMetadata(product);
  container.replaceChildren();

  const layout = makeElement('div','detail-layout');
  const media = makeElement('div','detail-media card');
  const img = document.createElement('img'); img.src=product.image; img.alt=product.name; img.width=1200; img.height=900; img.decoding='async';
  media.appendChild(img);
  const copy = makeElement('div','detail-copy');
  copy.append(makeElement('span','detail-tag',product.category), makeElement('h1','',product.name), makeElement('div','detail-price',product.price), makeElement('p','',product.description));
  const list = makeElement('ul','detail-list');
  product.features.forEach((feature) => list.appendChild(makeElement('li','',feature)));
  const actions = makeElement('div','contact-actions');
  const consult = makeElement('a','button button-primary','Consultar por WhatsApp');
  consult.href=createWhatsappLink(formatInquiryMessage(product.name)); consult.target='_blank'; consult.rel='noopener noreferrer'; consult.dataset.whatsapp=''; consult.dataset.trackLocation='product_detail'; consult.dataset.productId=product.id;
  const back = makeElement('a','button button-secondary','Volver al catálogo'); back.href='productos.html';
  actions.append(consult,back); copy.append(list,actions); layout.append(media,copy); container.appendChild(layout);
  const ecommerce = { currency:'ARS', value:product.priceValue, items:[{item_id:product.id,item_name:product.name,item_category:product.category,price:product.priceValue,currency:'ARS'}] };
  pushDataLayer('product_view',ecommerce); trackGoogleEvent('view_item',ecommerce);
}

function setupBeforeAfter() {
  const root = document.querySelector('[data-before-after]');
  const range = document.getElementById('beforeAfterRange');
  if (!root || !range) return;
  let tracked = false;
  const update = () => {
    const value = Number(range.value);
    root.style.setProperty('--compare-position', `${value}%`);
    range.setAttribute('aria-valuetext', `${value}% de la imagen anterior visible`);
    if (!tracked) {
      tracked = true;
      pushDataLayer('before_after_interaction', { page_type:'home' });
      trackGoogleEvent('select_content', { content_type:'before_after', item_id:'home_transformation' });
    }
  };
  range.addEventListener('input',update);
  root.style.setProperty('--compare-position', `${range.value}%`);
}

function setupHomeCarousel() {
  const carousel = document.querySelector('.hero-fan-carousel');
  if (!carousel) return;
  const cards = Array.from(carousel.querySelectorAll('[data-home-card]'));
  const total = cards.length;
  if (total < 2) return;
  const prevButton=document.getElementById('carouselPrev');
  const nextButton=document.getElementById('carouselNext');
  const pauseButton=document.getElementById('carouselPause');
  const pauseIcon=pauseButton?.querySelector('[data-pause-icon]');
  const pauseLabel=pauseButton?.querySelector('.carousel-control-label');
  const status=document.getElementById('carouselStatus');
  const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobileBreakpoint=760;
  const desktopSlots=[{x:.50,y:.02,rotate:0,scale:1.12,z:6,opacity:1},{x:.73,y:.16,rotate:6,scale:.99,z:4,opacity:.94},{x:.88,y:.39,rotate:11,scale:.86,z:2,opacity:.78},{x:1.06,y:.56,rotate:14,scale:.72,z:1,opacity:0},{x:.12,y:.39,rotate:-11,scale:.86,z:2,opacity:.78},{x:.27,y:.16,rotate:-6,scale:.99,z:4,opacity:.94}];
  const mobileSlots=[{x:.50,y:.02,rotate:0,scale:1,z:6,opacity:1},{x:.80,y:.10,rotate:8,scale:.88,z:4,opacity:.78},{x:1.12,y:.22,rotate:12,scale:.74,z:2,opacity:0},{x:1.28,y:.28,rotate:16,scale:.66,z:1,opacity:0},{x:-.12,y:.22,rotate:-12,scale:.74,z:2,opacity:0},{x:.20,y:.10,rotate:-8,scale:.88,z:4,opacity:.78}];
  let activeIndex=0, autoTimer=null, resizeTimer=null, isDragging=false, dragProgress=0, dragDirection=1, startX=0, startY=0, dragLocked=false, userPaused=prefersReducedMotion, hoverPaused=false;
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  const lerp=(from,to,progress)=>from+(to-from)*progress;
  const slotDistance=(cardIndex,index)=>(cardIndex-index+total)%total;
  const getSlots=()=>window.innerWidth<=mobileBreakpoint?mobileSlots:desktopSlots;
  const getSlotFor=(cardIndex,index,slots)=>slots[slotDistance(cardIndex,index)]||slots[slots.length-1];
  function applySlot(card,slot,dims){
    const x=dims.width*slot.x-card.offsetWidth/2;
    const y=dims.height*slot.y;
    card.style.setProperty('--fan-x',`${x}px`); card.style.setProperty('--fan-y',`${y}px`); card.style.setProperty('--fan-rotate',`${slot.rotate}deg`); card.style.setProperty('--fan-scale',slot.scale); card.style.setProperty('--fan-opacity',slot.opacity); card.style.zIndex=String(slot.z); card.classList.toggle('is-hidden',slot.opacity===0);
  }
  function updateA11y(){
    cards.forEach((card,index)=>card.setAttribute('aria-hidden',index===activeIndex?'false':'true'));
    if(status) status.textContent=`Imagen ${activeIndex+1} de ${total}`;
  }
  function render(progress=0,direction=1){
    const slots=getSlots(); const dims={width:carousel.clientWidth,height:carousel.clientHeight||carousel.offsetHeight};
    cards.forEach((card,cardIndex)=>{
      const current=getSlotFor(cardIndex,activeIndex,slots); let final=current;
      if(progress>0){ const next=(activeIndex+direction+total)%total; const target=getSlotFor(cardIndex,next,slots); final={x:lerp(current.x,target.x,progress),y:lerp(current.y,target.y,progress),rotate:lerp(current.rotate,target.rotate,progress),scale:lerp(current.scale,target.scale,progress),z:progress<.5?current.z:target.z,opacity:lerp(current.opacity,target.opacity,progress)}; }
      applySlot(card,final,dims);
    });
    if(progress===0) updateA11y();
  }
  function stopAuto(){ if(autoTimer){clearInterval(autoTimer); autoTimer=null;} }
  function startAuto(){ stopAuto(); if(userPaused||hoverPaused||document.hidden||prefersReducedMotion)return; autoTimer=setInterval(()=>go(1,false),3000); }
  function updatePauseControl(){
    if(!pauseButton)return;
    pauseButton.setAttribute('aria-pressed',String(userPaused));
    pauseButton.setAttribute('aria-label',userPaused?'Reanudar carrusel':'Pausar carrusel');
    if(pauseIcon)pauseIcon.textContent=userPaused?'▶':'Ⅱ';
    if(pauseLabel)pauseLabel.textContent=userPaused?'Reanudar':'Pausar';
  }
  function go(direction,manual=true){ activeIndex=(activeIndex+direction+total)%total; render(); if(manual){pushDataLayer('carousel_navigation',{direction:direction>0?'next':'previous',image_index:activeIndex+1});} startAuto(); }
  function setDraggingState(value){isDragging=value;carousel.classList.toggle('is-dragging',value);}
  function resetDrag(){dragProgress=0;dragDirection=1;dragLocked=false;}
  function finalizeDrag(advance){const direction=dragDirection;setDraggingState(false);if(advance)activeIndex=(activeIndex+direction+total)%total;resetDrag();requestAnimationFrame(()=>{render();startAuto();});}
  function handleTouchStart(event){if(window.innerWidth>mobileBreakpoint||!event.touches.length)return;const touch=event.touches[0];startX=touch.clientX;startY=touch.clientY;resetDrag();stopAuto();setDraggingState(true);}
  function handleTouchMove(event){if(!isDragging||window.innerWidth>mobileBreakpoint||!event.touches.length)return;const touch=event.touches[0];const dx=touch.clientX-startX,dy=touch.clientY-startY;if(!dragLocked){if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){setDraggingState(false);resetDrag();startAuto();return;}if(Math.abs(dx)>8)dragLocked=true;}if(!dragLocked)return;event.preventDefault();dragDirection=dx<0?1:-1;dragProgress=clamp(Math.abs(dx)/(carousel.clientWidth*.68),0,1);render(dragProgress,dragDirection);}
  function handleTouchEnd(){if(isDragging)finalizeDrag(dragProgress>.18);}
  function syncLayout(){setDraggingState(false);resetDrag();render();startAuto();}
  prevButton?.addEventListener('click',()=>go(-1)); nextButton?.addEventListener('click',()=>go(1));
  pauseButton?.addEventListener('click',()=>{userPaused=!userPaused;updatePauseControl();userPaused?stopAuto():startAuto();pushDataLayer('carousel_pause_toggle',{paused:userPaused});});
  carousel.addEventListener('keydown',(event)=>{if(event.key==='ArrowLeft'){event.preventDefault();go(-1);}if(event.key==='ArrowRight'){event.preventDefault();go(1);}});
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(syncLayout,120);});
  carousel.addEventListener('mouseenter',()=>{if(window.innerWidth>mobileBreakpoint){hoverPaused=true;stopAuto();}});
  carousel.addEventListener('mouseleave',()=>{if(window.innerWidth>mobileBreakpoint){hoverPaused=false;startAuto();}});
  carousel.addEventListener('focusin',()=>{hoverPaused=true;stopAuto();});
  carousel.addEventListener('focusout',()=>{hoverPaused=false;startAuto();});
  carousel.addEventListener('touchstart',handleTouchStart,{passive:true});carousel.addEventListener('touchmove',handleTouchMove,{passive:false});carousel.addEventListener('touchend',handleTouchEnd,{passive:true});carousel.addEventListener('touchcancel',handleTouchEnd,{passive:true});
  document.addEventListener('visibilitychange',()=>document.hidden?stopAuto():startAuto());
  updatePauseControl(); syncLayout();
}

renderProducts(products);
bindSearch();
setupWhatsappButtons();
setupTracking();
setupMenu();
setupHomeCarousel();
setupBeforeAfter();
renderProductDetail();
