self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('tennis').then(function (cache) {
            return cache.addAll([
                './index.html',
                './index.css',
                './images/icons/favicon.svg',
                './images/icons/icon-192x192.png',
                './images/icons/icon-256x256.png',
                './images/icons/icon-384x384.png',
                './images/icons/icon-512x512.png',
                './images/icons/icon-180x180.png',
                './manifest.json',
                './images/icons/facebook.svg',
                './images/icons/instagram.svg',
                './images/icons/info.svg',
                './images/icons/invisible.svg',
                './images/icons/plus.svg',
                './images/icons/ranking.svg',
                './images/icons/remove.svg',
                './images/icons/stats.svg',
                './images/icons/twitter.svg',
                './images/icons/visible.svg',
                './js/index.js',
                './js/common.js',
                'https://cdn.amcharts.com/lib/4/core.js?dummy=d',
                'https://cdn.amcharts.com/lib/4/charts.js?dummy=d',
                'https://cdn.amcharts.com/lib/4/themes/animated.js?dummy=d'
            ]);
        })
    );

    event.registerForeignFetch({
        scopes: [self.registration.scope], // or some sub-scope
        origins: ['*'] // or ['https://example.com']
      });
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(fetch(event.request));
});

self.addEventListener('foreignfetch', event => {
    // The new Request will have credentials omitted by default.
    const noCredentialsRequest = new Request(event.request.url);
    event.respondWith(
      // Replace with your own request logic as appropriate.
      fetch(noCredentialsRequest)
        .catch(() => caches.match(noCredentialsRequest))
        .then(response => ({response}))
    );
  });