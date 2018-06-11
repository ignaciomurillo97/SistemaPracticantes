const db_connection = require('./db_conection.js');


exports.solicitudEmpresa = function (cedulaJuridica, idCarrera, estado) {
  let query = 'insert into empresasporcarrera(cedulajuridicaempresa,idcarrera,estado) \n' +
      'values (' + cedulaJuridica + ','+ idCarrera + ',\'' + estado + '\');';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.verificarCedulaJuridica = function (cedulaJuridica) {
    let query = 'select cedulaJuridica from Empresa where cedulaJuridica = ' + cedulaJuridica;
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.agregarEmpresa = function (nombreEmpresa, cedulaJuridica) {
    let query = 'insert into Empresa(nombreEmpresa,cedulaJuridica) values(\'' + nombreEmpresa + '\',' + cedulaJuridica+');';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.agregarContactoEmpresa = function (cedula,empresaAsociado) {
    let query = 'insert into ContactOEmpresa(cedula,empresaAsociado) values(\'' + cedula + '\',' + empresaAsociado+');';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerEventosEmpresa = function (cedulaJuridicaEmpresa) {
    let query ='select ev.*, s.NombreSede,ca.NombreCarrera, u.NombreUniversidad\n' +
        'from evento ev\n' +
        'inner join coordinadorpractica c on ev.coordinador = c.cedula\n' +
        'inner join empresasPorCarrera ep on ep.idCarrera = c.carrera\n' +
        'inner join carrera ca on ca.idcarrera = c.carrera\n' +
        'inner join sede s on ca.idsede =  s.idsede\n' +
        'inner join universidad u on u.iduniversidad =  s.iduniversidad\n' +
        'where ep.estado = \'aprobado\' and ep.cedulajuridicaempresa = ' + cedulaJuridicaEmpresa +'\n' +
        ';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerCedulaJuridicaEmpresa = function (cedulaContactoEmpresa) {
    let query = 'select empresaAsociado\n' +
        'from contactoEmpresa\n' +
        'where cedula = '+ cedulaContactoEmpresa + ';\n';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });

};

exports.seleccionarEvento = function (idEvento) {
    let query = 'select e.*, ce.nombre\n' +
        'from evento e\n' +
        'inner join catalagoEvento ce on ce.idTipoEvento = e.tipoEvento\n' +
        'where e.idevento = '+ idEvento +';\n'
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.seleccionarActividadesPorEvento = function (idEvento) {
    let query = 'select ap.*,e.nombreEmpresa\n' +
        'from actividadesPorEvento ap\n' +
        'left join empresa e on ap.empresa = e.cedulaJuridica\n' +
        'where ap.evento = '+ idEvento +';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerCarrerasAsociadas = function (cedulaJuridica) {
    let query = 'select * from empresasporCarrera ce ' +
        'inner join carrera ca on ce.idcarrera = ca.idcarrera\n' +
        'inner join sede s on ca.idsede =  s.idsede\n' +
        'inner join universidad u on u.iduniversidad =  s.iduniversidad\n' +
        'where cedulaJuridicaEmpresa = ' + cedulaJuridica +';';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.obtenerDocumentos = function () {
    let query = 'select * from documento where tipoDocumento = "empresa"';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};