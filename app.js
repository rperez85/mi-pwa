// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw.js')
            .then(reg => {
                alert(323)
                console.log('✅ Service Worker registrado:', reg.scope);
            })
            .catch(err => console.error('❌ Error al registrar el SW:', err));
    });
}