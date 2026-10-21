import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const read = (file) => readFile(path.join(root, file), 'utf8');
const write = (file, text) => writeFile(path.join(out, file), text);
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

// Reuse the browser's data and renderers: changing a collection or product
// updates the crawlable HTML and the interactive view in the same deployment.
const context = vm.createContext({ URLSearchParams, window: { addEventListener() {} } });
vm.runInContext(await read('script.js'), context);
vm.runInContext(await read('materials.js'), context);
const data = vm.runInContext('({ SITE_CONFIG, products, MATERIAL_COLLECTIONS, FAMILY_META, productCardMarkup, productDetailMarkup, materialDetailMarkup })', context);
const base = data.SITE_CONFIG.baseUrl.replace(/\/$/, '');
const homeSource = await read('index.html');
const homeHeader = homeSource.match(/<header\b[\s\S]*?<\/header>/)[0];
const homeFooter = homeSource.match(/<footer\b[\s\S]*?<\/footer>/)[0];
const homeMenu = homeSource.match(/<dialog\b[^>]*id="mobile-menu"[\s\S]*?<\/dialog>/)[0];
const homePrivacy = homeSource.match(/<dialog\b[^>]*id="privacy-dialog"[\s\S]*?<\/dialog>/)[0];
const fallbackNav = homeSource.match(/<noscript><nav class="noscript-nav[\s\S]*?<\/noscript>/)[0];

function sharedChrome(html, { file, catalog = false }) {
  let header = homeHeader;
  let footer = homeFooter;
  let menu = homeMenu;
  let privacy = homePrivacy;
  if (file !== 'index.html') {
    header = header.replace(/href="#/g, 'href="/#');
    footer = footer.replace('href="#consulta"', 'href="/#consulta"');
    menu = menu.replace('href="#consulta"', 'href="/#consulta"');
  }
  if (catalog) {
    header = header.replace(/<a class="nav-contact"[\s\S]*?<\/a>/, '');
    menu = menu.replace(/<a class="menu-talk"[\s\S]*?<\/a>/, '').replace(/<p class="menu-location"[\s\S]*?<\/p>/, '');
    footer = footer.replace('class="site-footer"', 'class="site-footer catalog-footer"')
      .replace(/<div class="social-links">[\s\S]*?<\/div>/, '')
      .replace(/<div class="footer-map">[\s\S]*?<\/div>/, '')
      .replace('Desde Córdoba, con oficio.', 'El archivo de texturas')
      .replace('Bienvenidos <span class="serif-word">al taller.</span>', 'Materiales para <span class="serif-word">mirar de cerca.</span>');
    privacy = '<dialog id="privacy-dialog" class="privacy-dialog" aria-labelledby="privacy-title"><button type="button" class="dialog-close" aria-label="Cerrar información de privacidad" data-close-privacy>×</button><p class="eyebrow">Datos y privacidad</p><h2 id="privacy-title">Cómo mejoramos el catálogo</h2><p>Usamos Google Analytics y Microsoft Clarity para entender cómo se navega el sitio y mejorar la experiencia. El catálogo no tiene formularios ni solicita datos de contacto.</p><p>Las mediciones de materiales registran la colección o el color explorado, sin incluir datos personales.</p></dialog>';
  }
  const contentId = html.match(/<main\b[^>]*\bid=["']([^"']+)/)?.[1] || 'contenido';
  footer = footer.replace('href="#contenido"', `href="#${contentId}"`);
  const current = file.startsWith('materiales/') || file === 'material.html' ? '/materiales.html' : `/${file}`;
  const markCurrent = (markup) => markup.replaceAll(`href="${current}"`, `aria-current="page" href="${current}"`);
  header = markCurrent(header);
  menu = markCurrent(menu);
  html = html.replace(/<header\b[\s\S]*?<\/header>/, header).replace(/<footer\b[\s\S]*?<\/footer>/, footer)
    .replace(/<dialog\b[^>]*id="(?:mobile-menu|privacy-dialog)"[\s\S]*?<\/dialog>/g, '')
    .replace(/<noscript><nav class="noscript-nav[\s\S]*?<\/noscript>/g, '');
  html = html.replace('</body>', `${menu}\n${fallbackNav}\n${privacy}\n</body>`);
  html = html.replaceAll(`href="#${contentId}"`, `href="/${file === 'index.html' ? '' : file}#${contentId}"`);
  if (!html.includes('home.css?')) html = html.replace('</head>', '<link rel="stylesheet" href="/home.css?v=20261020-4">\n</head>');
  if (!html.includes('home-ui.js?')) html = html.replace('</head>', '<script src="/home-ui.js?v=20261020-4" defer></script>\n</head>');
  return html;
}

function homeSwatchesMarkup() {
  const selection = [
    ['sheep', 'crudo'], ['pana-velvet', 'azafran'], ['lino-dot', 'blue'],
    ['cuero-vacuno-mantra', 'chocolate'], ['lino-boucle-largo', 'beige'],
    ['pana-panne', 'dulce-de-leche'], ['cuerina-marbella', 'arena'],
    ['pana-thor', 'alga'], ['lino-mecha', 'arena'], ['cuero-vacuno-riviera', 'angora'],
    ['pana-hulk', 'dijon'], ['cuerina-legards', 'grey'], ['lino-scandal', 'coral'],
    ['pana-velutti', 'almond'], ['cuero-vacuno-novapelli', 'moss'],
    ['lino-spazio', 'africano'], ['cuerina-nebraska', 'chocolate'],
    ['cuero-vacuno-stragrain', 'biscuit'], ['cuerina-dakota', 'color-2']
  ];
  const order = new Map(selection.map(([id, color], i) => [id, { color, order: i }]));
  return [...data.MATERIAL_COLLECTIONS]
    .sort((a, b) => (order.get(a.id)?.order ?? 999) - (order.get(b.id)?.order ?? 999))
    .map((item, index) => {
      const preferred = order.get(item.id)?.color;
      const color = item.colors.find((color) => color.main.endsWith(`/${preferred}-main.webp`)) || item.colors[0];
      const count = new Set(item.colors.map((color) => color.main)).size;
      const family = data.FAMILY_META[item.family].label;
      return `<a class="swatch-card${index === 0 ? ' is-current' : ''}" href="/materiales/${encodeURIComponent(item.id)}.html" data-material="${escape(item.id)}" data-family="${escape(item.family)}"><div class="sample-fabric"><img src="${escape(color.main)}" alt="${escape(item.title)}: trama en color ${escape(color.name)}" width="300" height="380" loading="lazy" decoding="async" fetchpriority="low"><span class="sample-tag" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span class="sample-family">${escape(family)}</span></div><span class="sample-label"><span class="swatch-name">${escape(item.title)}</span><span class="swatch-note">${escape(color.name)} · ${count} colores <span aria-hidden="true">↗</span></span></span></a>`;
    }).join('\n          ');
}

const business = {
  '@type': 'LocalBusiness', '@id': `${base}/#business`, name: 'Valturi Tapizados',
  url: `${base}/`, telephone: `+${data.SITE_CONFIG.whatsappNumber}`,
  description: 'Tapicería, retapizado y restauración artesanal de muebles en Córdoba. Asesoramiento en telas, colores y terminaciones.',
  image: [`${base}/assets/home-work-05.jpg`, `${base}/assets/home-work-03.jpg`],
  address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressRegion: 'Córdoba', addressCountry: 'AR' },
  geo: { '@type': 'GeoCoordinates', latitude: -31.3234650917683, longitude: -64.28811492274205 },
  areaServed: { '@type': 'City', name: 'Córdoba' },
  sameAs: ['https://instagram.com/valturi.tapizados'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', availableLanguage: 'Spanish', url: `https://wa.me/${data.SITE_CONFIG.whatsappNumber}` }
};
const website = { '@type': 'WebSite', '@id': `${base}/#website`, url: `${base}/`, name: 'Valturi Tapizados', inLanguage: 'es-AR', publisher: { '@id': business['@id'] } };

function pageMetadata(html, { file, title, description, type = 'WebPage', image = 'assets/home-work-05.jpg', index = true, extra = [], parent = null }) {
  const url = `${base}/${file === 'index.html' ? '' : file}`;
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<meta\b[^>]*>/gi, (tag) => /\b(?:name|property)=["'](?:description|robots|theme-color|og:[^"']+|twitter:[^"']+)["']/i.test(tag) ? '' : tag)
    .replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi, '');
  const graph = [business, website, {
    '@type': type, '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'es-AR',
    isPartOf: { '@id': website['@id'] }, about: { '@id': business['@id'] },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${base}/${image}` }
  }];
  if (file !== 'index.html') {
    const crumbs = [{ name: 'Inicio', item: `${base}/` }];
    if (parent) crumbs.push({ name: parent.name, item: `${base}/${parent.file}` });
    crumbs.push({ name: title.split(' | ')[0], item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map((item, i) => ({ '@type': 'ListItem', position: i + 1, ...item })) });
    graph[2].breadcrumb = { '@id': `${url}#breadcrumb` };
  }
  graph.push(...extra);
  const metadata = `
<title>${escape(title)}</title>
<meta id="metaDescription" name="description" content="${escape(description)}"/>
<meta name="robots" content="${index ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' : 'noindex,follow'}"/>
<meta name="theme-color" content="#f7f3ee"/>
<link id="canonicalUrl" rel="canonical" href="${escape(url)}"/>
<meta property="og:locale" content="es_AR"/>
<meta property="og:site_name" content="Valturi Tapizados"/>
<meta id="ogTitle" property="og:title" content="${escape(title)}"/>
<meta id="ogDescription" property="og:description" content="${escape(description)}"/>
<meta id="ogUrl" property="og:url" content="${escape(url)}"/>
<meta id="ogType" property="og:type" content="website"/>
<meta id="ogImage" property="og:image" content="${base}/${image}"/>
<meta property="og:image:alt" content="${escape(title.split(' | ')[0])}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta id="twitterTitle" name="twitter:title" content="${escape(title)}"/>
<meta id="twitterDescription" name="twitter:description" content="${escape(description)}"/>
<meta id="twitterImage" name="twitter:image" content="${base}/${image}"/>
${index ? `<script id="pageStructuredData" type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>` : ''}
`;
  html = html.replace('</head>', `${metadata}</head>`);
  // Initialize the existing event queue before the body scripts run. The
  // third-party analytics downloads already load asynchronously in analytics.js.
  if (!/src=["'](?:\/)?analytics\.js["']/.test(html)) html = html.replace('</head>', '<script src="/analytics.js"></script>\n</head>');
  return html;
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
// Sólo se publica esta lista. Una copia de la API, un archivo de configuración
// o un respaldo agregado a la raíz nunca debe terminar en el sitio público.
const publicFiles = [
  '404.html', 'index.html', 'servicios.html', 'nosotros.html', 'trabajos.html',
  'materiales.html', 'material.html', 'productos.html', 'producto.html', 'contacto.html',
  'styles.css', 'materials.css', 'home.css', 'script.js', 'materials.js',
  'analytics.js', 'home-form.js', 'home-ui.js', 'robots.txt'
];
for (const file of publicFiles) await cp(path.join(root, file), path.join(out, file));
await cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
await mkdir(path.join(out, 'materiales'), { recursive: true });
await mkdir(path.join(out, 'productos'), { recursive: true });

const pages = [
  { file: 'index.html', title: 'Tapicería y retapizado en Córdoba | Valturi Tapizados', description: 'Retapizado y restauración artesanal de sillas, sillones y muebles en Córdoba. Telas seleccionadas, diseño cálido y atención a medida. Consultanos.' },
  { file: 'servicios.html', index: false, title: 'Retapizado y restauración de muebles en Córdoba | Valturi', description: 'Renová sillas, sillones, banquetas y respaldos con Valturi. Retapizado, restauración y asesoramiento en telas y terminaciones en Córdoba.' },
  { file: 'nosotros.html', type: 'AboutPage', title: 'Oficio artesanal y diseño en Córdoba | Valturi Tapizados', description: 'Conocé Valturi: tapicería y restauración en Córdoba con una mirada cálida y contemporánea. Atención personalizada para renovar cada pieza.' },
  { file: 'trabajos.html', type: 'CollectionPage', title: 'Trabajos de retapizado y restauración en Córdoba | Valturi', description: 'Explorá trabajos de tapicería y restauración de Valturi en Córdoba: sillas, sillones y detalles de terminación para inspirar tu próximo proyecto.' },
  { file: 'materiales.html', type: 'CollectionPage', title: 'Telas y materiales para tapicería en Córdoba | Valturi', description: 'Explorá panas, linos, cuerinas, cuero vacuno y texturas para tapicería. Recorré las colecciones, mirá sus colores y explorá cada textura de cerca.' },
  { file: 'productos.html', index: false, type: 'CollectionPage', title: 'Sillas, sillones y piezas tapizadas en Córdoba | Valturi', description: 'Conocé el catálogo de Valturi: sillas, sillones, cabeceras y almohadones. Consultá disponibilidad, medidas y opciones de tapizado por WhatsApp.' },
  { file: 'contacto.html', index: false, type: 'ContactPage', title: 'Contacto y presupuesto de retapizado en Córdoba | Valturi', description: 'Consultá por tu retapizado en Córdoba. Taller en Villa Rivera Indarte, con visitas a coordinar previamente por WhatsApp. Contanos sobre tu proyecto.' }
];
const urls = [];
for (const page of pages) {
  let html = await read(page.file);
  if (page.file === 'index.html') {
    html = html.replace(/(<div\b[^>]*\bid="swatch-track"[^>]*>)[\s\S]*?(<\/div>\s*<div\b[^>]*\bclass="sample-progress"[^>]*>)/, `$1\n          ${homeSwatchesMarkup()}\n        $2`);
    html = html.replace(/(<span\b[^>]*\bid="sample-count"[^>]*>)[^<]*/, `$1${data.MATERIAL_COLLECTIONS.length} colecciones`);
  }
  if (page.file === 'productos.html') html = html.replace(/(<div\b[^>]*\bid="productGrid"[^>]*>)[\s\S]*?<\/div>/, `$1${data.products.map(data.productCardMarkup).join('')}</div>`);
  if (page.file === 'materiales.html') {
    // Minimal sinks for the existing string renderers; no DOM or new runtime dependency.
    const sinks = Object.fromEntries(['materialPortals', 'materialsFamilyNav', 'materialsLibrary'].map((id) => [id, { innerHTML: '', querySelectorAll: () => [] }]));
    context.document = { getElementById: (id) => sinks[id] || null };
    vm.runInContext('renderApplicationPortals(); renderFamilyNavigation(); renderMaterialsLibrary();', context);
    delete context.document;
    for (const [id, sink] of Object.entries(sinks)) html = html.replace(new RegExp(`(<div\\b[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?<\\/div>`), `$1${sink.innerHTML}</div>`);
    page.extra = [{ '@type': 'ItemList', name: 'Colecciones de tapicería de Valturi', itemListElement: data.MATERIAL_COLLECTIONS.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.title, url: `${base}/materiales/${item.id}.html` })) }];
  }
  if (page.file === 'servicios.html') {
    page.extra = ['Retapizado', 'Restauración', 'Asesoramiento', 'Proyectos especiales'].map((name) => ({ '@type': 'Service', name, provider: { '@id': business['@id'] }, areaServed: { '@type': 'City', name: 'Córdoba' }, url: `${base}/servicios.html` }));
  }
  html = sharedChrome(html, { file: page.file, catalog: page.file === 'materiales.html' });
  await write(page.file, pageMetadata(html, page));
  if (page.index !== false) urls.push(`${base}/${page.file === 'index.html' ? '' : page.file}`);
}

for (const item of data.MATERIAL_COLLECTIONS) {
  const file = `materiales/${item.id}.html`;
  let html = await read('material.html');
  html = html.replace('data-page="material-detail"', `data-page="material-detail" data-material-id="${escape(item.id)}"`)
    .replace(/<main\b[^>]*\bid="materialDetail"[^>]*>[\s\S]*?<\/main>/, `<main id="materialDetail" data-rendered="${escape(item.id)}">${data.materialDetailMarkup(item)}</main>`);
  html = sharedChrome(html, { file, catalog: true });
  await write(file, pageMetadata(html, {
    file, title: `${item.title}: colores y textura | Valturi Córdoba`,
    description: `${item.description} Explorá sus ${new Set(item.colors.map((color) => color.main)).size} referencias de color y mirá su textura en detalle.`,
    image: item.colors[0].main, parent: { name: 'Materiales', file: 'materiales.html' },
    extra: [{ '@type': 'ItemList', name: `Colores de ${item.title}`, itemListElement: item.colors.map((color, i) => ({ '@type': 'ListItem', position: i + 1, name: color.name, item: { '@type': 'ImageObject', name: `${item.title} · ${color.name}`, contentUrl: `${base}/${color.main}` } })) }]
  }));
  urls.push(`${base}/${file}`);
}
for (const item of data.products) {
  const file = `productos/${item.id}.html`;
  let html = await read('producto.html');
  html = html.replace(/data-page="[^"]+"/, `data-page="producto" data-product-id="${escape(item.id)}"`)
    .replace(/(<div\b[^>]*\bid="productDetail"[^>]*>)[\s\S]*?<\/div>/, `$1${data.productDetailMarkup(item)}</div>`)
    .replace('id="productDetail"', `id="productDetail" data-rendered="${escape(item.id)}"`);
  html = sharedChrome(html, { file });
  await write(file, pageMetadata(html, {
    file, index: false, title: `${item.name} | Valturi Tapizados Córdoba`, description: `${item.shortDescription} Consultá disponibilidad y opciones por WhatsApp.`,
    image: item.image, parent: { name: 'Productos', file: 'productos.html' },
    extra: [{ '@type': 'Product', name: item.name, image: [`${base}/${item.image}`], description: item.description, sku: item.id, brand: { '@type': 'Brand', name: 'Valturi' }, offers: { '@type': 'Offer', url: `${base}/${file}`, priceCurrency: 'ARS', price: item.priceValue } }]
  }));
}

// Unknown/missing IDs never masquerade as the first product or collection.
for (const [file, title] of [['material.html', 'Material no encontrado | Valturi'], ['producto.html', 'Producto no encontrado | Valturi'], ['404.html', 'Página no encontrada | Valturi']]) {
  await write(file, pageMetadata(sharedChrome(await read(file), { file, catalog: file === 'material.html' }), { file, title, description: 'Explorá los materiales, productos y servicios de Valturi Tapizados.', index: false }));
}
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escape(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${urls.length} indexable pages with static content, metadata and sitemap.`);
