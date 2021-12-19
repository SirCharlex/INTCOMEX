const { DataTypes } = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('user',{
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo_contacto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        webstore: {
            type: DataTypes.BOOLEAN,
        },
        ordenes: {
            type: DataTypes.BOOLEAN,
        },
        informacion: {
            type: DataTypes.BOOLEAN,
        },
    })
}