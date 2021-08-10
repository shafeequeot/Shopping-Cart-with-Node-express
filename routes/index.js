var express = require('express');
var router = express.Router();
const db = require('../helpers/product-helpers')
const userHelper = require('../helpers/user-helper')

// product listing


/* GET home page. */
router.get('/', function(req, res, next) {
db.getAllProduct().then((product)=>{

    res.render('index', { product});
})
});

router.get('/login',(req,res,next)=>{
res.render('user/login')
})

router.get('/signup',(req,res,nex)=>{
    res.render('user/signup')
}) 

router.post('/signUp',(req,res,next)=>{
    userHelper.doSignup(req.body).then((data)=>{
        res.redirect('/login')
    })
})

router.post('/login',(req,res)=>{ 
    userHelper.doLogin(req.body).then((userData)=>{
        console.log(userData)
    })
    // console.log(req.body)

})
module.exports = router;
