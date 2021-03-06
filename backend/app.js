const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

//Cors
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  credentials: true
}

// session
app.set('trust proxy', 1);
app.use(session({
   secret: 'culpa de torres',
   resave: true,
   saveUninitialized: true,
   cookie: { maxAge: 6000000 }
}))

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.set('views', path.join(__dirname, 'views'));

// Archivos de rutas
var index             = require('./routes/index.js');
var administrador     = require('./routes/administrador.js');
var empresa           = require('./routes/empresa.js');
var coordinador       = require('./routes/coordinador.js');
var estudiante        = require('./routes/estudiante.js');
var moduloEstudiante  = require('./routes/moduloEstudiantes.js');

app.use('/'             , index);
app.use('/administrador', administrador);
app.use('/empresa'      , empresa);
app.use('/coordinador'  , coordinador);
app.use('/estudiante'   , estudiante);
app.use('/modulo-estudiante', moduloEstudiante);

app.listen(port, () => console.log('Servidor corriendo en el puerto: ' + port));

var usuario = require('./model/usuario.js');
