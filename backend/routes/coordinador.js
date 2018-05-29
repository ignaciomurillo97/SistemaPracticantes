let express = require('express');
let router = express.Router();
let coordinador = require('../model/coordinador.js');
let usuario = require('../model/usuario.js');
// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
    res.send('Hello World!');
});

router.post('/estudiantesSinAprobar', function (req, res, next) {
    let idCarrera = req.body.idCarrera;
    let estado = 'pendiente';
    coordinador.obtenerEstudiantes(estado,idCarrera).then(function (listaEstudiantes) {
        res.send(listaEstudiantes);
    })

});

router.post('/estudiantesEnPractica', function (req, res, next) {
    let idCarrera = req.body.idCarrera;
    let estado = 'practica';
    coordinador.obtenerEstudiantes(estado, idCarrera).then(function (listaEstudiantes) {
        res.send(listaEstudiantes);
    })

});

router.post('/eliminarEstudiante', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    let cedula = req.body.cedula;
    coordinador.eliminarEstudiante(cedula).then(function () {
        res.send('Se elimino el estudiante');
    })
});

router.post('/estudianteAPractica', function (req, res) {

    let cedula = req.body.cedula;
    let estado = 'practica';
    coordinador.cambiarEstadoEstudiante(cedula,estado).then(function () {
        res.send('Se paso el estudiante a practica');
    })
});

router.post('/agregarProfesorPractica', function (req, res) {
    let nombre = req.body.nombre;
    let segundoNombre = req.body.segundoNombre;
    let apellido = req.body.apellido;
    let segundoApellido = req.body.segundoApellido;
    let sexo = req.body.sexo;
    let tipoPersona = 5;
    let cedula = req.body.cedula;

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
            res.send('Ya existe este numero de cedula');
        }
        else {
            usuario.agregarPersona(cedula,nombre,segundoNombre,apellido,segundoApellido,sexo,tipoPersona)
                .then(function () {
                    usuario.agregarCorreosContacto(numerosContacto).then(function () {
                        usuario.agregarNumerosContacto(numerosContacto).then(function () {
                            res.send('Se agrego el nuevo profesor de practica')
                        })
                    });
                });
        }
    });
});

router.post('/asignarProfesorPractica', function (req, res) {
    let cedulaProfesor = req.body.cedulaProfesor;
    let cedulaEstudiante = req.body.cedulaEstudiante;
    coordinador.asignarProfesorPractica(cedulaProfesor,cedulaEstudiante).then(function () {
        res.send('Se asigno el profesor de practica');
    })
});

router.post('/eliminarEmpresaDeCarrera', function (req, res) {
    let cedulaJuridica = req.body.cedulaJuridica;
    let idCarrera = req.body.idCarrera;
    coordinador.eliminarEmpresaDeCarrera(cedulaJuridica, idCarrera).then(function () {
        res.send('se elimino la empresa de esa carrera');
    });
});


router.post('/empresasSinAprobar', function (req, res) {
    let idCarrera = req.body.idCarrera;
    let estado = 'pendiente';
    coordinador.obtenerEmpresas(idCarrera, estado).then(function (listaEmpresas) {
        res.send(listaEmpresas);
    })
});


module.exports = router;
