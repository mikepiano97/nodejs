//db setting
var db = require('../db');

module.exports.getLogin = function (req, res, next) {
	res.render('auth/login');
}

module.exports.postLogin = function (req, res, next) {
	var user = db.get('userlist').find({ email: req.body.email, password: req.body.password }).value();
	
	// console.log(user);
	if (!req.body.email){
		res.render('auth/login', {
			errors: [
				'Plz enter your email'
			]
		});
		return;
	}

	if (!req.body.password){
		res.render('auth/login', {
			errors: [
				'Plz enter your password'
			]
		});
		return;
	}

	if (!user){
		res.render('auth/login', {
			errors: [
				'Plz check again the correct info'
			]
		});
		return;
	}

	res.cookie('userId', user.id);

	res.redirect('/user');
}


