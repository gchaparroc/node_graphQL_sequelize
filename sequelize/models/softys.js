module.exports = (sequelize, DataTypes) => {
    const Softys = sequelize.define('Softys', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: true
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombreProducto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoriaUno: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoriaDos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoriaTres: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tienda: {
            type: DataTypes.STRING,
            allowNull: true
        },
        diasStock: {
            type: DataTypes.STRING,
            allowNull: true
        },
        diasStockPorc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agosto292022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agosto302022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        agosto312022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        septiembre012022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        septiembre022022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        septiembre032022: {
            type: DataTypes.STRING,
            allowNull: true
        },
        septiembre042022: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {});
    return Softys
}


