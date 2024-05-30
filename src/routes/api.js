const router = require('express').Router();


//Rutas
router.use('/authors', require('./api/authors'));
router.use('/posts', require('./api/posts'));


module.exports = router;