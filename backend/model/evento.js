const db_connection = require('./db_conection.js');

exports.seleccionarEventos = function() {
  var query = `
  SELECT e.*, c.Nombre, c.Descripcion
  FROM evento e INNER JOIN
    catalagoevento c ON 
    e.TipoEvento = c.IdTipoEvento;
  `
  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
