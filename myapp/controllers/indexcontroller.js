const db = require("../database/models")

const indexController = {
    index: function (req, res) {
       
        db.Product.findAll()
        .then(function (results) {

            return res.render("index", {productos: results})
    
        })
        .catch(function (error) {
            console.log(error);
        });


         /*let nombreZapa = []
        let descripcionZapa = []
        let comentarios = []
        let imagenes = []
        let id = []
        for (let i = 0; i < db.Product.length; i++) {
            nombreZapa.push(db.Product[i].nombre_prod)
            descripcionZapa.push(db.Product[i].descripcion)
            comentarios.push(zapatillas.productos[i].comentarios)
            imagenes.push(zapatillas.productos[i].imagen)
            id.push(zapatillas.productos[i].id)

            
        }
        res.render("index", { title: nombreZapa,
            descripcion: descripcionZapa,
            comentarios:comentarios,
            imagen: imagenes,
            id: id
         });*/
    },
    search: function(req, res){
        db.Product.findAll()
        .then(function(results){
            return res.render('searchResults', {productos: results});
        })
        .catch(function(error){
            console.log(error);
        });
         }
}

module.exports = indexController;