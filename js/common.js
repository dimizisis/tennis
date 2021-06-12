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
const installBtn = document.getElementById('navinstallbtn');

window.addEventListener('beforeinstallprompt', function (ev) {
    // Prevent some older browsers from popping the install prompt
    ev.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = ev;
    // Update UI to notify the user they can add to home screen
    installBtn.style.visibility = 'visible';

    installBtn.addEventListener('click', function () {
        console.log('clicked');
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
                // Don't need it any more
                installBtn.style.visibility = 'hidden';
                deferredPrompt = null;
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
        });
    });
});

window.addEventListener('appinstalled', function () {
    installBtn.style.visibility = 'hidden';
    deferredPrompt = null;
    console.log('PWA was installed');
});
