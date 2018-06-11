let express = require('express');
let router = express.Router();
let passwordHash = require('password-hash');

let empresa = require('../model/empresa.js');
let usuario = require('../model/usuario.js');

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
    res.send('Hello World!');
});

router.post('/solicitudEmpresaACarrera', function (req, res) {
    let cedulaContacto = req.body.cedulaContacto;
    let idCarrera = req.body.idCarrera;
    let estado = 'pendiente';
    empresa.obtenerCedulaJuridicaEmpresa(cedulaContacto).then(function (cedulaJuridica) {
        let cedulaJuridicaEmpresa = cedulaJuridica[0]['empresaAsociado'];
        empresa.solicitudEmpresa(cedulaJuridicaEmpresa,idCarrera, estado).then(function () {
            res.send({'respuesta':''})
        });
    });

});

router.post('/crearEmpresa', function (req, res) {
    let nombre = req.body.nombre;
    let segundoNombre = req.body.segundoNombre;
    let apellido = req.body.apellido;
    let segundoApellido = req.body.segundoApellido;
    let sexo = req.body.sexo;
    let tipoPersona = 4;
    let nombreUsuario = req.body.nombreUsuario;
    let contrasena = passwordHash.generate(req.body.contrasena);
    let cedulaJuridica = req.body.cedulaJuridica;
    let cedula = req.body.cedula;
    let nombreEmpresa = req.body.nombreEmpresa;

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
                    empresa.verificarCedulaJuridica(cedulaJuridica).then(function (verificacionCedulaJuridica) {
                        if(verificacionCedulaJuridica.length > 0){
                            res.send({"respuesta" : 'El numero de cedula juridica ya existe en el sistema'});
                        }
                        else {
                            usuario.agregarPersona(cedula,nombre,segundoNombre,apellido, segundoApellido,sexo,tipoPersona)
                                .then(function () {
                                    usuario.agregarUsuario(nombreUsuario,contrasena,cedula).then(function () {
                                        empresa.agregarEmpresa(nombreEmpresa, cedulaJuridica).then(function () {
                                            empresa.agregarContactoEmpresa(cedula, cedulaJuridica).then();
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

router.post('/obtenerEventosEmpresa', function (req, res) {
    let cedulaContacto = req.body.cedulaContacto;
    empresa.obtenerCedulaJuridicaEmpresa(cedulaContacto).then(function (cedulaJuridica) {
        let cedulaJuridicaEmpresa = cedulaJuridica[0]['empresaAsociado'];
        empresa.obtenerEventosEmpresa(cedulaJuridicaEmpresa).then(function (listaEventos) {
            res.send(listaEventos);
        })
    })
});

router.post('/seleccionarEvento', function (req, res) {
    let idEvento = req.body.idEvento;
    empresa.seleccionarEvento(idEvento).then(function (evento) {
        empresa.seleccionarActividadesPorEvento(idEvento).then(function (actividadesEvento) {
            res.send([{'evento':evento,'actividadesEvento':actividadesEvento}]);
        });

    });
});

router.post('/obtenerCarrerasAsociadas', function (req, res) {
    let cedulaContacto = req.body.cedulaContacto;
    empresa.obtenerCedulaJuridicaEmpresa(cedulaContacto).then(function (cedulaJuridica) {
        let cedulaJuridicaEmpresa = cedulaJuridica[0]['empresaAsociado'];
        empresa.obtenerCarrerasAsociadas(cedulaJuridicaEmpresa).then(function (lista) {
            res.send(lista);
        })
    })
});

router.get('/obtenerDocumentosEmpresa', function (req, res) {
    empresa.obtenerDocumentos().then(function (listaDocumentos) {
        res.send(listaDocumentos);
    })
});

module.exports = router;
