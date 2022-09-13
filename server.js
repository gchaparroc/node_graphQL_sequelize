const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

//Models:
const models = require('./sequelize/models/index')


models.sequelize.authenticate().then(() =>{//Conexion a la BD
    console.log("Estas conectado a la BD")
});
models.sequelize.sync()//Sincronizacion de los modelos con la BD
//--------------------


//GraphQL
//Resolvers
import resolvers from './graphQL/resolvers/resolvers'
//import softysResolvers from './graphQL/resolvers/softysResolvers'
/*
const typeDefs = gql`

    type Query{
        hello:String
    }

`;
*/


//typeDefs
import typeDefs from './graphQL/typeDefs/typeDefs'
//import softysDefs from './graphQL/typeDefs/softysDefs'
/*
const resolvers = {
    Query: {
        hello: () => "Aratoca Charala"
    }
}
*/
//------------------

const server = new ApolloServer({ 
        typeDefs, 
        resolvers, 
//        softysDefs,
//        softysResolvers, 
        context: { models }
})
const app = express();
server.start().then(res => {
    server.applyMiddleware( {app} );

    app.listen({ port: 4000 }, () => {
        console.log("Corriendor Servidor Apollo en http://localhost:4000" + server.graphqlPath)
    })
})