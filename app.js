// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('✅ Evento beforeinstallprompt capturado');

        e.preventDefault();
        deferredPrompt = e;

        const btn = document.createElement('button');
        btn.textContent = 'Agregar a inicio';
        btn.id = 'a2hs-btn';
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            btn.remove();
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(choice => {
                if (choice.outcome === 'accepted') {
                    console.log('👍 Instalación aceptada');
                } else {
                    console.log('👎 Instalación cancelada');
                }
                deferredPrompt = null;
            });
        });
    });

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw.js')
            .then(reg => {
                //alert(323)
                console.log('✅ Service Worker registrado:', reg.scope);
            })
            .catch(err => console.error('❌ Error al registrar el SW:', err));
    });
}