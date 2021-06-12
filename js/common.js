'use strict';

// Service Worker
if ('serviceWorker' in navigator) {
    ServiceWorkerContainer.register('/sw.js').catch(function (error) {
        // registration failed
        console.log('registration failed');
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

var myApp = {};