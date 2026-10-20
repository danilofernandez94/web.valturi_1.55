# Valturi · Web

`index.html` es la única home. `/home2.html` redirige permanentemente a `/`.
La home usa `home.css`, `home-form.js` y `home-ui.js`; las demás secciones
comparten `styles.css` y `script.js`. `materials.js` contiene el muestrario.

## Publicación y comprobación

Vercel genera `dist/` desde las fuentes. No editar ni subir `dist/`.
Sólo se publican los archivos permitidos por `scripts/build-site.mjs` y `assets/`.
La API se ejecuta separadamente en Vercel.

```sh
node --test tests/*.test.cjs
node scripts/build-site.mjs
node scripts/check-site.mjs
```

Los mismos controles se ejecutan automáticamente antes de publicar. No hay
dependencias npm de la aplicación que instalar. La generación conserva las
32 páginas indexables, sus datos estructurados y el sitemap. Ver
[mantenimiento SEO](docs/seo-geo.md) para ampliar el catálogo.

## Registro de consultas

El formulario envía a `/api/home2-leads` y abre WhatsApp después de confirmar
el guardado. Ese nombre de API, las variables `HOME2_LEADS_WEBHOOK_URL` y
`HOME2_LEADS_WEBHOOK_SECRET`, las propiedades de Apps Script y los nombres de
eventos se conservan por compatibilidad con la integración y las mediciones
existentes. No representan otra página de inicio.

`integrations/google-sheets.gs` es la fuente de la integración que ya está
implementada en Google Apps Script. Se trasladó sin modificar su contenido;
esta limpieza no requiere volver a configurar la planilla ni sus credenciales.
La URL del webhook y el secreto se guardan exclusivamente en Vercel. Nunca
agregar archivos `.env`, credenciales ni exportaciones de consultas al repositorio.

## Revisión de seguridad · 20 de octubre de 2026

Se revisaron las fuentes, las dependencias de recursos, los puntos de inserción
de HTML, el formulario, la API, la integración con Sheets y las cabeceras públicas.
La búsqueda automatizada de patrones de credenciales en el código actual y en
el historial textual disponible no encontró coincidencias confirmadas. Es un
control complementario, no una garantía de detección de cualquier secreto.

| Hallazgo | Corrección |
| --- | --- |
| Home duplicada y API antigua en la raíz publicada como JavaScript | Eliminación de duplicados, redirección de la home anterior y lista explícita de archivos públicos. |
| El POST aceptaba ausencia de `Origin` y comparaba sólo el host | Origen completo obligatorio, HTTPS en Vercel y rechazo de solicitudes que Fetch Metadata identifica como externas. |
| UUID convertido implícitamente y campos demasiado largos truncados | Comprobación de tipos, longitudes y caracteres; rechazo antes de contactar al proveedor; límite de 8 KiB. |
| CSP permitía JavaScript incrustado | Retirada de `unsafe-inline` de `script-src`, bloqueo de manejadores HTML y eliminación del cargador de Clarity sin configurar y de sus permisos. El JSON-LD permanece como datos no ejecutables. |
| Texto libre de búsqueda enviado a Analytics | Medición de longitud y resultados, sin el texto introducido. Los datos del formulario tampoco se incluyen en sus eventos. |
| Posible publicación accidental de archivos futuros | Lista de publicación, verificación de la salida y exclusiones para entornos, registros y configuración local. |

Se conservaron las protecciones existentes: respuesta de la API sin caché,
destino del webhook restringido a Apps Script, secreto de servidor, validación
de consentimiento y teléfono, campo trampa, deduplicación por UUID, bloqueo de
escrituras concurrentes y escape de fórmulas en Sheets. Los errores no registran
datos personales ni respuestas privadas del proveedor. Las pruebas cubren
rechazos, reintentos, guardado, fórmulas y fallos del proveedor sin crear leads reales.

### Límites y mantenimiento

- El formulario es público. `Origin`, el campo trampa y las validaciones reducen
  abuso, pero no autentican personas ni detienen bots que reproducen solicitudes.
  El límite existente de 8 consultas por IP cada 10 minutos usa la caché compartida
  de Apps Script; esa caché puede desalojar entradas y no constituye una barrera
  persistente contra ataques. Si aparece spam, corresponde añadir protección
  administrada en el firewall de Vercel o un desafío con validación del servidor.
- La revisión del repositorio no permite comprobar MFA, permisos reales de la
  planilla, políticas privadas de Vercel, registros internos ni la versión ejecutada
  dentro de la cuenta de Google. La fuente de Apps Script fue revisada y probada
  localmente; no se modificó su despliegue externo.
- Google Tag Manager tiene permiso para ejecutar JavaScript como parte de la
  medición existente. Cuidar quién puede publicar en ese contenedor. Las futuras
  etiquetas HTML personalizadas deben adaptarse a la CSP, sin volver a permitir
  indiscriminadamente scripts incrustados.
- Una revisión y pruebas satisfactorias no garantizan ausencia de vulnerabilidades
  futuras. Revisar estos controles cuando cambien el formulario o los proveedores.

Referencias: [OWASP: seguridad de APIs](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html),
[OWASP: validación de origen](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html),
[Google: CSP y Tag Manager](https://developers.google.com/tag-platform/security/guides/csp),
[Google: límites de caché](https://developers.google.com/apps-script/reference/cache/cache),
[Vercel: cabeceras de solicitudes](https://vercel.com/docs/headers/request-headers).
