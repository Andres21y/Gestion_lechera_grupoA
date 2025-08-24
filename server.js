const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// --- RUTAS PARA COMPONENTES ---
// Cuando el frontend pida '/components/navbar.html', le enviaremos el archivo real.
app.get('/components/navbar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'components', 'navbar.html'));
});

// Hacemos lo mismo para el footer.
app.get('/components/footer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'components', 'footer.html'));
});
// --- FIN DE RUTAS PARA COMPONENTES ---


// --- RUTAS PARA PÁGINAS PRINCIPALES ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// ... (resto de tus rutas de páginas) ...
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});


// Iniciar el servidor
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}

// Exportamos la app para que Vercel pueda tomarla y ejecutarla como una función serverless.
module.exports = app;