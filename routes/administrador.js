var express = require('express');
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hola Administrador!');
})

router.get ('/adios', function(req, res, next) {
   res.send('Adios Administrador');
})

module.exports = router;
