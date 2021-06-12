
var urlsToPrefetch = [
    '/tennis/index.html',
    '/tennis/index.css',
    '/tennis/images/icons/favicon.svg',
    '/tennis/images/icons/icon-192x192.png',
    '/tennis/images/icons/icon-256x256.png',
    '/tennis/images/icons/icon-384x384.png',
    '/tennis/images/icons/icon-512x512.png',
    '/tennis/manifest.json',
    '/tennis/images/icons/facebook.svg',
    '/tennis/images/icons/instagram.svg',
    '/tennis/images/icons/info.svg',
    '/tennis/images/icons/invisible.svg',
    '/tennis/images/icons/plus.svg',
    '/tennis/images/icons/ranking.svg',
    '/tennis/images/icons/remove.svg',
    '/tennis/images/icons/stats.svg',
    '/tennis/images/icons/twitter.svg',
    '/tennis/images/icons/visible.svg',
    '/tennis/js/index.js',
    '/tennis/js/common.js',
    'https://cdn.amcharts.com/lib/4/core.js',
    'https://cdn.amcharts.com/lib/4/charts.js',
    'https://cdn.amcharts.com/lib/4/themes/animated.js'
];

self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('tennis').then(function (cache) {
            cache.addAll(urlsToPrefetch.map(function (urlToPrefetch) {
                return new Request(urlToPrefetch, { mode: 'no-cors' });
            })).then(function () {
                console.log('All resources have been fetched and cached.');
            });
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
