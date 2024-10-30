const express = require ('express');
const router = express.Router();
const Productos = require('../controllers/index')


//ruta a producto
router.get('/productos', Productos.getAll)


//ruta para crear nuevo producto
// roouter.post('/productos')

module.exports = router; 