var express = require('express');
var router = express.Router();
const perfilController = require('../controllers/perfilcontrollers');

router.get('/perfil', perfilController.profile);
router.get('/edit', perfilController.edit);
router.get('/login', perfilController.login);
router.get('/loginUser', perfilController.loginUser);
router.get('/register', perfilController.register);



module.exports = router;
