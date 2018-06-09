let express = require('express');

let estudiante = require('../model/estudiante.js');
var passwordHash  = require('password-hash');
var usuario = require('../model/usuario.js');
var universidad = require('../model/universidad.js')
var sede = require('../model/sede.js')
var carrera = require('../model/carrera.js')
var semestre = require('../model/semestres.js')
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
    res.send('Hello World!');
})

//Log in 

router.post ('/login', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');

    let loginObject;
    let nombreUsuario = req.body.nombreUsuario;
    let contrasena = req.body.contrasena;

    usuario.autenticar(nombreUsuario, contrasena).then(function(dbResponse){
        if (dbResponse.length > 0 && passwordHash.verify(contrasena, dbResponse[0].Contraseña)) {
            req.session.usuario = dbResponse[0];
            redireccion = redireccionUsuario(dbResponse[0].Tipo)
            loginObject = {'autenticar':true, 'redirect':redireccion, 'cedula': dbResponse[0].Cedula};
        }
        else {
            loginObject = {'autenticar':false, 'redirect': null};
        }
        res.send(loginObject);
    })
});

router.get ('/universidad', function(req, res, next) {
   universidad.seleccionarUniversidades().then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

router.get ('/sede/:idUniversidad', function(req, res, next) {
   idUniversidad = req.params.idUniversidad
   sede.seleccionarSede(idUniversidad).then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

router.get ('/carrera/:idSede', function(req, res, next) {
   idSede = req.params.idSede;
   carrera.seleccionarCarrera(idSede).then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

router.get ('/semestres', function(req, res, next) {
   semestre.seleccionarSemestre().then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

router.post ('/semestre/:numeroSemestre/:ano', function(req, res, next) {
   numeroSemestre = req.params.numeroSemestre;
   ano = req.params.ano;
   semestre.agregarSemestre(numeroSemestre, ano).then(function(dbResponse){
      res.setHeader('Content-Type', 'text/html');
      res.send(dbResponse);
   }).catch(function(err){
      console.log(err);
   });
});

function redireccionUsuario(tipoPersona) {
    if (tipoPersona === "coordinador") return "coordinadores";
    if (tipoPersona === "estudiante") return "estudiante";
    if (tipoPersona === "administrador") return "administrador";
    if (tipoPersona === "empresa") return "empresa";
}

function revisarUsuario(req, res, next) {
    if (req.session.usuario){
        next();
    }
    res.status(500).send({ error: "Usuario no registrado" });
}

module.exports = router;
