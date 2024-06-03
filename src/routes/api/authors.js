const router = require('express').Router();

const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } = require('../../controllers/authors.controller');
const { checkAuthorId } = require('../../helpers/middlewares');


router.get('/', getAllAuthors);
router.get('/:id_author', checkAuthorId, getAuthorById);
router.post('/', createAuthor);
router.put('/:id_author', checkAuthorId, updateAuthor); 
router.delete('/:id_author', checkAuthorId, deleteAuthor); 


module.exports = router;