var express = require('express');
var router = express.Router();

// Require controller modules.
var newsController = require('../controllers/newsController');

router.get('/detail/:id', newsController.newsDetail);
router.get('/detail', newsController.newsDetail);

module.exports = router;

