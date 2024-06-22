var express = require('express');
var router = express.Router();
const {body} = require("express-validator");
const perfilController = require('../controllers/perfilcontrollers');
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session')


//validaciones
let validacionLogin = [
    body('email')
        .notEmpty().withMessage('Debes colocar un email').bail()
        .isEmail().withMessage('El email debe ser correcto').bail()
        .custom(function(value, {req}){
            return db.Usuario.findOne({where: { mail: req.body.email },})
                  .then(function(user){
                        if(user != undefined){ 
                            return true;
                        }
                        else{
                            throw new Error ('El email no existe')
                        }
                  })
       }),

    body('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .custom(function(value, {req}){

            return db.Usuario.findOne({where: { mail: req.body.email },})
                  .then(function(result){
                        if(result != undefined){ 

                            let check = bcrypt.compareSync(req.body.password, result.contrasenia);
                            if(!check){
                                throw new Error ('Contraseña incorrecta')
                            }
                        }
                        else{
                            throw new Error ('Debes registrarte')
                        }
                  })

        })
]
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
let validationsEdit = [
    body('mail')
    .notEmpty().withMessage('Debes completar el mail').bail()
    .isEmail().withMessage('El mail no es valido').bail(),
    body('usuario')
    .notEmpty().withMessage('Debes colocar un nombre de usuario'),
    
    body('contrasenia')
    .notEmpty().withMessage('Completar contraseña').bail()
    .isLength({ min: 4 }).withMessage('La contraseña debe tener más de 4 caracteres')
]


router.get('/login', perfilController.login);
router.post("/login", validacionLogin, perfilController.loginUser);

router.get('/register', perfilController.register);
router.post('/register', validation, perfilController.store);

router.get('/profile/id/:id', perfilController.profile);

router.get('/edit', perfilController.edit);
router.post('/edit', validationsEdit, perfilController.update); 

router.post('/logout', perfilController.logout);

module.exports = router;
