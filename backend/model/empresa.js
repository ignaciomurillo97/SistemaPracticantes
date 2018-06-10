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
