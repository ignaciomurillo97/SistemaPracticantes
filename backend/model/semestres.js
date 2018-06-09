const db_connection = require('./db_conection.js');

exports.seleccionarSemestre = function (i) {
   var query = `
      SELECT 
         s.idSemestre,
         s.numeroSemestre,
         s.ano
      FROM 
         Semestre s
   `

   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
}

exports.editarSemestre = function(semestre) {
  var query = `
  UPDATE Semestre
  SET 
    NumeroSemestre = '${semestre.numeroSemestre}',
    Ano = '${semestre.ano}'
  WHERE
    idSemestre = ${semestre.idSemestre}
  `
  console.log(query);

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.agregarSemestre = function(numeroSemestre, ano) {
  var query = `
  INSERT INTO Semestre (
    numeroSemestre,
    ano
  ) VALUES (
    ${numeroSemestre},
    ${ano}
  )
  `
  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
