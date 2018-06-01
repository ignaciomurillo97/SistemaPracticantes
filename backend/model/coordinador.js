const db_connection = require('./db_conection.js');


exports.obtenerEstudiantes = function (estado, idCarrera) {
    let query = 'select * from persona\n' +
        'inner join estudiante on estudiante.cedula = persona.cedula \n' +
        'where estudiante.estado = \'' + estado  +'\' and carrera = ' + idCarrera + ';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.eliminarEstudiante = function (cedula) {
    let query = 'delete from CorreoElectronico where cedula = '+ cedula + ';' +
        'delete from NumeroTelefono where cedula = '+ cedula + ';' +
        'delete from estudiante where cedula = '+ cedula + ';' +
        'delete from usuario where cedula = '+ cedula + ';' +
        'delete from persona where cedula = '+ cedula + ';';
    console.log(query);
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.cambiarEstadoEstudiante = function (cedula, estado) {
    let query = 'update estudiante \n' +
        'set estado = \''+ estado +'\' \n' +
        'where cedula =' + cedula + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.asignarProfesorPractica = function (cedulaProfesor, cedulaEstudiante) {
    let query = 'update estudiante \n' +
        'set profesorPractica = '+ cedulaProfesor +' \n' +
        'where cedula =' + cedulaEstudiante + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.eliminarEmpresaDeCarrera = function (cedulaJuridica, idCarrera) {
    let query = 'delete from empresasporcarrera\n' +
        'where cedulajuridicaempresa =' + cedulaJuridica + ' and idCarrera = '+ idCarrera +';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerEmpresas = function (idCarrera, estado) {
    let query = 'select * from empresa \n' +
        'inner join contactoempresa on empresa.cedulaJuridica = contactoempresa.empresaAsociado \n' +
        'inner join persona on contactoempresa.cedula = persona.cedula\n' +
        'inner join empresasPorCarrera on empresasPorCarrera.cedulaJuridicaEmpresa = empresa.cedulaJuridica \n' +
        'where empresasPorCarrera.idCarrera = ' + idCarrera + ' and empresasPorCarrera.estado = \''+ estado +'\';';

    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.crearEvento = function (horaInicio, horaFin, cedulaCoordinador, dia, tipoEvento) {
    let query = 'insert into evento(horaInicio, horaFin, coordinador,dia, tipoEvento) \n' +
        'values(\'' + horaInicio + '\', \' ' + horaFin + '\',' + cedulaCoordinador + ',\'' + dia + '\', +' + tipoEvento + ' );' +
        'set @lastId = LAST_INSERT_ID();' +
        'select @lastId;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.crearActividadAEvento = function (listaDeActividadesPorEvento) {
    let query = 'insert into actividadesPorEvento(horaInicio, horaFin, Evento) values ? ;';
    return new Promise (function (resolve, reject) {
        db_connection.query(query, [listaDeActividadesPorEvento], function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    });
};


exports.obtenerEventos = function (cedulaCoordinador) {
    let query = 'select e.horaInicio,e.horaFin, ce.nombre, e.dia\n' +
        'from evento as e\n' +
        'inner join catalagoevento as ce on e.tipoEvento = ce.idTipoEvento\n' +
        'inner join coordinadorpractica as c on e.Coordinador = c.cedula\n' +
        'where c.cedula = ' + cedulaCoordinador + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });

};

