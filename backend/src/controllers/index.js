const ProductosModel = require('../model/index')
// metodos estáticos
const data = require('../../data.json');
class Productos{
    static getAll(req, res){
        const {data, error} = ProductosModel.getAll()
        
           error ? res.status(400).json({error: 'No hay productos'})
                : res.status(200).json(data)
        
    }
}

module.exports = Productos