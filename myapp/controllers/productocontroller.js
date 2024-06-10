const db = require("../database/models")
const op = db.Sequelize.Op;
let id;

const productContoller = {
    product: function (req, res) {
        let id = req.params.id;

        let criterio = {
            include: [
                {association: "usuario"},
                {
                    association: "comentarios",
                    include: [{association: "usuario"}]
                }
            ]
        };

        db.Product.findByPk(id, criterio)
        .then(function(results){
            return res.render('product', {
                title: "Product",
                usuario: req.session.user || req.cookies.userId,
                productos: results,
                comentarios: results.comentarios
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    create: function(req, res) {
        if (req.session.user != undefined) {
            id = req.session.user.id;
        } else if (req.cookies.userId != undefined) {
            id = req.cookies.userId;
        } else {
            return res.redirect("/users/login");
        }

        db.Usuario.findByPk(id)
            .then(function(results){
                return res.render('product-add', {
                    title: "Add Product",
                    usuario: results
                });
            })
            .catch(function(error){
                console.log(error);
            });
    },

    store: function(req, res) {
        let form = req.body;
        db.Product.create(form)
        .then((result) => {
            return res.redirect("/product/id/" + result.id);
        }).catch((err) => {
            return console.log(err);
        });
    },

    formUpdate: function(req, res) {
        let id = req.params.id;  // assuming you're passing the product ID as a route parameter
        db.Product.findByPk(id)
        .then(function(results){
            return res.render('product-edit', {
                title: "Product Edit",
                productos: results,
                usuario: req.session.user || req.cookies.userId
            });
        })
        .catch((err) => {
            return console.log(err);
        });
    },

    update: function(req, res) {
        let form = req.body;
        let filtrado = {
            where: {
                id: form.id
            }
        } 

        db.Product.update(form, filtrado)
        .then((result) => {
            return res.redirect("/product/id/" + form.id);
        }).catch((err) => {
            return console.log(err);
        });
    },

    destroy: function(req, res) {
        let form = req.body;
        
        let filtrado = {
            where: {
                id: form.id
            }
        }

        db.Product.destroy(filtrado)
        .then((result) => {
            return res.redirect("/");
        }).catch((err) => {
            return console.log(err);
        });
    }
}

module.exports = productContoller;
