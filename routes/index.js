var express = require('express');
var router = express.Router();

// product listing

let product = [{
  Name: "Samsung 1",
  Category: "mobile",
  Description: "entho oru phone valya karyalla",
  image: "https://image.shutterstock.com/image-photo/happy-young-man-using-laptop-600w-1222971247.jpg"
},
{
  Name: "Samsung 2",
  Category: "mobile",
  Description: "entho oru phone no mecham",
  image: "https://image.shutterstock.com/image-photo/man-work-using-computer-hand-600w-1887501613.jpg"
},
{
  Name: "iphone 1",
  Category: "i pho",
  Description: "entho valyalkar",
  image: "https://image.shutterstock.com/image-photo/man-work-using-computer-hand-600w-1896665404.jpg"
},
{
  Name: "opo 2",
  Category: "mobile",
  Description: "entho ssss opo oru phone no mecham",
  image: "https://image.shutterstock.com/image-photo/stylish-man-using-laptop-startup-600w-295226588.jpg"
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { product, admin:true});
});

module.exports = router;
