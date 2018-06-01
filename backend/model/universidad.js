const db_connection = require('./db_conection.js');

exports.seleccionarUniversidades = function () {;
   var query = 'SELECT u.IdUniversidad, u.NombreUniversidad FROM Universidad u';

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
};
