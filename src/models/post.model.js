// Funciones con las queries que lanzamos contra la tabla Post

const selectAllPosts = () => {
    return db.query('SELECT post.idPost, author.idAuthor, author.name, author.email, author.image, post.title, post.description, post.date, post.category FROM post JOIN author ON post.idAuthor = author.idAuthor');
};

const selectPostById = (id_post) => {
    return db.query('SELECT post.idPost, author.idAuthor, author.name, author.email, author.image, post.title, post.description, post.date, post.category FROM post JOIN author ON post.idAuthor = author.idAuthor WHERE post.idPost = ?', [id_post]);
};

const selectPostsByAuthor = (id_author) => {
    return db.query('SELECT post.idPost, post.title, post.description, post.date, post.category FROM post WHERE post.idAuthor = ?', [id_author]);
};

const insertPost = ({idAuthor, title, description, date, category}) => {
    return db.query('INSERT INTO Post (idAuthor, title, description, date, category) VALUES (?, ?, ?, ?, ?)', [idAuthor, title, description, date, category]);
};

const updatePostById = (id_post, {idAuthor, title, description, date, category}) => {
    return db.query('UPDATE Post SET idAuthor = ?, title = ?, description = ?, date = ?, category = ? WHERE idPost = ?', [idAuthor, title, description, date, category, id_post]);
};

const deletePostById = (id_post) => {
    return db.query('DELETE FROM Post WHERE idPost = ?', [id_post]);
};


module.exports = {
    selectAllPosts,
    selectPostById,
    selectPostsByAuthor,
    insertPost,
    updatePostById,
    deletePostById
};
