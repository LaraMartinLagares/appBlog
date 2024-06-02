const Author = require('../models/author.model');


const getAllAuthors = async (req, res, next) => {

    try {
        const [authors] = await Author.selectAllAuthors();  
        res.json(authors);
    } catch (error) {
        next(error);
    }
};


const getAuthorById = async (req, res,  next) => {

    const {id_author} = req.params;
    
    try {
        const [author] = await Author.selectAuthorById(id_author);

        if (author.length === 0) {
            return res.status(404).json({ error: 'Autor no encontrado'});
        }

        res.json(author[0]);

    } catch (error) {
        next(error);
    }
};


const createAuthor = async (req, res, next) => {

    try {
        const [result] = await Author.insertAuthor(req.body);
        const [[author]] = await Author.selectAuthorById(result.insertId); 
        res.json(author);

    } catch (error) {
        next(error);
    } 
};

const updateAuthor = async (req, res, next) => {

    try {
        const {id_author} = req.params;
        const [result] = await Author.updateAuthorById(id_author, req.body);
        
        if (result.changedRows === 1 ) {
            const [[author]] = await Author.selectAuthorById(id_author); 
            res.json(author);
        } else {
            res.status(400).json({ error: 'Se ha producido un error al actualizar el autor' });
        }
        
    } catch (error) {
        next(error);
    } 

};

const deleteAuthor = async (req, res, next) => { //los errores de try/catch son propios de la aplicación (por lo que sea no responde- bbdd caída, fallo de conexión, la api no responde...)
    
    const {id_author} = req.params;

    try{
        
        const [result] = await Author.deleteAuthorById(id_author);

        if (result.affectedRows === 1) {
            res.json({ message: 'Se ha borrado el autor y sus posts' });
        } else {
            res.status(404).json({ message: 'El autor no existe' });
        }

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllAuthors, 
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};