const router = require('express').Router();

const { getAllPosts, getPostById, getPostsByAuthor, createPost, updatePost, deletePost } = require('../../controllers/posts.controller');
const { checkPostId, checkAuthorId } = require('../../helpers/middlewares');


router.get('/', getAllPosts);
router.get('/:id_post', checkPostId, getPostById);
router.get('/author/:id_author', checkAuthorId, getPostsByAuthor);
router.post('/', createPost);
router.put('/:id_post', checkPostId, updatePost); 
router.delete('/:id_post', checkPostId, deletePost); 


module.exports = router;