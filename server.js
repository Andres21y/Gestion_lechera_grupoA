const express = require('express');
const path = require('path');

const app = express();

// 1. Define el directorio de archivos estáticos (public)
//    __dirname es una variable de Node que te da la ruta del directorio actual del archivo.
//    path.join() crea una ruta compatible con cualquier sistema operativo.
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// 2. Ruta principal que captura cualquier solicitud GET que no sea un archivo estático
//    Esto asegura que si alguien va a la raíz o a otra ruta manejada por el frontend,
//    reciba el archivo HTML principal.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Exporta la aplicación para Vercel
module.exports = app;