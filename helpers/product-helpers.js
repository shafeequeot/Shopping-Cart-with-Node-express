const db = require('../config/connection')

module.exports = {

    addProduct:(product, callback)=>{
        console.log(product)
        db.get().collection('product').insertOne(product).then((data)=>{
          
            callback(data)
            
        })
    },
    getAllProduct:()=>{
        return new Promise(async (resolve,reject)=>{
            let allproduct = await db.get().collection('product').find().toArray()
            resolve(allproduct)
        })
    }
}