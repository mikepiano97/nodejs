var express = require('express');
var router = express.Router();

// controller requirement
var cartController = require('../controllers/cart.controller');

// cookie parser
var cookieParser = require('cookie-parser');
router.use(cookieParser());

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// access to this link /cart/add
router.get('/add/:prodId', cartController.addToCart );

module.exports = router;