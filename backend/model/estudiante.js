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

exports.agregarEstudiante = function (cedula, carrera, carne, estado, foto) {
    let query = 'insert into estudiante(carrera,cedula,carne,estado,foto) values('
        + carrera + ',' + cedula  + ',' + carne + ',\'' + estado + '\',\'' + foto +'\')';
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.seleccionarEstudiante = function (cedulaEstudiante) {
    let query = 'select p.*,e.*,GROUP_CONCAT(n.numerotelefono) as numeros,GROUP_CONCAT(c.correoElectronico) as correos\n ' +
        'from estudiante e \n' +
        'inner join persona p on e.cedula = p.cedula \n' +
        'inner join numeroTelefono as n on p.cedula = n.cedula \n' +
        'inner join correoElectronico as c on c.cedula = p.cedula\n' +
        'where e.cedula = ' + cedulaEstudiante + ' ' +
        'group by p.cedula;';
    console.log(query);
    return new Promise( function (resolve, reject) {
        db_connection.query(query, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};