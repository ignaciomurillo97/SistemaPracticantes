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
