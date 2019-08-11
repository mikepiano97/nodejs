var shortId = require('shortid');
var db = require('../db');

module.exports = function (req, res, next) {
	if (!req.signedCookies.sessionId) {

		// set sessionId for this client
		var sessionId = shortId.generate();
		res.cookie('sessionId', sessionId , {
			signed: true
		});

		// store sessionId into database
		db.get('sessions')
		  .push({
			id: sessionId
		}).write();
	}

	next();
}