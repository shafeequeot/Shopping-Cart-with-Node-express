var express = require('express');
var productHelpers = require('../helpers/product-helpers');
var router = express.Router();





/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProduct().then((product)=>{
    console.log(product)
    res.render('admin/product-view',{admin:true, product})
    })
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product',{admin:true})
  
})


router.post('/add-product',function (req,res){
  
  productHelpers.addProduct(req.body,(result)=>{
    let image = req.files.image
    
    
    image.mv('./public/images/'+result.insertedId.toString()+'.jpg',(err,done)=>{
      if(err) console.log("having error on moving image")
      else res.render('admin/add-product')
    })
    
  })
})


 
module.exports = router;
