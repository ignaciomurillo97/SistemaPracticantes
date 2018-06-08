const db_connection = require('./db_conection.js');

exports.seleccionarSede = function (i) {
   var query = `
      SELECT 
         s.NombreSede, 
         s.IdSede,
         s.Ubicación as 'Ubicacion'
      FROM 
         Sede s
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

exports.modificarSede = function (sede) {
   var query = `
   UPDATE Sede 
   SET  
      NombreSede = '${sede.NombreSede}',
      Ubicación = '${sede.Ubicacion}'
   WHERE IdSede = ${sede.IdSede}
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}

exports.agregarSede = function (sede) {
   var query = `
   INSERT INTO Sede (
      NombreSede,
      Ubicación,
      IdUniversidad
   ) VALUES (
      '${sede.NombreSede}',
      '${sede.Ubicacion}',
      '${sede.IdUniversidad}'
   )
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}

exports.eliminarSede = function (idSede) {
   var query = `
      DELETE FROM Sede
      WHERE IdSede = ${idSede}
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   });
}
