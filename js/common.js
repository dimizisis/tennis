'use strict';

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function (error) {
        // registration failed
    });
}

// Handle A2HS
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (ev) {
   
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
});

var myApp = {};