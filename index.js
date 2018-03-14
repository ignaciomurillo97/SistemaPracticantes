const express = require('express');
const app = express();
const port = 3000;

// Definir documentos publicos
app.use(express.static('public'))

// Archivos de rutas
var index         = require('./routes/index.js');
var administrador = require('./routes/administrador.js');
var empresa       = require('./routes/empresa.js');
var coordinador   = require('./routes/coordinador.js');
var estudiante    = require('./routes/estudiante.js');

app.use('/'             , index);
app.use('/administrador', administrador);
app.use('/empresa'      , empresa);
app.use('/coordinador'  , coordinador);
app.use('/estudiante'   , estudiante);

app.listen(port, () => console.log('Servidor corriendo en el puerto: ' + port));
