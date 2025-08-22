// Inicializmos componentes de Materialize aquí
document.addEventListener('DOMContentLoaded', function () {

    initApp()
    M.AutoInit();

    
    function initApp() {

        //  iniciamos el sidenav
        setTimeout(() => {
            const sidenavElems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sidenavElems);
        }, 100);

        // Renderizar componentes
        document.getElementById('navbar-container').innerHTML = Navbar.render();
       /** document.getElementById('features-container').innerHTML = Features.render();
        document.getElementById('stats-container').innerHTML = Stats.render();
        document.getElementById('cta-container').innerHTML = Cta.render();
        document.getElementById('footer-container').innerHTML = Footer.render();*/


        // Modal de demo
        document.getElementById('modal-container').innerHTML = ModalComponent.render({
            id: "demoModal",
            icon: "celebration",
            title: "¡Demo Disponible!",
            content: "Puedes probar todas las funcionalidades creando una cuenta o usando las credenciales de demo.",
            buttons: [
                {
                    text: "Crear Cuenta",
                    class: "btn indigo darken-1 waves-effect waves-light",
                    onclick: "navigateTo('signup')"
                },
                {
                    text: "Usar Demo",
                    class: "btn-flat waves-effect waves-light",
                    onclick: "navigateTo('login')"
                },
                {
                    text: "Cerrar",
                    class: "modal-close btn-flat waves-effect waves-light grey-text"
                }
            ]
        });

        // Inicializar componentes que lo requieren
        ModalComponent.init('demoModal');
    }
});
