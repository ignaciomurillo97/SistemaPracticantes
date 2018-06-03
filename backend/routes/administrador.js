var express = require('express');
var router = express.Router();

// Rutas de la API

// Ejemplo:
router.get ('/Tmp', function(req, res, next) {
   if (req.session.views) {
      req.session.views ++;
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: '+req.session.views+'</p>');
      //res.write('<p>expires in: '+req.session.cookie.maxAge/1000+'</p>');
      res.end();
   } else {
      req.session.views = 1;
      res.end('Bienvenido al sitio!');
   }
})

module.exports = router;
