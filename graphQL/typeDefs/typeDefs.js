const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Persona{
    id: Int!
    nombre: String!
    apellido: String!
    active: Boolean!
}

type Softys{
    id: Int!
    sku: String!           
    marca: String!         
    nombreProducto: String!
    categoriaUno: String! 
    categoriaDos: String! 
    categoriaTres: String!
    tienda: String!        
    diasStock: String!    
    diasStockPorc: String!
    agosto292022: String! 
    agosto302022: String!    
    agosto312022: String!    
    septiembre012022: String!    
    septiembre022022: String!    
    septiembre032022: String!    
    septiembre042022: String!    
}

type Libro{
    id: Int!
    nombreLibro: String!
    autorId: Autor
}

type Autor{
    id: Int!
    nombreAutor: String!
    libroId: Libro
}

type Query{
    getPersonas: [Persona],                        #Array de personas
    getPersona(id: Int!): Persona,                  #traer persona por id
    getAllSoftys: [Softys],                        #Array de todos los registros de softys
    getSoftysById(id: Int!): Softys                  #traer un registro de Softys por id
    getAllLibros: [Libro],
    getLibroById(id: Int!): Libro,
    getAllAutores: [Autor],
    getAutorById(id: Int!): Autor
}
type Mutation{
    createPersona(nombre: String!, apellido: String!, active: Boolean!): Persona!
}
`


module.exports = typeDefs