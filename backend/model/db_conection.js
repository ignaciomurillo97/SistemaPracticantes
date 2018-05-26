const mysql = require('mysql');

var db_config = {
   host: "localhost",
   user: "root",
   database: "SistemaPracticantes",
   password: "hola"
}

var pool = mysql.createPool(db_config);

pool.getConnection(function(err, connection) {
   if (err){
      throw err;
   }
   console.log("Conectado a la DB");
})

module.exports = pool;
