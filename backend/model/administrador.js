const db_connection = require('./db_conection.js');

exports.seleccionarCoordinador = function () {
  var query = `
  SELECT 
  u.NombreUniversidad, 
    s.NombreSede, 
    c.NombreCarrera, 
    s.Ubicación, 
    p.Cedula, 
    p.Nombre, 
    p.SegundoNombre, 
    p.Apellido, 
    p.SegundoApellido, 
    p.Sexo, 
    p.TipoPersona,
    s.IdSede,
    c.IdCarrera,
    u.IdUniversidad
  FROM 
    universidad u inner join 
    sede s on u.IdUniversidad = s.IdUniversidad inner join 
    carrera c on c.IdSede = s.Idsede inner join 
    coordinadorpractica cp on cp.Carrera = c.IdCarrera inner join 
    Persona p on p.Cedula = cp.Cedula
  WHERE
    p.TipoPersona = 1
  `

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.modificarCoordinadorPersona = function(coordinador) {
  var query = `
  UPDATE Persona
  SET
    Nombre = '${coordinador.Nombre}',
    SegundoNombre = '${coordinador.SegundoNombre}',
    Apellido = '${coordinador.Apellido}',
    SegundoApellido = '${coordinador.SegundoApellido}',
    Sexo = '${administrador.Sexo}'
  WHERE
    Cedula = ${coordinador.Cedula};
  `

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.modificarCoordinadorCarrera = function(coordinador) {
  var query = `
  UPDATE CoordinadorPractica
  SET Carrera = ${coordinador.IdCarrera}
  WHERE Cedula = ${coordinador.Cedula};
  `
  console.log(query);

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.seleccionarAdministrador = function () {
  var query = `
  SELECT 
  p.Cedula, 
    p.Nombre,
    p.SegundoNombre,
    p.Apellido,
    p.SegundoApellido,
    p.Sexo
  FROM 
  Persona p 
  WHERE p.TipoPersona = 3
  `

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.modificarAdministrador = function(administrador) {
  var query = `
  UPDATE Persona
  SET
  Nombre = '${administrador.Nombre}',
    SegundoNombre = '${administrador.SegundoNombre}',
    Apellido = '${administrador.Apellido}',
    SegundoApellido = '${administrador.SegundoApellido}',
    Sexo = '${administrador.Sexo}'
  WHERE
  Cedula = ${administrador.Cedula}
  `
  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.agregarAdministrador = function(administrador) {
  var query = `
  INSERT INTO Persona
  (
    Cedula, 
    Nombre,
    SegundoNombre,
    Apellido,
    SegundoApellido,
    Sexo,
    TipoPersona
  ) VALUES (
    '${administrador.Cedula}', 
    '${administrador.Nombre}',
    '${administrador.SegundoNombre}',
    '${administrador.Apellido}',
    '${administrador.SegundoApellido}',
    '${administrador.Sexo}',
    3
  )
  `

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.seleccionarCorreos = function(cedula) {
  var query = `
  SELECT
  c.CorreoElectronico
  FROM 
  CorreoElectronico c
  WHERE
  c.Cedula = ${cedula}
  `;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.agregarCorreo = function(cedula, correo) {
  var query = `
  INSERT INTO
  CorreoElectronico (
    CorreoElectronico,
    Cedula
  )
  VALUES (
    '${correo.CorreoElectronico}',
    '${cedula}'
  )
  `;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.agregarTelefono = function(cedula, telefono) {
  var query = `
  INSERT INTO
  NumeroTelefono (
    NumeroTelefono,
    Cedula
  )
  VALUES (
    '${telefono.NumeroTelefono}',
    '${cedula}'
  )
  `;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

exports.seleccionarTelefonos = function(cedula) {
  var query = `
  SELECT
  n.NumeroTelefono
  FROM 
  NumeroTelefono n
  WHERE
  n.Cedula = ${cedula}
  `;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
