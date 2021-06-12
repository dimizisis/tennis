'use strict';

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/tennis/sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });
}

// Handle A2HS
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (ev) {

    console.log('triggered beforeinstallprompt');
    ev.preventDefault();
    deferredPrompt = ev;
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === 'accepted')
            deferredPrompt = null;
    });
});

window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    console.log('app installed');
});
