(function () {
  'use strict';

  const GTM_ID = 'GTM-WLW65L95';
  const GA4_ID = 'G-4GWF9X2QHT';
  const CLARITY_PROJECT_ID = ''; // Completar cuando se habilite Microsoft Clarity.

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
    site_name: 'Valturi Tapizados',
    page_type: window.location.pathname || '/'
  });

  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(gtmScript);

  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, {
    send_page_view: true,
    transport_type: 'beacon'
  });

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(gaScript);

  if (CLARITY_PROJECT_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = `https://www.clarity.ms/tag/${i}`;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
  }
})();
