require('dotenv').config();

var express = require('express');
var app = express();
var port = 3000;

// route
var userRoute = require('./routes/user.route');
var userAuth = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transerRoute = require('./routes/transer.route');
var apiProductRoute = require('./api/routes/product.route');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

// cookie parser
var cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.COOKIE_SECRET));
// var csrf = require('csurf');


// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// middleware
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

// database setting
var db = require('./db');

// setting public folder for static files
app.use(express.static('public'));
app.use(sessionMiddleware);
// app.use(csrf({ cookie: true }));


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

app.use('/user', authMiddleware.checkUser, userRoute);
app.use('/auth', authMiddleware.checkLogin, userAuth);
app.use('/product', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.checkUser, transerRoute);
app.use('/api/product', apiProductRoute);

// listen the port
app.listen(port, function () {
	console.log('App is running on the port ' + port);
});