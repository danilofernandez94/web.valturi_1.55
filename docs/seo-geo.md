# Valturi — revisión SEO y GEO

Revisión e implementación: 8 de septiembre de 2026, sobre `web.valturi_1.55`.

## Cambios aplicados

| Hallazgo | Corrección |
| --- | --- |
| El carrusel cambiaba abruptamente de capas al 48% del recorrido. Los cambios de altura de la ventana móvil también podían reiniciarlo. | Entrega gradual entre imágenes, interpolación más uniforme, medidas de layout reutilizadas y reinicio únicamente al cambiar el ancho. Se conserva el abanico, el arrastre, los controles, la pausa y el movimiento reducido. |
| Materiales y productos requerían JavaScript para exponer las fichas y sus enlaces. | Generación estática de la biblioteca y el catálogo, 19 fichas de materiales y 6 de productos, utilizando los mismos datos y renderizadores de la interfaz. |
| Faltaban metadatos en Materiales; las fichas compartían un documento genérico. | Títulos, descripciones, canonical, Open Graph y datos estructurados propios en cada dirección. |
| El sitemap omitía Materiales y usaba fechas fijas antiguas. | Sitemap generado con las 32 páginas indexables reales. Se omiten fechas que no se pueden mantener con precisión. |
| Los IDs desconocidos mostraban el primer producto o material. | Se muestra un estado de contenido no encontrado. Las plantillas genéricas se excluyen del índice; los enlaces antiguos válidos redirigen a su ficha estática. |
| Había textos sobre cómo desarrollar la web dentro de las páginas públicas. | Textos orientados al cliente, descripción local en Córdoba y respuestas prácticas en Servicios. |
| La ficha de producto afirmaba disponibilidad inmediata sin respaldo visible. | Se conserva la información publicada de los productos y se elimina la afirmación `InStock`. |
| 33 recursos antiguos carecían de referencias. | Se retiraron 9 ilustraciones de muestra y 24 variantes de tamaño antiguas de Pana Hulk: 4.397.064 bytes del árbol de archivos actual. El historial de Git conserva las versiones previas. |

Se conservan las fotografías de trabajos, las fuentes Gilroy, las imágenes principales y de detalle de los textiles y los recursos que todavía utiliza el catálogo. Se mantienen dos fotografías adicionales de Pana Panne sin referencias: son tomas diferentes y no se identificaron como duplicados prescindibles.

## Enfoque para buscadores y asistentes con IA

La prioridad es que los servicios, la ubicación, los materiales y los enlaces estén disponibles en HTML, con identidad coherente y datos estructurados que coincidan con el contenido visible. `robots.txt` permite el rastreo, incluido OAI-SearchBot. No se cambian las preferencias actuales respecto a otros robots.

No se añadieron archivos o etiquetas que prometan posiciones en respuestas de IA. Google indica que las prácticas SEO habituales también se aplican a AI Overviews y AI Mode y que no se requiere un archivo especial para IA. La indexación y la aparición en respuestas no están garantizadas.

## Comprobaciones realizadas

- Generación de las 32 páginas indexables desde las fuentes.
- Una dirección canonical y un título único por página, H1 disponible sin JavaScript, JSON-LD válido y coherencia con el sitemap.
- Existencia de las referencias locales en el HTML generado.
- Regresiones del carrusel: mitad del arrastre, ambos sentidos, vueltas completas, cancelación, scroll vertical, cambios de altura/ancho y preferencia de movimiento reducido.

Las pruebas del carrusel comprueban su lógica y estados. No equivalen a una inspección visual en un iPhone o un teléfono Android físico.

## Próximos pasos fuera del código

1. Verificar el sitio en Google Search Console y Bing Webmaster Tools, enviar el sitemap y revisar la indexación. No se accedió a esas cuentas en esta revisión.
2. Confirmar un dominio definitivo antes de difundirlo como dirección principal. La base se mantiene en el dominio Vercel que ya utiliza el proyecto.
3. Revisar Google Business Profile: nombre, categoría, ubicación, teléfono, horarios y enlace web coherentes. No se inventaron horarios ni dirección postal completa.
4. Confirmar precios y datos del catálogo y reemplazar las ilustraciones de producto y taller por fotografías reales cuando estén disponibles. Se conservaron los datos existentes.
5. Publicar casos reales con tipo de mueble, trabajo realizado, tela y fotografías antes/después correspondientes a la misma pieza. No se inventaron reseñas, antigüedad, certificaciones ni proyectos.
6. Medir consultas desde búsquedas, clics a WhatsApp y rendimiento real en móviles. No se dispone todavía de datos de Search Console ni de Core Web Vitals de campo para atribuir mejoras de posiciones o conversiones.

## Mantenimiento

Las páginas HTML de la raíz son las fuentes de contenido. `materials.js` contiene las colecciones y sus colores; `script.js` contiene el catálogo y los renderizadores. `scripts/build-site.mjs` genera `dist/` en cada publicación de Vercel. No se editan los archivos generados.

Validación local:

```sh
node scripts/build-site.mjs
node scripts/check-site.mjs
node --test tests/carousel.test.mjs
```

Las direcciones antiguas `material.html?id=…` y `producto.html?id=…` redirigen a las fichas correspondientes mediante `vercel.json`. Al sumar o quitar IDs, actualizar también sus patrones de redirección si se necesita compatibilidad con enlaces de ese formato.

## Fuentes de referencia

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).
- [Google: JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- [OpenAI: descripción de OAI-SearchBot y otros robots](https://developers.openai.com/api/docs/bots).
- [Vercel: configuración del proyecto](https://vercel.com/docs/project-configuration/vercel-json).
