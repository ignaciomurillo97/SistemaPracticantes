var express = require('express');
var universidad = require('../model/universidad.js')
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/Tmp', function(req, res, next) {
   if (req.session.views) {
      req.session.views ++;
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: '+req.session.views+'</p>');
      //res.write('<p>expires in: '+req.session.cookie.maxAge/1000+'</p>');
      res.end();
   } else {
      req.session.views = 1;
      res.end('Bienvenido al sitio!');
   }
})

router.get ('/universidad', function(req, res, next) {
   universidad.seleccionarUniversidades().then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

module.exports = router;

/*
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
 */
