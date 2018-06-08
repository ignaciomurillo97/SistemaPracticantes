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

exports.eliminarCarrera = function (idCarrera) {
   if (!idCarrera) {
      console.log('No hay id carrera, el query es peligroso');
      return;
   }
   var query = `
   DELETE FROM Carrera
   where IdCarrera = ${idCarrera};
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}

exports.agregarCarrera = function (idSede, nombreCarrera) {
   var query = `
   INSERT INTO Carrera (
     idSede,
     NombreCarrera
   ) VALUES (
     ${idSede},
     '${nombreCarrera}'
   );
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}
