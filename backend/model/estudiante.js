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

exports.obtenerCarreras = function (idUniversidad, idSede) {
    let query = 'select * from carrera where idUniversidad = ' + idUniversidad + 'and idsede = ' + idSede;
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

exports.agregarEstudiante = function (cedula, universidad, escuela, sede, carrera, carne, estado) {
    let query = 'insert into estudiante(universidad,escuela,sede,carrera,cedula,carne,estado) values('
        + universidad + ',' + escuela + ',' + sede + ',' + carrera + ',' + cedula  + ',' + carne + ',\'' + estado + ',\')';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
};