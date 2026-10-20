# SEO y GEO · Mantenimiento

Actualizado el 20 de octubre de 2026. La revisión de seguridad y la estructura
actual del proyecto están en [README.md](../README.md).

## Qué genera la web

- 7 páginas principales, 19 fichas de materiales y 6 fichas de productos: 32
  direcciones indexables con contenido y enlaces disponibles sin JavaScript.
- Un título, descripción, canonical y grafo JSON-LD propios por página, además
  de Open Graph y tarjetas para compartir.
- Sitemap generado a partir de esas direcciones, sin fechas artificiales.
  `robots.txt` permite el rastreo.
- Las plantillas sin ID válido y la página 404 llevan `noindex`. Un ID
  desconocido muestra un estado de contenido no encontrado.
- `index.html` es el único inicio. `/home2.html` e `/index.html` redirigen a `/`.

La prioridad para buscadores y asistentes con IA es publicar servicios, ubicación,
materiales y trabajos reales en HTML, con datos estructurados coherentes con lo
que ve el visitante. No hay archivos especiales que garanticen menciones en IA,
indexación, posiciones o conversiones.

## Cómo actualizar el contenido

Las páginas HTML de la raíz son las fuentes. `materials.js` contiene las
colecciones y los colores; `script.js`, los productos y sus renderizadores.
`scripts/build-site.mjs` genera `dist/` en cada publicación. No editar la salida.

Al agregar o retirar un material o producto:

1. Actualizar sus datos y las referencias a imágenes. Mantener tanto las vistas
   principales como los detalles que usa el muestrario.
2. Revisar los patrones de compatibilidad en `vercel.json` si se necesitan enlaces
   antiguos `material.html?id=…` o `producto.html?id=…`.
3. Ajustar la cantidad esperada de páginas en `scripts/check-site.mjs` si cambia
   el catálogo. Ejecutar las pruebas y la generación:

```sh
node --test tests/*.test.cjs
node scripts/build-site.mjs
node scripts/check-site.mjs
```

La comprobación verifica títulos únicos, canonical, H1, JSON-LD, sitemap,
referencias locales y ausencia de archivos privados o scripts incrustados
inesperados en la publicación. Las pruebas de la interfaz cubren menú,
movimiento continuo del muestrario, interrupción táctil, controles y movimiento
reducido; no equivalen a una inspección visual en un teléfono físico.

## Trabajo pendiente fuera de esta revisión

- Verificar Search Console y Bing Webmaster Tools, enviar el sitemap y revisar
  indexación y consultas que terminan en contactos útiles.
- Confirmar un dominio definitivo. Al cambiarlo, actualizar de forma coherente
  la base del sitio, canonical, robots, datos estructurados y las comprobaciones.
- Mantener nombre, teléfono, ubicación y enlace coherentes con Google Business
  Profile. No publicar horarios, dirección completa o reseñas sin confirmar.
- Confirmar precios y datos del catálogo. Reemplazar las ilustraciones de producto
  y taller por fotografías reales cuando estén disponibles.
- Publicar casos reales con mueble, trabajo realizado, tela y fotografías
  correspondientes a la misma pieza.
- Medir consultas guardadas y su calidad comercial. Un clic a WhatsApp o un intento
  de abrirlo no demuestra que la persona haya enviado un mensaje. Usar los eventos
  del formulario y la planilla para distinguir esas etapas.

No se accedió a Search Console, Bing, Google Business Profile ni a datos de Core
Web Vitals de campo para atribuir resultados de posicionamiento o conversión.

## Referencias

- [Google: funciones de IA y sitios web](https://developers.google.com/search/docs/appearance/ai-features).
- [Google: SEO con JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- [Google: datos de negocio local](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- [OpenAI: robots de búsqueda](https://developers.openai.com/api/docs/bots).
- [Vercel: configuración](https://vercel.com/docs/project-configuration/vercel-json).
