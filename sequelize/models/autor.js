module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('Autor', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        nombreAutor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        libroId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {});

    Autor.associate = (models) => {
        Autor.hasMany(models.Libro)
    };

    return Autor;
}