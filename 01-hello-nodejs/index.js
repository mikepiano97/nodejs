var express = require('express');
var app = express();
var port = 3000;

// userRoute requirement
var userRoute = require('./routes/user.route');

// database setting
var db = require('./db');

// setting public folder for static files
app.use(express.static('public'));


// set view folder
app.set('views','./views');

// set view engine
app.set('view engine','pug');

// demo get method
app.get('/',function (req, res) {
	res.render('index', {
		name: 'Le Duc Tho' 
	});
});

app.use('/user', userRoute);

// listen the port
app.listen(port, function () {
	console.log('App is running on the port ' + port);
});