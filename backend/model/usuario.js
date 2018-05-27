const db_connection = require('./db_conection.js');

exports.selectTest = function () {
   var query = "SELECT * FROM Persona";
   return new Promise(function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
};

exports.autenticar = function (nombreUsuario, contrasena) {
   var query = "SELECT * FROM Usuario WHERE NombreUsuario = '" + nombreUsuario + "' AND Contraseña = '" + contrasena + "'"; 
   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
};

exports.agregarUsuario = function (nombreUsuario, contrasena) {
    // let query =
};
