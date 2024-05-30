const router = require('express').Router();


router.get('/', getAllAuthors);
router.get('/:id_author', getAuthorById);
router.post('/', createAuthor);
router.put('/:id_author', updateAuthor); 
router.delete('/:id_author', deleteAuthor); 


module.exports = router;