// Creación y configuración de la APP de Express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de rutas

app.use('/api', require('./routes/api'));


// Middleware error

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message }); //Todas las excepciones de javascript tienen la propiedad message donde explican un poco de qué va el error.
    next();
});




module.exports = app;