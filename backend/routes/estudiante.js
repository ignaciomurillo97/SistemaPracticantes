let express = require('express');
let router = express.Router();
let passwordHash = require('password-hash');
let usuario = require('../model/usuario.js');
let estudiante = require('../model/estudiante.js');
let coordinador = require('../model/coordinador.js')
// Rutas de la API

// Ejemplo:
router.route('/')
.get(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if (req.session.usuario && req.session.usuario.Tipo == 'estudiante') {
    let cedula = req.session.usuario;
    estudiante.obtenerEstudiante(cedula).then(function (dbResponse) {
      res.send(dbResponse);
    });
  } else {
    res.status(400);
    res.send('Datos Invalidos');
  }
})
.put(function(req, res, next) {
  let estudianteObj = req.body;
  estudiante.modificarEstudiante(estudianteObj).then(function(dbResponse) {
    res.send({dbResponse});
  }).catch(function(err) {
    res.status(400);
    res.send('Datos Invalidos');
  })
})

router.route('/evaluacion/:cedulaCoordinador')
.post(function(req, res, next){
   let encuesta = req.body;
   let cedulaCoordinador = req.params.cedulaCoordinador;
   let cedulaUniversidada = req.session.usuario;
   estudiante.agregarEvaluacion(encuesta, cedulaEstudiante, cedulaCoordinador)
      .then(function(data) {
         res.send('encuesta enviada');
      })
      .catch(function(err){
         res.status(400);
         res.send('Datos Invalidos');
      })
})

router.route('/coordinadores')
.get(function(req, res, next) {
   coordinador.obtenerCoordinadores()
   .then(function (dbResponse) {
      res.send(dbResponse)
   })
   .catch(function (err) {
      res.status(400);
      res.send('Datos Invalidos');
   })
});

router.get('/universidades', function (req, res, next) {
   res.setHeader('Content-Type', 'application/json');
   estudiante.obtenerUniversidades().then(function (dbResponse) {
      res.send(dbResponse);
   });
});

router.post('/sedes', function (req, res, next) {
   let idUniversidad = req.body.idUniversidad;
   estudiante.obtenerSedes(idUniversidad).then(function (dbResponse) {
      res.send(dbResponse);
   });
});

router.post('/escuelas', function (req, res, next) {
   let idUniversidad = req.body.idUniversidad;
   estudiante.obtenerSedes(idUniversidad).then(function (dbResponse) {
      res.send(dbResponse);
   });
});

router.post('/carreras', function (req, res, next) {
   let idSede = req.body.idSede;
   estudiante.obtenerCarreras(idSede).then(function (dbResponse) {
      res.send(dbResponse);
   });
});

router.post('/agregarEstudiante',function (req, res, next) {
   let nombre = req.body.nombre;
   let segundoNombre = req.body.segundoNombre;
   let apellido = req.body.apellido;
   let segundoApellido = req.body.segundoApellido;
   let sexo = req.body.sexo;
   let tipoPersona = 2;
   let nombreUsuario = req.body.nombreUsuario;
   let contrasena = passwordHash.generate(req.body.contrasena);
   let numeroCarne = req.body.numeroCarne;
   let carrera = req.body.carrera;
   let cedula = req.body.cedula;
   let estado = 'pendiente';

   let foto = req.body.foto;

   let numerosContacto = [];
   let correosContacto = [];

   for(let numero in req.body.numerosContacto){
      numerosContacto.push([req.body.numerosContacto[numero],cedula]);
   }

   for(let correo in req.body.correosContacto){
      correosContacto.push([req.body.correosContacto[correo],cedula]);
   }


   usuario.verificarCedula(cedula).then(function (verificacionCedula) {
      if(verificacionCedula.length > 0){
         res.send({"respuesta" : 'El número de cédula ya esta en el sistema'});
      }
      else{
         usuario.verificarNombreUsuario(nombreUsuario).then(function (verificacionNombreUsuario) {
            if(verificacionNombreUsuario.length > 0){
               res.send({"respuesta" : 'El nombre de usuario ya existe en el sistema'});
            }
            else {
               estudiante.verificarCarne(numeroCarne).then(function (verificacionCarne) {
                  if(verificacionCarne.length > 0){
                     res.send({"respuesta" : 'El numero de carne ya existe en el sistema'});
                  }
                  else {
                     usuario.agregarPersona(cedula,nombre,segundoNombre,apellido, segundoApellido,sexo,tipoPersona)
                        .then(function () {
                           usuario.agregarUsuario(nombreUsuario,contrasena,cedula).then(function () {
                              estudiante.agregarEstudiante(cedula,carrera,numeroCarne, estado).then(function () {
                                 usuario.agregarNumerosContacto(numerosContacto).then(function () {
                                    usuario.agregarCorreosContacto(correosContacto).then(function () {
                                       res.send({"respuesta" : ''});
                                    });
                                 });
                              });
                           });
                        });
                  }
               });
            }
         });
      }
   });
});





module.exports = router;
