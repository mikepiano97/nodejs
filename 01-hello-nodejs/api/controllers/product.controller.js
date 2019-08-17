var Product = require('../../models/product.model');

module.exports.index = async function (req, res, next) {
	try {
		var products = await Product.find();
		products.foo();
		res.json(products);	
	} catch(error) {
		next(error);
	}
	
}

module.exports.create = async function (req, res) {
	var product = await Product.create(req.body);
	res.json(product);
}

