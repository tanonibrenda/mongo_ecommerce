const express = require ('express');
const roouter = express.Router();
const data = require('../../data.json')

//ruta a producto
roouter.get('/productos', (req, res => {
    res.json(data)
}))

//ruta para crear nuevo producto
// roouter.post('/productos')

module.exports = roouter; 