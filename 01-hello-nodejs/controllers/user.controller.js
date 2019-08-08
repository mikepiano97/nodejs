//db setting
var db = require('../db');
var md5 = require('md5');



// shortid requirement
var shortid = require('shortid');


module.exports.index = function (req, res) {
	res.render('users/index', {
		users: db.get('userlist').value()
	});
}

module.exports.search = function (req, res) {
	var q = req.query.q.toLowerCase();

	var matchedUsers = db.get('userlist').value().filter(function (user) {
		return user.name.toLowerCase().indexOf(q) !== -1;
	});

	// console.log(users);
	res.render('users/index', {
		users: matchedUsers,
		query: q
	});
}

module.exports.getCreate = function (req, res) {
	console.log(req.cookies);
	res.render('users/create');
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	req.body.password = md5(req.body.password);
	console.log(req.body);
	
	db.get('userlist')
		  .push(req.body)
		  .write();	
		// userlist.push(req.body);
		res.redirect('/user');		
		// console.log(req.body);
}

module.exports.getUser = function (req, res) {
	var id = req.params.id;

	var viewUser = db.get('userlist')
	  .find({ id: id })
	  .value();

	res.render('users/view', {
		user: viewUser
	});
}


