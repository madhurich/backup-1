var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: {
		type: String
	},
	quantity: {
		type: Number
	}
});

var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getProducts = function(callback){
	Product.find(callback);
};

module.exports.getProductById = function(id, callback){
	Product.findById(id, callback);
};

module.exports.createProduct = function(newProduct, callback){
	newProduct.save(callback);
};

module.exports.deleteProduct = function(id, callback){
	var query = {_id: id};
	Product.find(query).remove(callback);
};