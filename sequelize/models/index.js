//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('b7zyi7jl3rpdvytlrv2f', 'ujvikmwrhwmwrkju', 'n04qcqzPfGjgoOnojXFG', {//Modifica los datos para conectarte a la Bd
    host: 'b7zyi7jl3rpdvytlrv2f-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

const models = {
    persona: sequelize.import('./persona'),
    softys: sequelize.import('./softys'),
    libro: sequelize.import('./libro'),
    autor: sequelize.import('./autor')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
