var express = require('express');
var router = express.Router();


// controller requirement
var authController = require('../controllers/auth.controller');

// cookie parser
var cookieParser = require('cookie-parser');
router.use(cookieParser());

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index - login page
router.get('/login', authController.getLogin );
router.post('/login', authController.postLogin );


module.exports = router;