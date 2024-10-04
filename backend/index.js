//inicializar express
const express = require ('express');
const server = express(); 

const routerProductos = require('./src/routes/index')

// const dotenv = require('dotenv');

//llamar a json
// const data = require('./data.json')

//primera ruta
server.get('/', (req, res)=>{
    res.send('API Ecommerce')
})

//llamar rutas
server.use('/api', routerProductos)

//servidor en puerto local
server.listen(3000, ()=>{
    console.log('servidor corriendo puerto local 3000');
})