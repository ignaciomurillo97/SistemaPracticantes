const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 3000;


// Definir documentos publicos
app.use(express.static('public'))

// session
app.set('trust proxy', 1);
app.use(session({
  secret: 'culpa de torres',
  cookie: { secure: true, maxAge: 60000 }
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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