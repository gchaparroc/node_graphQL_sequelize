const resolvers = {

    Query: {
        //Query Personas
        async getPersonas(root, args, { models }){
            return await models.persona.findAll()
        },
        async getPersona(root, args, { models }){
            return await models.persona.findByPk(args.id)
        },

        //Query Softys
        async getAllSoftys(root, args, { models }){
            return await models.softys.findAll()
        },
        async getSoftysById(root, args, { models }){
            return await models.softys.findByPk(args.id)
        },
        
        //Query Libros
        //async getAllLibros(root, args, { models }){
        async getAllLibros(parent, args, { models }){
            return await models.libro.findAll()
        },
        async getLibroById(root, args, { models }){
            console.log(args)
            return await models.libro.findByPk(args.id)
        },
        //Query Autores
        async getAllAutores(root, args, { models }){
            return await models.autor.findAll()
        },
        async getAutorById(root, args, { models }){
            return await models.autor.findByPk(args.id)
        },  
    },

    Libro:{
        autorId: ({autorId}, args, { models }) => {
            //console.log(autorId)
            //console.log(args)
            console.log(models.libro.findByPk(autorId))
            return models.autor.findByPk(autorId)
        }
    },

    
    

    Mutation: {
        async createPersona(root, { nombre, apellido, active }, { models }){
            return await models.persona.create( {nombre, apellido, active} )
        }
    }

}

module.exports = resolvers