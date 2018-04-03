const mysql = require('mysql');

var con = mysql.createConnection ({
   host: "localhost",
   user: "root",
   database: "SistemaPracticantes",
   password: "hola"
});

con.connect(function(err){
   if (err) {
      throw err;
   }
   console.log("conectado a la BD");
});

exports.selectTest = function (callback) {
   var query = "SELECT * FROM test";
   return new Promise(function (resolve, reject) {
      con.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
};

