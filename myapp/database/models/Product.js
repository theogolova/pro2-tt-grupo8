module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        Id: {
            autoIncrement: true,
            primaryKey: true,
            type:  dataTypes.INTEGER
        },
        productos_id: {
            type: dataTypes.INTEGER
        },
        clienteId:{
            type:dataTypes.INTEGER
        },
        nombre_foto: {
            type: dataTypes.STRING
        },
        nombre_prod: {
            type: dataTypes.STRING
        },
        descripcion_prod: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        
    };
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false

    };

    let Product = sequelize.define(alias, cols, config)

    return Product; 
}