//inicializar express
const express = require ('express');
const server = express(); 

const dotenv = require('dotenv');

//primera ruta
server.get('/', (req, res)=>{
    console.log(req)
    res.send('Api de tienda')
})

//servidor en puerto local
server.listen(3000, ()=>{
    console.log('servidor corriendo puerto local 3000');
})