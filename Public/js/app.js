document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes de Materialize (ej. menús desplegables, modales, etc.)
    M.AutoInit();
console.log("aja que paso");

    // Función para cargar componentes HTML
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar el componente desde ${url}:`, error));
    };

    // Cargar navbar y footer si los contenedores existen
    if (document.getElementById('navbar-container')) {
        // La ruta es relativa a la carpeta 'views' pero el servidor la resuelve desde la raíz.
        // Como no podemos acceder a 'views' directamente, necesitamos rutas específicas en el servidor.
        // Por ahora, lo haremos con un "truco" y luego lo mejoraremos.
        // *** SOLUCIÓN TEMPORAL para el frontend ***
        // Para una solución real y escalable, usaríamos un motor de plantillas.
        loadComponent('#navbar-container', '/components/navbar.html');
    }
    if (document.getElementById('footer-container')) {
        loadComponent('#footer-container', '/components/footer.html');
    }
});