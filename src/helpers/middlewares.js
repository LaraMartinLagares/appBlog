//Middlewares para comprobar los IDs dinámicos (recibidos como parámetro en la URL)

const Author = require('../models/author.model');
const Post = require('../models/post.model');


const checkAuthorId = async (req, res, next) => {
    const { id_author } = req.params;
    try {
        const [ author ] = await Author.selectAuthorById(id_author);
        if (author.length === 0) {
            return res.status(404).json({ error: 'Autor no encontrado'});
        }
        next();
    } catch(error) {
        next(error);
    };
};

const checkPostId = async (req, res, next) => {
    const { id_post } = req.params;
    try {
        const [ post ] = await Post.selectPostById(id_post);
        if(post.length === 0) {
            return res.status(404).json({ error: 'Post no encontrado' })
        }
        next();
    } catch(error) {
        next(error);
    };
};

module.exports = {
    checkAuthorId,
    checkPostId
};