const express = require('express');
const path = require('path');

const app = express();

// No necesitas la variable 'port' aquí para Vercel

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Manejar la ruta raíz para servir el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// La llamada a app.listen() se elimina. Vercel se encarga de esto.
// app.listen(port, () => {
//   console.log(`Servidor corriendo en http://localhost:${port}`);
// });

// Exportar la app para que Vercel la pueda usar
module.exports = app;