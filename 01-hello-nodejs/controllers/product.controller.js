// database setting
var db = require('../db');

module.exports.index = function (req, res) {
	// var page = parseInt(req.query.page) || 1;
	// var perPage = 8;

	// var begin = (page - 1) * perPage;
	// var end = page * perPage;

	var page = parseInt(req.query.page) || 1;

	var perPage = 8;
	var drop = (page - 1) * perPage;

	res.render('product/index', {
		// products: db.get('productlist').value().slice(begin, end)
		products: db.get('productlist').drop(drop).take(perPage).value(),
		page: page
	});
}

