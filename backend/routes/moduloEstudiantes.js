let express = require('express');
let router = express.Router();

let evento = require('../model/evento.js')

router.route('/')
.get(function(req, res, next) {
  evento.seleccionarEventos().then(function (dbResponse) {
    res.setHeader('Content-Type', 'application/json');
    res.send(dbResponse);
  })
})

module.exports = router;
