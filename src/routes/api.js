const router = require('express').Router();


//Rutas
app.use('/authors', require('./api/authors'));
app.use('/posts', require('./api/posts'));


module.exports = router;