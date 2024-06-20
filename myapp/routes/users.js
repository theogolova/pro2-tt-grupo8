var express = require('express');
var router = express.Router();
const {body} = require("express-validator");
const perfilController = require('../controllers/perfilcontrollers');
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session')


//validaciones
let validation = [
    body('email')
    .notEmpty().withMessage('El campo Mail es obligatorio.').bail()
    .isEmail().withMessage('Debe ser un email valido').bail()
    .custom(function(value){
        return db.Usuario.findOne({where: { mail: value }})
              .then(function(user){
                    if(user == undefined){ 
                        return true;
                    }
                    else{
                        throw new Error ('El email ya existe')
                    }
              })
    }),

    
    body('username')
    .notEmpty().withMessage('Por favor, introduzca un nombre de usuario'),
    
    body('password')
    .notEmpty().withMessage('El campo Contraseña es obligatorio.').bail()
    .isLength({ min: 4 }).withMessage('La contraseña debe tener más de 4 caracteres')
]

router.get('/login', perfilController.login);
router.post("/login", perfilController.loginUser);

router.get('/register', perfilController.register);
router.post('/register', validation, perfilController.store);

router.get('/profile', perfilController.profile);

router.get('/edit', perfilController.edit);
router.post('/edit', perfilController.update); 

router.post('/logout', perfilController.logout);

module.exports = router;
