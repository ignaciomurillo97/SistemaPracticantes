let express = require('express');
let router = express.Router();
let coordinador = require('../model/coordinador.js');
let usuario = require('../model/usuario.js');
const mandarCorreos = require('../mandarCorreos.js');
// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
    res.send('Hello World!');
});

router.get('/estadistica/genero', function (req, res, next) {
    coordinador.obtenerEstadisticasGenero().then(function (estadisticas) {
        res.send(estadisticas);
    })
})

router.get('/estadistica/graduacion', function (req, res, next) {
    coordinador.obtenerEstadisticasGraduacion(new Date(req.query.fechaInicio), new Date(req.query.fechaFin)).then(function (estadisticas) {
        res.send(estadisticas);
    })
})

router.post('/estudiantesSinAprobar', function (req, res, next) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let estado = 'pendiente';
    coordinador.obtenerEstudiantes(estado,cedulaCoordinador).then(function (listaEstudiantes) {
        listaEstudiantes = sacarRepetidosLista(listaEstudiantes,'correos');
        listaEstudiantes = sacarRepetidosLista(listaEstudiantes,'numeros');
        res.send(listaEstudiantes);
    });

});

router.post('/estudiantesEnPractica', function (req, res, next) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let estado = 'practica';
    coordinador.obtenerEstudiantes(estado, cedulaCoordinador).then(function (listaEstudiantes) {
        listaEstudiantes = sacarRepetidosLista(listaEstudiantes,'correos');
        listaEstudiantes = sacarRepetidosLista(listaEstudiantes,'numeros');
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
        res.send({'respuesta':''});
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
    let cedulaCoordinador = req.body.cedulaCoordinador;

    let numerosContacto = [];
    let correosContacto = [];

    //se podria asignar directamente el valor de las listas de correos y numeros de telefono
    //pero para facilitar la insercion en la base de datos se hace [[valor, cedulaPersona]]

    for(let numero in req.body.numerosContacto){
        numerosContacto.push([req.body.numerosContacto[numero],cedula]);
    }

    for(let correo in req.body.correosContacto){
        correosContacto.push([req.body.correosContacto[correo],cedula]);
    }

    usuario.verificarCedula(cedula).then(function (verificacionCedula) {
        if(verificacionCedula.length > 0){
            res.send({'respuesta': 'ya existe este número de cédula en el sistema'});
        }
        else {
            usuario.agregarPersona(cedula,nombre,segundoNombre,apellido,segundoApellido,sexo,tipoPersona)
                .then(function () {
                    usuario.agregarCorreosContacto(correosContacto).then(function () {
                        usuario.agregarNumerosContacto(numerosContacto).then(function () {
                            coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
                                let idCarrera = carreraCoordinador[0]['carrera'];
                                coordinador.agregarProfesorPractica(cedula, idCarrera).then(function () {
                                    res.send({'respuesta':''});
                                });
                            });
                        });
                    });
                });
        }
    });
});

router.post('/seleccionarProfesorPractica',function (req,res) {
    let cedulaProfesor = req.body.cedulaProfesor;
    coordinador.seleccionarProfesorPractica(cedulaProfesor).then(function (profesorSeleccionado) {
        profesorSeleccionado = sacarRepetidosLista(profesorSeleccionado,'correos');
        profesorSeleccionado = sacarRepetidosLista(profesorSeleccionado,'numeros');
        res.send(profesorSeleccionado);
    });
});

router.post('/eliminarProfesorPractica', function (req,res) {
    let cedulaProfesor = req.body.cedulaProfesor;
    coordinador.eliminarProfesorPractica(cedulaProfesor).then(function () {
        res.send({'respuesta':''});
    })
});

router.post('/profesoresDePractica', function (req, res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    coordinador.obtenerProfesoresDePractica(cedulaCoordinador).then(function (listaProfesoresPractica) {
        listaProfesoresPractica = sacarRepetidosLista(listaProfesoresPractica,'correos');
        listaProfesoresPractica = sacarRepetidosLista(listaProfesoresPractica,'numeros');
        res.send(listaProfesoresPractica);
    });

});

router.post('/asignarProfesorPractica', function (req, res) {
    let cedulaProfesor = req.body.cedulaProfesor;
    let cedulaEstudiante = req.body.cedulaEstudiante;
    coordinador.asignarProfesorPractica(cedulaProfesor,cedulaEstudiante).then(function () {
        res.send({respuesta:''});
    })
});

router.post('/eliminarEmpresaDeCarrera', function (req, res) {
    let cedulaJuridica = req.body.cedulaJuridica;
    let cedulaCoordinador = req.body.cedulaCoordinador;

    coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
        let idCarrera = carreraCoordinador[0]['carrera'];
        coordinador.eliminarEmpresaDeCarrera(cedulaJuridica, idCarrera).then(function () {
            res.send({'respuesta':''});
        });
    });
});

router.post('/seleccionarEmpresa',function (req,res) {
    let cedulaJuridica = req.body.cedulaJuridica;
    let cedulaCoordinador = req.body.cedulaCoordinador;
    coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
        let idCarrera = carreraCoordinador[0]['carrera'];
        coordinador.seleccionarEmpresa(idCarrera,cedulaJuridica).then(function (empresaSeleccionada) {
            empresaSeleccionada = sacarRepetidosLista(empresaSeleccionada,'correos');
            empresaSeleccionada = sacarRepetidosLista(empresaSeleccionada,'numeros');
            res.send(empresaSeleccionada);
        })
    });

});


