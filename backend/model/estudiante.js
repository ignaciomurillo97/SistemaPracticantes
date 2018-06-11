const db_connection = require('./db_conection.js');

exports.obtenerUniversidades = function () {
    let query = 'select * from universidad';
    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
};

exports.obtenerSedes = function (idUniversidad) {
    let query = 'select * from sede where idUniversidad = ' + idUniversidad;
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerEscuelas = function (idUniversidad) {
    let query = 'select * from escuela where idUniversidad = ' + idUniversidad;
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerCarreras = function (idSede) {
    let query = 'select * from carrera where idsede = ' + idSede;
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.verificarCarne = function (carne) {
    let query = 'select carne from Estudiante where carne = ' + carne;
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.agregarEstudiante = function (cedula, carrera, carne, estado) {
    let query = 'insert into estudiante(carrera,cedula,carne,estado) values('
        + carrera + ',' + cedula  + ',' + carne + ',\'' + estado + '\')';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};

exports.obtenerEstudiante = function (cedula) {
  let query = `
    SELECT * 
    FROM Persona p
    INNER JOIN Estudiante e
    ON p.Cedula = e.Cedula;
  ` 

  return new Promise( function (resolve, reject) {
    db_connection.query(query, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

exports.modificarEstudiante = function (estudiante) {
  var query = `
  UPDATE Persona
  SET
    Nombre = '${estudiante.Nombre}',
    SegundoNombre = '${estudiante.SegundoNombre}',
    Apellido = '${estudiante.Apellido}',
    SegundoApellido = '${estudiante.SegundoApellido}',
    Sexo = '${estudiante.Sexo}'
  WHERE
    Cedula = ${estudiante.Cedula};
  `

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.agregarEvaluacion = function (encuesta, cedulaEstudiante, cedulaCoordinador) {
   var query = `
   INSERT INTO evaluacioncoordinador (
      CedulaEstudiante,
      CedulaCoordinador,
      JSONEvaluacion
   ) VALUES ( 
      ${cedulaEstudiante},
      ${cedulaCoordinador},
      ${encuesta.JSON.stringify()}
   )
   `
  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
