var express = require('express');
var router = express.Router();

// cookie parser
var cookieParser = require('cookie-parser');
router.use(cookieParser());

// controller requirement
var productController = require('../controllers/product.controller');

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index
router.get('/', productController.index );


module.exports = router;