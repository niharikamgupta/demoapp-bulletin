var express = require('express');
var router = express.Router();

// Require controller modules.
var categoryController = require('../controllers/categoryController');

router.post('/', categoryController.getCategories);

module.exports = router;