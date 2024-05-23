const db = require("../database/models")

const productContoller ={
    product: function (req, res) {
        let Id = req.params.id

        let comentarios;

        let productos;

        db.Product.findByPk(Id)
        .then(function(results){
            productos = results;
            return db.Comentario.findAll({
                limit:5
            });
        })
        .then(function (results) {
            comentarios = results;
            return res.render("product", {productos: productos, comentarios: comentarios})
        })
        .catch(function (error) {
            console.log(error);
        })

    },
    cargarProducto: function (req, res) {
        db.Usuario.findOne()
        .then(function (results) {
            res.render('productAdd', { usuario: results });
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }
}

module.exports = productContoller;