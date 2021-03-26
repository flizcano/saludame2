const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
  let nombre = req.params.name || 'desconocido';
  nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1, nombre.length).toLowerCase();
  res.send(`<h1>Hola ${nombre}!`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));