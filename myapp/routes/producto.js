var express = require('express');
var router = express.Router();
const productContoller = require('../controllers/productocontroller');
const { body } = require('express-validator');

let validacion = [
    body('nombreProd')
        .notEmpty().withMessage('El campo Nombre del Producto es obligatorio.'),
    body('descripcion')
        .notEmpty().withMessage('El campo Descripción es obligatorio.'),
    body('imagenProd')
        .notEmpty().withMessage('El campo Imagen es obligatorio.').bail()
        .isURL().withMessage('El campo Imagen debe ser una URL válida.')
]
let validacionComentario = [
    body('comentario')
        .notEmpty().withMessage('Este campo no puede estar vacio.').bail()
        .isLength({min: 4}).withMessage("Debes usar al menos 3 caracteres")
]



router.get('/id/:id', productContoller.product);
router.post('/id/:id',validacionComentario, productContoller.comment);


router.get('/add', productContoller.create);
router.post('/add',validacion, productContoller.store);

router.post('/editProduct', productContoller.formUpdate);
router.post('/edit',validacion, productContoller.update);

router.post('/delete', productContoller.delete);

module.exports = router;

