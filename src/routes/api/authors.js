const router = require('express').Router();

const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } = require('../../controllers/authors.controller');


router.get('/', getAllAuthors);
router.get('/:id_author', getAuthorById);
router.post('/', createAuthor);
router.put('/:id_author', updateAuthor); 
router.delete('/:id_author', deleteAuthor); 


module.exports = router;