router.post('/empresasSinAprobar', function (req, res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let estado = 'pendiente';
    coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
        let idCarrera = carreraCoordinador[0]['carrera'];

        coordinador.obtenerEmpresas(idCarrera, estado).then(function (listaEmpresas) {
            console.log(listaEmpresas);
            listaEmpresas = sacarRepetidosLista(listaEmpresas,'correos');
            listaEmpresas = sacarRepetidosLista(listaEmpresas,'numeros')
            res.send(listaEmpresas);
        })
    });
});

router.post('/empresasAprobadas', function (req, res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let estado = 'aprobado';
    coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
        let idCarrera = carreraCoordinador[0]['carrera'];

        coordinador.obtenerEmpresas(idCarrera, estado).then(function (listaEmpresas) {
            listaEmpresas = sacarRepetidosLista(listaEmpresas,'correos');
            listaEmpresas = sacarRepetidosLista(listaEmpresas,'numeros')
            res.send(listaEmpresas);
        })
    });
});

router.post('/aprobarEmpresaACarrera', function (req, res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let cedulaJuridica = req.body.cedulaJuridica;
    let estado = 'aprobado';
    coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
        let idCarrera = carreraCoordinador[0]['carrera'];

        coordinador.cambiarEstadoEmpresa(cedulaJuridica, idCarrera, estado).then(function (listaEmpresas) {
            listaEmpresas = sacarRepetidosLista(listaEmpresas, 'correos');
            listaEmpresas = sacarRepetidosLista(listaEmpresas, 'numeros');
            res.send(listaEmpresas);
        });
    });
});

router.post('/crearEvento', function (req, res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let horaInicioEvento = req.body.horaInicio;
    let horaFinEvento = req.body.horaFin;
    let dia = req.body.dia;
    let tipoEvento = req.body.tipoEvento;
    let foto = req.body.foto;

    let listaActividadesEvento = [];

    let actividadesEvento = req.body.listaActividades;



    coordinador.crearEvento(horaInicioEvento, horaFinEvento, cedulaCoordinador, dia, tipoEvento,foto).then(function (evento) {
        let idEvento = evento[2][0]['@lastId'];

        for(let actividad = 0; actividad < actividadesEvento.length && actividadesEvento ; actividad++){
            let horaInicioActividad = actividadesEvento[actividad].horaInicio;
            let horaFinActividad = actividadesEvento[actividad].horaFin;
            listaActividadesEvento.push([horaInicioActividad, horaFinActividad, idEvento]);
        }

        coordinador.crearActividadAEvento(listaActividadesEvento).then(function () {
            res.send({'respuesta':''});
            coordinador.obtenerCarreraCoordinador(cedulaCoordinador).then(function (carreraCoordinador) {
                let idCarrera = carreraCoordinador[0]['carrera'];
                coordinador.obtenerCorreosParaEvento(idCarrera).then(function (listaCorreos) {
                    let listaCorreosEvento = [];
                    for (let i = 0; i<listaCorreos.length;i++ ){
                        let correo = listaCorreos[i].correoelectronico;
                        listaCorreosEvento.push(correo);
                    }
                    console.log(listaCorreosEvento);

                    new mandarCorreos(listaCorreosEvento,'Evento Tecnologico de Costa Rica','Evento de vinculacion con la empresa');

                });
            });

        })

    });

});


router.post('/obtenerEventos', function (req,res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    coordinador.obtenerEventos(cedulaCoordinador).then(function (listaEventos) {
        res.send(listaEventos);
    });
});

router.get('/obtenerTiposDeEvento', function (req, res) {
    coordinador.obtenerTiposDeEvento().then(function (tiposDeEvento) {
        res.send(tiposDeEvento);
    })
});

router.post('/agregarDocumento', function (req,res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    let archivo = req.body.archivo;
    let nombreDocumento = req.body.nombreDocumento;
    let descripcion = req.body.descripcion;
    let tipoDocumento = req.body.tipoDocumento;
    coordinador.agregarDocumento(cedulaCoordinador,archivo,nombreDocumento,descripcion,tipoDocumento).then(function () {
        res.send({'respuesta':''});
    })
});

router.post('/obtenerDocumentos',function (req,res) {
    let cedulaCoordinador = req.body.cedulaCoordinador;
    coordinador.obtenerDocumentos(cedulaCoordinador).then(function (listaDocumentos) {
        res.send(listaDocumentos);
    })
});

router.post('/eliminarDocumento', function (req, res) {
    let idDocumento = req.body.idDocumento;
    coordinador.eliminarDocumento(idDocumento).then(function () {
        res.send({'respuesta': ''});
    })
});


function sacarRepetidosLista(listaPersonas, elementoConRepetidos){
    for (let i = 0; i < listaPersonas.length; i++){
        let listaCorreos = listaPersonas[i][elementoConRepetidos].split(',');
        let correosSinRepetidos = new Set(listaCorreos); //un set no puede tener elementos repetidos
        let arregloCorreosSinRepetidos = Array.from(correosSinRepetidos); //se necesiat convertir otra vez a arreglo ya que un json no puede contener un set
        listaPersonas[i][elementoConRepetidos] = arregloCorreosSinRepetidos;
    }
    return listaPersonas;
}


module.exports = router;
