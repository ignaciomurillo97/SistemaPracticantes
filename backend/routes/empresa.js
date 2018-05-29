var express = require('express');
var router = express.Router();

let empresa = require('../model/empresa.js');

// Rutas de la API

// Ejemplo:
router.get ('/', function(req, res, next) {
   res.send('Hello World!');
});

router.post('/solicitudEmpresaACarrera', function (req, res) {
    let cedulaJuridica = req.body.cedulaJuridica;
    let idCarrera = req.body.idCarrera;
    let estado = 'pendiente';
    empresa.solicitudEmpresa(cedulaJuridica,idCarrera, estado).then(function () {
        res.send('Se mando la solicitud')
    })
});

module.exports = router;
