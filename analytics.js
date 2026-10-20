(function () {
  'use strict';

  const GTM_ID = 'GTM-WLW65L95';
  const GA4_ID = 'G-4GWF9X2QHT';

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

  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  const clarityScript = document.createElement('script');
  clarityScript.async = true;
  clarityScript.src = 'https://www.clarity.ms/tag/z0wf6alyom';
  document.head.appendChild(clarityScript);

})();
