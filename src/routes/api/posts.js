const router = require('express').Router();


router.get('/', getAllPosts);
router.get('/:id_post', getPostById);
router.get('/author/:id_author', getPostsByAuthor);
router.post('/', createPost);
router.put('/:id_post', updatePost); 
router.delete('/:id_post', deletePost); 


module.exports = router;