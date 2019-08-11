var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

// cookie parser
var cookieParser = require('cookie-parser');
router.use(cookieParser());

// controller requirement
var userController = require('../controllers/user.controller');

// require validate
var validate = require('../validate/user.validate');

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index
router.get('/', userController.index );

// set cookie
router.get('/cookie', function (req, res, next) {
	res.cookie('user-id', 9792);
	res.send('Hello Mike!');
});

// search
router.get('/search', userController.search);

// create new user
router.get('/create', userController.getCreate);
router.post('/create', upload.single('avatar'), validate.postCreate, userController.postCreate);

// view the specific user
router.get('/:id', userController.getUser);


module.exports = router;