var express = require('express');
var carrera = require('../model/carrera.js');
var universidad = require('../model/universidad.js');
var sede = require('../model/sede.js');
var semestre = require('../model/semestres.js');
var administrador = require('../model/administrador.js');
var router = express.Router();

// Rutas de la API

router.route('/')
.get(function (req, res, next) {
  administrador.seleccionarAdministrador().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})
.put(function(req, res, next) {
  var administradorObject = req.body;
  console.log(administradorObject);
  administrador.agregarAdministrador(administradorObject).then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    res.status(400);
    res.send('Datos Invalidos');
    console.log(err);
  })
})
.post(function(req, res, next) {
  var administradorObject = req.body;
  administrador.modificarAdministrador(administradorObject).then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.route('/telefono/:cedula')
.get(function (req, res, next) {
  var cedula = req.params.cedula;
  administrador.seleccionarTelefonos(cedula).then(function(dbResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})
.put(function(req, res, next) {
  var cedula = req.params.cedula;
  var telefono = req.body;
  administrador.agregarTelefono(cedula, telefono).then(function(dbResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.route('/correo/:cedula')
.get(function (req, res, next) {
  var cedula = req.params.cedula;
  administrador.seleccionarCorreos(cedula).then(function(dbResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})
.put(function(req, res, next) {
  var cedula = req.params.cedula;
  var correo = req.body;
  administrador.agregarCorreo(cedula, correo).then(function(dbResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.get ('/validar-credenciales', function(req, res, next){
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    res.send({autorizado : true});
  }
  else {

    res.send({autorizado : false});
  }
})

router.route('/coordinador')
.get(function(req, res, next) {
  administrador.seleccionarAdministrador().then(function(dbResponse){
    res.setHeader('Content-Type', 'text/html');
    res.send(dbResponse);
  }).catch(function(err){
    console.log(err);
  })
})

router.put ('/modificar-carrera', function(req, res, next) {
  let response = {}
  let objetoCarrera = req.body;
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    carrera.modificarCarrera(objetoCarrera).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
});

router.post ('/agregar-carrera/:idSede/:nombreCarrera', function(req, res, next) {
  let response = {}
  let nombreCarrera = req.params.nombreCarrera;
  let idSede = req.params.idSede;
  console.log(nombreCarrera);
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    carrera.agregarCarrera(idSede, nombreCarrera).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
});

router.put ('/modificar-universidad', function(req, res, next){
  let response = {}
  let objetoUniversidad = req.body;
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    universidad.modificarUniversidad(objetoUniversidad).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
})

router.post ('/agregar-universidad', function(req, res, next){
  let response = {}
  let objetoUniversidad = req.body;
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    universidad.agregarUniversidad(objetoUniversidad).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
})

router.put ('/modificar-sede', function(req, res, next){
  let response = {}
  let objetoUniversidad = req.body;
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    sede.modificarSede(objetoUniversidad).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
})

router.post ('/agregar-sede', function(req, res, next){
  let response = {}
  let objetoSede = req.body;
  if (req.session.usuario && req.session.usuario.Tipo == 'administrador') {
    sede.agregarSede(objetoSede).then(function(dbResponse) {
      response.modificado = true;
      res.send(response);
    });
  }
  else {
    console.log('Advertencia: acceso no autorizado');
    response.modificado = false;
    res.send(response);
  }
})

router.post ('/modificar-semestre', function(req, res, next) {
  let response = {}
  let objetoSemestre = req.body;
  console.log(objetoSemestre);

  semestre.editarSemestre(objetoSemestre).then(function(dbResponse) {
    response.modificado = true;
    res.send(response);
  });
});

module.exports = router;
