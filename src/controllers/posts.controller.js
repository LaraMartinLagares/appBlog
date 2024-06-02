const Post = require('../models/post.model');
const Author = require('../models/author.model');


const getAllPosts = async (req, res, next) => {

    try {
        const [posts] = await Post.selectAllPosts();  
        res.json(posts);
    } catch (error) {
        next(error);
    }
};


const getPostById = async (req, res,  next) => {

    const {id_post} = req.params;
    
    try {
        const [post] = await Post.selectPostById(id_post);

        if (post.length === 0) {
            return res.status(404).json({ error: 'Post no encontrado'});
        }

        res.json(post[0]);

    } catch (error) {
        next(error);
    }
};

const getPostsByAuthor = async (req, res,  next) => {

    const {id_author} = req.params;
    
    try {
        const [author] = await Author.selectAuthorById(id_author);

        if (author.length === 0) {
            return res.status(404).json({ error: 'Autor no encontrado'});
        }

        const [posts] = await Post.selectPostsByAuthor(id_author);

        if (posts.length === 0) {
            return res.status(404).json({ error: 'No se han encontrado posts para el autor'});
        }

        res.json(posts);

    } catch (error) {
        next(error);
    }
};


const createPost = async (req, res, next) => {

    try {
        const [result] = await Post.insertPost(req.body);
        const [[post]] = await Post.selectPostById(result.insertId); 
        res.json(post);

    } catch (error) {
        next(error);
    } 
};

const updatePost = async (req, res, next) => {

    const {id_post} = req.params;

    try {
        const [result] = await Post.updatePostById(id_post, req.body);
        
        if (result.changedRows === 1 ) {
            const [[post]] = await Post.selectPostById(id_post); 
            res.json(post);
        } else {
            res.status(400).json({ error: 'Se ha producido un error al actualizar el post' });
        }
        
    } catch (error) {
        next(error);
    } 

};

const deletePost = async (req, res, next) => { //los errores de try/catch son propios de la aplicación (por lo que sea no responde- bbdd caída, fallo de conexión, la api no responde...)
    
    const {id_post} = req.params;
    
    try {       
        const [result] = await Post.deletePostById(id_post);

        if (result.affectedRows === 1) {
            res.json({ message: 'Se ha borrado el post' });
        } else {
            res.status(404).json({ message: 'El post no existe' });
        }

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts, 
    getPostById,
    getPostsByAuthor,
    createPost,
    updatePost,
    deletePost
};