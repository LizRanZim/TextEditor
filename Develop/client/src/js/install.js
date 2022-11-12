const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // *** start Liz added code - this is from 19-28 base code
        // Store the triggered events
        window.deferredPrompt = event;

        // Remove the hidden class from the button.
        butInstall.classList.toggle('hidden', false);
          // *** end Liz added code - this is from 19-28 base code

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});