var express = require('express');
var router = express.Router();
const productContoller = require('../controllers/productocontroller');

router.get('/', productContoller.product);


module.exports = router;

