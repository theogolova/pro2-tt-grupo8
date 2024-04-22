var express = require('express');
var router = express.Router();
const productContoller = require('../controllers/productoController');

router.get('/', productContoller.cargarProducto);

module.exports = router;
