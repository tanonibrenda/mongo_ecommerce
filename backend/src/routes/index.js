const express = require ('express');
const router = express.Router();
const data = require('../../data.json');

//ruta a producto
router.get('/productos', (req, res) => {
    res.json(data)
});

//ruta para crear nuevo producto
// roouter.post('/productos')

module.exports = router; 