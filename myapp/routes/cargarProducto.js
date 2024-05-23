var express = require('express');
var router = express.Router();
const productContoller = require('../controllers/productocontroller');

router.get('/cargarproductos', productContoller.cargarProducto);

module.exports = router;
