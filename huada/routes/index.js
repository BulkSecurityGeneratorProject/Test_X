var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get({
  url:'http://s1.eqxiu.com/eqs/scene/pv?sceneId=45077654',
  form: {
       sceneId: 45077654
   }},
  function(err,httpResponse,body) {
    res.render('index', { title: '我是第'+body+'位青志联点赞的小伙伴' });
  })
});
module.exports = router;
