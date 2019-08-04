var express = require('express');
var router = express.Router();

// controller requirement
var userController = require('../controllers/user.controller');

// body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index
router.get('/', userController.index );

// search
router.get('/search', userController.search);

// create new user
router.get('/create', userController.getCreate);
router.post('/create', userController.postCreate);

// view the specific user
router.get('/:id', userController.getUser);


module.exports = router;