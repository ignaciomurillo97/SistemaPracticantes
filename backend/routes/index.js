var express = require('express');
var passwordHash  = require('password-hash');
var usuario = require('../model/usuario.js');
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
})

//Log in 

router.post ('/login', function(req, res, next){
   res.setHeader('Content-Type', 'application/json');

   var loginObject;
   var nombreUsuario = req.body.nombreUsuario;
   var contrasena = req.body.contrasena;

   usuario.autenticar(nombreUsuario, contrasena).then(function(dbResponse){
      console.log(dbResponse[0].Contraseña);
      if (dbResponse.length > 0 && passwordHash.verify(contrasena, dbResponse[0].Contraseña)) {
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
   if (tipoPersona == "coordinador") return "coordinadores"
   if (tipoPersona == "estudiante") return "estudiante"
   if (tipoPersona == "administrador") return "administrador"
   if (tipoPersona == "empresa") return "empresa"
}

function revisarUsuario(req, res, next) {
   if (req.session.usuario){
      next();
   }
   res.status(500).send({ error: "Usuario no registrado" });
}

module.exports = router;
