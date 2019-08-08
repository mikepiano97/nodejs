var db = require('../db');

module.exports.checkUser = function (req, res, next) {
	if (!req.cookies.userId) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('userlist').find({ id : req.cookies.userId }).value();

	if (!user) {
		res.redirect('/auth/login');
		return;
	}

	next();

}

module.exports.checkLogin = function (req, res, next) {
	if (!req.cookies.userId) {
		next();
	}else{
		res.redirect('/user');
		return;
	}

}