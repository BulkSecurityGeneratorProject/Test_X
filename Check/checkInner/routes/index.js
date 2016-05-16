var express = require('express');
var router = express.Router();
var orm = require('orm');

/* GET home page. */

router.get('/', function(req, res) {
  res.sendfile('./index/index.html');
});

module.exports = router;
