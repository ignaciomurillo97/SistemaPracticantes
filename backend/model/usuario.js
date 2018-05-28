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

exports.agregarPersona = function(cedula,nombre,segundoNombre,
                                  apellido,segundoApellido,
                                  sexo, tipoPersona){
    let query = 'insert into persona(cedula,nombre,segundoNombre,apellido,segundoapellido,sexo,tipopersona) \n' +
        'values(' + cedula + ',\'' + nombre + '\',\'' + segundoNombre + '\',\'' + apellido + '\',\'' + segundoApellido
        + '\',\'' + sexo + '\',' + tipoPersona + ')';
    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })

};

exports.verificarCedula = function(cedula) {
    let query = 'select cedula from persona where cedula = ' + cedula;
    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};

exports.agregarUsuario = function (nombreUsuario, contrasena, cedula) {
    let query = 'insert into Usuario(nombreusuario,contraseña,cedula) values('+ '\'' + nombreUsuario + '\',\'' + contrasena + '\',' + cedula +')';
    console.log(query);
    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};

exports.verificarNombreUsuario = function (nombreUsuario) {
    let query = 'select nombreUsuario from usuario where nombreUsuario = \'' + nombreUsuario + '\' ' ;
    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};

exports.agregarNumerosContacto = function (numerosContacto) {
    let query = 'insert into NumeroTelefono(numeroTelefono,cedula) values ?';
    return new Promise (function (resolve, reject) {
        db_connection.query(query, [numerosContacto], function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};

exports.agregarCorreosContacto = function (correosContacto) {
    let query = 'insert into CorreoElectronico(correoElectronico,cedula) values ?';
    return new Promise (function (resolve, reject) {
        db_connection.query(query, [correosContacto], function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};
