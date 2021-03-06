const db_connection = require('./db_conection.js');

exports.seleccionarUniversidades = function () {
   var query = 'SELECT u.IdUniversidad, u.NombreUniversidad FROM Universidad u';

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
};

exports.modificarUniversidad = function (universidad) {
   var query = `
   UPDATE Universidad 
   SET NombreUniversidad = '${universidad.NombreUniversidad}'
   WHERE IdUniversidad = ${universidad.IdUniversidad}
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}

exports.agregarUniversidad = function (universidad) {
   var query = `
   INSERT Universidad (
      NombreUniversidad
   )
   VALUES 
      ('${universidad.NombreUniversidad}')
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}

exports.eliminarUniversidad = function (universidad) {
   var query = `
   DELETE FROM  Universidad 
   WHERE 
      Universidad.IdUniversidad = '${universidad.IdUniversidad}'
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}
