var shortId = require('shortid');
var db = require('../db');

module.exports.getCreate = function (req, res, next) {
	res.render('transfer/create', { 
		csrfToken: req.csrfToken() 
	});
}

module.exports.postCreate = function (req, res, next) {
	var userId = req.signedCookies.userId;

	var id = shortId.generate();
	var data = {
		id: id,
		amount: parseInt(req.body.amount),
		account: req.body.account,
		userId: userId
	}

	db.get('transfer')
		.push(data)
		.write();

	res.render('transfer/create');
}
