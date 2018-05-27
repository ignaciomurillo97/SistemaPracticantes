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
      if (dbResponse.length > 0) {
         req.session.usuario = dbResponse[0];
         redireccion = redireccionUsuario(dbResponse[0].Tipo)
         loginObject = {'autenticar':true, 'redirect':redireccion};
      } else {
         loginObject = {'autenticar':false, 'redirect': null};
      }
      res.send(loginObject);
   }).catch(function(err){
      console.log(err);
   })
})

function redireccionUsuario(tipoPersona) {
   if (tipoPersona == 'Administrador') return 'administrador';
   if (tipoPersona == 'Coordinadores') return 'coordinadores';
}

module.exports = router;
