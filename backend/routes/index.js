var express = require('express');
var usuario = require('../model/usuario.js')
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
})

router.post ('/login', function(req, res, next){
   res.setHeader('Content-Type', 'application/json');

   var loginObject;
   var nombreUsuario = req.body.usuario;
   var contrasena = req.body.contrasena;

   usuario.autenticar(nombreUsuario, contrasena).then(function(dbResponse){
      if (dbResponse.length > 0) {
         loginObject = {'autenticar':true};
      } else {
         loginObject = {'autenticar':false};
      }
      res.send(loginObject);
   }).catch(function(err){
      console.log(err);
   })
})

module.exports = router;
