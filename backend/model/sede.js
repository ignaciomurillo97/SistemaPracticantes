const db_connection = require('./db_conection.js');

exports.seleccionarSede = function (i) {
   var query = `
      SELECT 
         s.NombreSede, 
         s.IdSede,
         s.Ubicación as 'Ubicacion',
         u.NombreUniversidad 
      FROM 
         Sede s INNER JOIN 
         Universidad u ON u.IdUniversidad = s.IdUniversidad 
      WHERE 
         s.IdUniversidad = ${i};
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}
