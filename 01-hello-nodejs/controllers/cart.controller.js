var db = require('../db');

module.exports.addToCart = function (req, res) {
	var sessionId = req.signedCookies.sessionId;
	var prodId = req.params.prodId;

	if (!sessionId) {
		res.redirect('/product');
	}

	var count = db.get('sessions')
				  .find({ id: sessionId})
				  .get('cart.'+ prodId, 0)
				  .value();

	// store cart into database
	db.get('sessions')
	  .find({ id: sessionId })
	  .set('cart.'+ prodId, count + 1)
	  .write();

	var cart = db.get('sessions')
		.find({ id: sessionId })
		.get('cart').value();


	res.redirect('/user');

}