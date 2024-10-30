const data = require ('../../data.json')

class ProductosModel{
    static getAll(){
        if (!data) return {data:null, error:true}
              
            return {data, error:false}
        
        
    }
}

module.exports = ProductosModel