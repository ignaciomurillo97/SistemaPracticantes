let express = require('express');
let router = express.Router();
var passwordHash = require('password-hash');
let usuario = require('../model/usuario.js');
let estudiante = require('../model/estudiante.js');
// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
});

router.get('/universidades', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    estudiante.obtenerUniversidades().then(function (dbResponse) {
        console.log(dbResponse);
        res.send(dbResponse);
    })
});

router.post('/sedes', function (req, res, next) {
    let idUniversidad = req.body.idUniversidad;
    console.log(idUniversidad);
    estudiante.obtenerSedes(idUniversidad).then(function (dbResponse) {
        res.send(dbResponse);
    })
});

router.post('/escuelas', function (req, res, next) {
    let idUniversidad = req.body.idUniversidad;
    estudiante.obtenerSedes(idUniversidad).then(function (dbResponse) {
        res.send(dbResponse);
    })
});

router.post('/carreras', function (req, res, next) {
    let idUniversidad = req.body.idUniversidad;
    let idSede = req.body.idSede;
    estudiante.obtenerCarreras(idUniversidad, idSede).then(function (dbResponse) {
        res.send(dbResponse);
    })
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
    let universidad = req.body.universidad;
    let escuela = req.body.escuela;
    let sede = req.body.sede;
    let carrera = req.body.carrera;
    let cedula = req.body.cedula;
    let estado = 'pendiente';

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
            res.send('El número de cédula ya esta en el sistema');
        }
        else{
            usuario.verificarNombreUsuario(nombreUsuario).then(function (verificacionNombreUsuario) {
                if(verificacionNombreUsuario.length > 0){
                    res.send('El nombre de usuario ya existe en el sistema');
                }
                else {
                    estudiante.verificarCarne(numeroCarne).then(function (verificacionCarne) {
                        if(verificacionNombreUsuario.length > 0){
                            res.send('El numero de carne ya existe en el sistema');
                        }
                        else {
                            usuario.agregarPersona(cedula,nombre,segundoNombre,apellido, segundoApellido,sexo,tipoPersona)
                                .then(function () {
                                    usuario.agregarUsuario(nombreUsuario,contrasena,cedula).then(function () {
                                        estudiante.agregarEstudiante(cedula,universidad,escuela,sede,carrera,numeroCarne, estado).then(function () {
                                            usuario.agregarNumerosContacto(numerosContacto).then(function () {
                                                usuario.agregarCorreosContacto(correosContacto).then(function () {
                                                    res.send('Se agrego el usuario de manera satisfactoria');
                                                });
                                            })
                                        })
                                    })
                                })
                        }
                    })


                }
            })

        }
    })
    


});





module.exports = router;
