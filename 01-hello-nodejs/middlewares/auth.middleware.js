var db = require('../db');

module.exports.checkUser = function (req, res, next) {
	if (!req.signedCookies.userId) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('userlist').find({ id : req.signedCookies.userId }).value();

	if (!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user;
	next();

}

module.exports.checkLogin = function (req, res, next) {
	if (!req.signedCookies.userId) {
		next();
	}else{
		res.redirect('/user');
		return;
	}

}