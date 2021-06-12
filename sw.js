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
                'https://cdn.amcharts.com/lib/4/core.js',
                'https://cdn.amcharts.com/lib/4/charts.js',
                'https://cdn.amcharts.com/lib/4/themes/animated.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || caches.match('/tennis/index.html');
        })
    );
});
