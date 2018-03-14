var express = require('express');
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
})

module.exports = router;
