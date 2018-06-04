const db_connection = require('./db_conection.js');

exports.seleccionarCarrera = function (i) {
   var query = `
   SELECT c.IdCarrera, c.NombreCarrera
   FROM carrera c
   INNER JOIN sede s
   on c.IdSede = s.IdSede 
   WHERE s.IdSede = ${i};
   `
   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}

exports.modificarCarrera = function (carrera) {
   console.log(carrera);
   if (!carrera.IdCarrera) {
      console.log('No hay id carrera, el query es peligroso');
      return;
   }
   var query = `
   UPDATE Carrera
   set NombreCarrera = '${carrera.NombreCarrera}'
   where IdCarrera = ${carrera.IdCarrera};
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}
