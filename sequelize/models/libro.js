module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('Libro', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        nombreLibro: {
            type: DataTypes.STRING,
            allowNull: true
        },
        autorId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {});

    Libro.associate = (models) => {
        Libro.belongsTo(models.Autor)
    }

    return Libro
}