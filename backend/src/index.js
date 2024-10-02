const express = require ('express');
const roouter = express.Router();

//ruta a producto
roouter.get('/productos')

//ruta para crear nuevo producto
roouter.post('/productos')

module.exports = roouter; 