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
   var query = `SELECT `+
   `u.NombreUsuario, `+
   `u.Contraseña, `+
   `tp.Tipo ` +
   `FROM Usuario u inner join `+
   `Persona p on p.Cedula = u.Cedula inner join ` +
   `TipoPersona tp on tp.IdTipoPersona = p.TipoPersona ` +
   `where NombreUsuario = '${nombreUsuario}' AND `+
   `Contraseña = '${contrasena}'`

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}
