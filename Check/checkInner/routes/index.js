var express = require('express');
var router = express.Router();
var orm = require('orm');

/* GET home page. */

// add table
router.use(orm.express("mysql://SakuraNeko:A449137973xaxazzh@120.24.6.29/checkName", {
  define: function (db, models, next) {
    //add the USER table
    models.user = db.define("nameAndCheck", {
    	NAME: String,
    	ISCHECK: String
      }
    );
    next();
  }
}));

router.get('/', function(req, res) {
  res.sendfile('./index/index.html');
});

router.post('/check', function(req, res) {
  var name = req.body.name;
  req.models.user.find({NAME: name}, function(err, results) {
    var correctObject = JSON.parse(JSON.stringify(results));
    var correctJson = correctObject.pop();
    if(correctJson == undefined) {
      res.send(
        {
          status: "false"
        }
      );
    } else if(results){
      results[0].ISCHECK = "true";
      results[0].save();
      res.send(
        {
          status: "success"
        }
      );
    }
  });
});

module.exports = router;
