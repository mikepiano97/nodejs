var cookieParser = require('cookie-parser');

var express = require('express');
var router = express.Router();

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// cookie parser

router.use(cookieParser());

var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });


// controller requirement
var transerController = require('../controllers/transer.controller');



// index
router.get('/create', csrfProtection, transerController.getCreate );
router.post('/create', transerController.postCreate );


module.exports = router;