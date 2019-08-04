//db setting
var db = require('../db');

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
	res.render('users/create');
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	var errors = [];

	if (req.body.name == '') {
		errors.push('Name is required');
	}

	if (req.body.phone == '') {
		errors.push('Phone is required');
	}

	if (errors.length > 0) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
	}else{
		db.get('userlist')
		  .push(req.body)
		  .write();	
		// userlist.push(req.body);
		res.redirect('/user');		
		// console.log(req.body);	
	}

	
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


