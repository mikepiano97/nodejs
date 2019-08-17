var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	prod_name: String,
	prod_image: String,
	prod_des: String,
	prod_price: Number
},{ versionKey:false });

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;