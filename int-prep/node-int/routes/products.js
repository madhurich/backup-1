var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET users listing. */
router.all('/', function(req, res, next){
	console.log("all function");
	console.log("must be executed for all '/' routes");
	next();

});
router.get('/', function(req, res, next) {
	console.log("get funciton");
  Product.getProducts(function(err, products){
  	if(err){
  		console.log(err);
  	}res.json(products);
  	res.end();
  });
});

router.get('/:id', function(req, res, next){
	Product.getProductById(req.params.id, function(err, product){
		if(err){
			console.log(err);
		}res.json(product);
	});
});

router.post('/', function(req, res, next){
	var name = req.body.name;
	var quantity = req.body.quantity;

	var newProduct = new Product({
		name: name,
		quantity: quantity
	});
	Product.createProduct(newProduct, function(err, product){
		if(err){
			console.log(err);
		}
		res.write("product added");
		console.log("product added");
		res.end();

	});
});

router.delete('/:id', function(req, res, next){
	Product.deleteProduct(req.params.id, function(err, product){
		if(err){
			console.log(err);
		}console.log("deleted");
		res.end();
	});
});
module.exports = router;
