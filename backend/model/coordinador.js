const db_connection = require('./db_conection.js');


exports.obtenerEstudiantes = function (estado, cedulaCoordinador) {
    let query = 'select p.*, e.*,GROUP_CONCAT(n.numerotelefono) as numeros' +
        ',GROUP_CONCAT(c.correoElectronico) as correos ' +
        'from persona as p \n' +
        'inner join estudiante as e on e.cedula = p.cedula \n' +
        'inner join coordinadorPractica as cp on e.carrera = cp.carrera \n' +
        'inner join numeroTelefono as n on e.cedula = n.cedula \n' +
        'inner join correoElectronico  as c on c.cedula = e.cedula \n' +
        'where e.estado = \'' + estado  +'\' ' +
        'and  cp.cedula = ' + cedulaCoordinador +' group by e.cedula;';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerCarreraCoordinador = function(cedulaCoordinador){
    let query = 'select carrera \n' +
        'from coordinadorPractica \n' +
        'where cedula = ' + cedulaCoordinador +';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.eliminarEstudiante = function (cedula) {
    let query = 'delete from CorreoElectronico where cedula = '+ cedula + ';' +
        'delete from NumeroTelefono where cedula = '+ cedula + ';' +
        'delete from estudiante where cedula = '+ cedula + ';' +
        'delete from usuario where cedula = '+ cedula + ';' +
        'delete from persona where cedula = '+ cedula + ';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.cambiarEstadoEstudiante = function (cedula, estado) {
    let query = 'update estudiante \n' +
        'set estado = \''+ estado +'\' \n' +
        'where cedula = ' + cedula + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.cambiarEstadoEmpresa = function(cedulaJuridica,idCarrera,estado){
    let query = 'update empresasporcarrera\n' +
        'set estado = \'' + estado + '\'\n' +
        'where cedulaJuridicaEmpresa = ' + cedulaJuridica + ' and idCarrera =' + idCarrera +';'
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.asignarProfesorPractica = function (cedulaProfesor, cedulaEstudiante) {
    let query = 'update estudiante \n' +
        'set profesorPractica = '+ cedulaProfesor +' \n' +
        'where cedula =' + cedulaEstudiante + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.eliminarEmpresaDeCarrera = function (cedulaJuridica, idCarrera) {
    let query = 'delete from empresasporcarrera\n' +
        'where cedulajuridicaempresa =' + cedulaJuridica + ' and idCarrera = '+ idCarrera +';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerEmpresas = function (idCarrera, estado) {
    let query = 'select e.*,p.*,GROUP_CONCAT(n.numerotelefono) as numeros,GROUP_CONCAT(c.correoElectronico) as correos \n' +
        'from empresa e\n' +
        'inner join contactoempresa ce on e.cedulaJuridica = ce.empresaAsociado\n' +
        'inner join persona p on ce.cedula = p.cedula\n' +
        'inner join numeroTelefono n on p.cedula = n.cedula\n' +
        'inner join correoElectronico c on p.cedula = c.cedula\n' +
        'inner join empresasPorCarrera ep on ep.cedulaJuridicaEmpresa = e.cedulaJuridica\n' +
        'where ep.idCarrera =  + ' + idCarrera +' and ep.estado = \''  + estado + '\'\n' +
        'group by ce.cedula;';

    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.seleccionarEmpresa =  function(idCarrera, cedulaJuridica){
    let query = 'select e.*,p.*,GROUP_CONCAT(n.numerotelefono) as numeros,GROUP_CONCAT(c.correoElectronico) as correos \n' +
        'from empresa e\n' +
        'inner join contactoempresa ce on e.cedulaJuridica = ce.empresaAsociado\n' +
        'inner join persona p on ce.cedula = p.cedula\n' +
        'inner join numeroTelefono n on p.cedula = n.cedula\n' +
        'inner join correoElectronico c on p.cedula = c.cedula\n' +
        'inner join empresasPorCarrera ep on ep.cedulaJuridicaEmpresa = e.cedulaJuridica\n' +
        'where ep.idCarrera =  + ' + idCarrera +' and e.cedulaJuridica = \''  + cedulaJuridica + '\'\n' +
        'group by ce.cedula;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.crearEvento = function (horaInicio, horaFin, cedulaCoordinador, dia, tipoEvento,foto) {
    let query = 'insert into evento(horaInicio, horaFin, coordinador,dia, tipoEvento,foto) \n' +
        'values(\'' + horaInicio + '\', \' ' + horaFin + '\',' + cedulaCoordinador + ',\'' + dia + '\', ' + tipoEvento + ', ' +
        '\'' + foto + '\');' +
        'set @lastId = LAST_INSERT_ID();' +
        'select @lastId;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
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
    let query = 'select e.horaInicio,e.horaFin, ce.nombre, e.dia,e.idEvento\n' +
        'from evento as e\n' +
        'inner join catalagoevento as ce on e.tipoEvento = ce.idTipoEvento\n' +
        'inner join coordinadorpractica as c on e.Coordinador = c.cedula\n' +
        'where c.cedula = ' + cedulaCoordinador + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};


exports.agregarProfesorPractica = function (cedulaProfesor, idCarrera) {
    let query = 'insert into profesorPractica(cedula,carrera) values(' + cedulaProfesor + ',' + idCarrera + ');';

    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.seleccionarProfesorPractica = function(cedulaProfesor){
    let query = 'select p.*,GROUP_CONCAT(n.numerotelefono) as numeros,GROUP_CONCAT(c.correoElectronico) as correos\n' +
        'from persona as p\n' +
        'inner join profesorpractica as pp on p.cedula = pp.cedula\n' +
        'inner join coordinadorPractica as cp on pp.carrera = cp.carrera\n' +
        'inner join numeroTelefono as n on pp.cedula = n.cedula \n' +
        'inner join correoElectronico as c on c.cedula = pp.cedula\n' +
        'where pp.cedula = ' + cedulaProfesor + '\n' +
        'group by pp.cedula;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerProfesoresDePractica = function (cedulaCoordinador) {
    let query = 'select p.*,GROUP_CONCAT(n.numerotelefono) as numeros,GROUP_CONCAT(c.correoElectronico) as correos\n' +
        'from persona as p\n' +
        'inner join profesorpractica as pp on p.cedula = pp.cedula\n' +
        'inner join coordinadorPractica as cp on pp.carrera = cp.carrera\n' +
        'inner join numeroTelefono as n on pp.cedula = n.cedula \n' +
        'inner join correoElectronico as c on c.cedula = pp.cedula\n' +
        'where cp.cedula = ' + cedulaCoordinador + '\n' +
        'group by pp.cedula;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.eliminarProfesorPractica = function(cedulaProfesor){
    let query = 'delete from CorreoElectronico where cedula = '+ cedulaProfesor + ';' +
        'delete from NumeroTelefono where cedula = '+ cedulaProfesor + ';' +
        'delete from profesorPractica where cedula = '+ cedulaProfesor + ';' +
        'delete from persona where cedula = '+ cedulaProfesor + ';';
    console.log(query);
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerTiposDeEvento = function () {
    let query = 'select idTipoEvento, nombre from catalagoEvento;';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerDocumentos = function (cedulaCoordinador) {
    let query = 'select * from Documento where dueno = ' + cedulaCoordinador + ';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.agregarDocumento = function (cedulaCoordinador, documento, nombreDocumento,descripcion ) {
    let query = 'insert into documento(nombreDocumento,dueno,archivo,descripcion) ' +
        'values(\'' + nombreDocumento + '\',' + cedulaCoordinador + ',\'' + documento + '\',\'' + descripcion + '\');';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.eliminarDocumento = function (idDocumento) {
    let query = 'delete from documento where idDocumento = ' + idDocumento +';';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerCorreosParaEvento = function (idCarrera) {
    let query = 'select c.correoelectronico\n' +
        'from correoelectronico c\n' +
        'where c.cedula in (select p.cedula \n' +
        'from persona p\n' +
        'inner join contactoempresa cp on p.cedula = cp.cedula\n' +
        'inner join empresa e on e.cedulaJuridica = cp.empresaAsociado\n' +
        'inner join empresasporcarrera ec on e.cedulaJuridica = ec.cedulaJuridicaEmpresa\n' +
        'where ec.idCarrera = ' + idCarrera + ') or c.cedula in (select p.cedula \n' +
        'from persona p \n' +
        'inner join estudiante e on e.cedula = p.cedula\n' +
        'where e.carrera = ' + idCarrera + ');';
    return new Promise(function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerCoordinadores = function () {
   let query = `
      SELECT * FROM Persona WHERE TipoPersona = 1;
   `
   return new Promise(function (resolve, reject) {
      db_connection.query(query, function (err, result) {
         if (err) {
            reject(err);
         }
         resolve(result);
      });
   });
}
