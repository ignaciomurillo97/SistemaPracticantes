var express = require('express');
var usuario = require('../model/usuario.js')
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
})

router.get('/test', function(req, res, next) {
   console.log('test');
   res.send({'test':'test'});
})

router.post ('/login', function(req, res, next){
   res.setHeader('Content-Type', 'application/json');
   console.log(req.body);

   var loginObject;
   var nombreUsuario = req.body.nombreUsuario;
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
