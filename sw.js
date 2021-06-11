self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('tennis').then(function(cache) {
            return cache.addAll([
                './index.html',
                './images/icons/favicon.svg',
                './images/icons/favicon512.png',
                './images/icons/favicon192.png',
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
                './js/index.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
