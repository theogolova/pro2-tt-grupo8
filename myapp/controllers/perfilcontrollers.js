const zapatillas = require('../db/data')
const zapas = require("../db/data")
const usuario = zapatillas.usuario;
const bcrypt = require("bcryptjs")

const perfilContoller = {
    profile: function (req, res, next) {
        let idUsuario = req.params.id
        let nombreZapa = [];
        let descripcionZapa = [];
        let comentarios = [];
        let imagenes = [];
        let id = [];
        for (let i = 0; i < zapatillas.productos.length; i++) {
            nombreZapa.push(zapatillas.productos[i].nombre);
            descripcionZapa.push(zapatillas.productos[i].descripcion);
            comentarios.push(zapatillas.productos[i].comentarios);
            imagenes.push(zapatillas.productos[i].imagen);
            id.push(zapatillas.productos[i].id);
        }
        res.render("profile", {
            title: nombreZapa,
            descripcion: descripcionZapa,
            comentarios: comentarios,
            imagen: imagenes,
            id: id,
            usuario: usuario,
        });
    },
    edit: function(req, res, next) {
        res.render("profileEdit", {title: "Profile Edit", usuario: zapatillas.usuario});
    },
    login: function(req, res, next){
        res.render("login", {title: "Login"});
    },
    loginUser: (req, res) => {
        let form = req.body;
    
        let filtro = {
            where: { email: form.email }
        };
    
        db.user.findOne(filtro)
            .then((result) => {
                if (result != null) {
                    /* return res.send({contrasenia: form.password, hasheada: result.password}) */
                    let check = bvrypt.compareSync(form.password, result.password);

                    if (check) {
                     req.session.user = result;
                    

                    if (form.rememberme !== undefined) {
                    res.cookie("userId", result.id, { maxAge: 1000 * 60 * 35 });
                }
    
                return res.redirect("/index");
            } else {
                return res.send("No hay emails parecidos a : " + form.email);
            } }
            
        }).catch((err) => {
                console.log(err);
        });
    },
    

    register: function(req, res, next){
        res.render("register", {title:"Register"});
    },
    
    logout: (req,res) => {
        req.session.destroy();
        return res.redirect("/")
    },

    store: (req,res) => {
        let form = req.body;

        let usuario = {
            name: form.name,
            email: form.email,
            password: bycrpt.hashSync(form.password, 10),
        }
    }
}; 

module.exports = perfilContoller;
