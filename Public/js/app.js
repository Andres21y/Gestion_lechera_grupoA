// Inicializmos componentes de Materialize aquí
document.addEventListener('DOMContentLoaded', function () {
    console.log("===>", "start application");

    M.AutoInit();
    initApp()

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
    }
});
