module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario";
    let cols = {
        Id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        usuarios_id:{
            type : dataTypes.INTEGER
        },
        email: {
            type : dataTypes.STRING
        },
        contraseña: {
            type : dataTypes.STRING
        },
        fecha: {
            type : dataTypes.DATE
        },
        dni: {
            type : dataTypes.INTEGER
        },
        foto_perfil: {
            type : dataTypes.STRING
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}