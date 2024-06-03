// Funciones con las queries que lanzamos contra la tabla Author

const selectAllAuthors = () => {
    return db.query('SELECT * FROM Author');
};

const selectAuthorById = (id_author) => {
    return db.query('SELECT * FROM Author WHERE idAuthor = ?', [id_author]);
};

const insertAuthor = ({name, email, image}) => {
    return db.query('INSERT INTO Author (name, email, image) VALUES (?, ?, ?)', [name, email, image]);
};

const updateAuthorById = (id_author, {name, email, image}) => {
    return db.query('UPDATE Author SET name = ?, email = ?, image = ? WHERE idAuthor = ?', [name, email, image, id_author]);
};

const deleteAuthorById = (id_author) => {
    return db.query('DELETE FROM Author WHERE idAuthor = ?', [id_author]);
};


module.exports = {
    selectAllAuthors,
    selectAuthorById,
    insertAuthor,
    updateAuthorById,
    deleteAuthorById
};
