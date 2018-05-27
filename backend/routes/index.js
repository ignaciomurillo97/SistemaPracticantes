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
   var nombreUsuario = req.body.nombreUsuario;
   var contrasena = req.body.contrasena;

   usuario.autenticar(nombreUsuario, contrasena).then(function(dbResponse){
      console.log(dbResponse[0].NombreUsuario);
      if (dbResponse.length > 0) {
         loginObject = {'autenticar':true};
      } else {
         loginObject = {'autenticar':false};
      }
      res.send(loginObject);
   }).catch(function(err){
      console.log(err);
   })

   if (!req.session.autenticado) {
      console.log('Nuevo Usuario!');
      req.session.autenticado = true;
   } else {
      console.log('Cookie enviado!');
   }
})

module.exports = router;
