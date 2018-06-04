var express = require('express');
var carrera = require('../model/carrera.js');
var router = express.Router();

// Rutas de la API

router.put ('/modificar-carrera', function(req, res, next) {
   let response = {}
   let objetoCarrera = req.body;
   if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
      carrera.modificarCarrera(objetoCarrera).then(function(dbResponse) {
         response.modificado = true;
      });
   }
   else {
      console.log('Advertencia: acceso no autorizado');
      response.modificado = true;
   }
   res.send(response);
});

module.exports = router;
