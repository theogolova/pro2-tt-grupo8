var express = require('express');
var router = express.Router();
const productContoller = require('../controllers/productocontroller');
const { body } = require('express-validator');

let validacion = [
    body('nombreProd')
        .notEmpty().withMessage('El producto debe tener un nombre'),
    body('descripcion')
        .notEmpty().withMessage('Debes agregar una descripción'),
    body('imagenProd')
        .notEmpty().withMessage('Debes agregar una imagen').bail()
        .isURL().withMessage('La URL de la imagen no es valida')
]
let validacionComentario = [
    body('comentario')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min: 4}).withMessage("El comentario tiene que tener 4 caracteres como minimo")
]



router.get('/id/:id', productContoller.product);
router.post('/id/:id',validacionComentario, productContoller.comment);


router.get('/add', productContoller.create);
router.post('/add',validacion, productContoller.store);

router.post('/editProduct', productContoller.formUpdate);
router.post('/edit',validacion, productContoller.update);

router.post('/delete', productContoller.delete);

module.exports = router;

