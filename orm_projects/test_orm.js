var express = require('express');
var request = require('request');
var orm = require('orm');
var app = express();

app.use(orm.express("mysql://SakuraNeko:A449137973xaxazzh@120.24.6.29/Demo", {
  define: function (db, models, next) {

    //add the USER table
    models.user = db.define("USER", {
    	phone: String,
    	loginPWD: String,
    	height: String,
    	sexType: String,
    	age: String,
    	created: String,
    	Uid: Number
      }
    );

    //add the RECORD table
    models.record = db.define("RECORD", {
      TIME: String,
      PRESSURE1: Number,
      PRESSURE2: Number,
      PRESSURE3: Number
      }
    );
    next();
  }
}));

//register
app.post("/register", function(req, res) {
  console.log(req);
});

//getUserInfo
app.get("/getUserInfo", function(req, res) {
	req.models.user.find({id: req.query.id}, function(err, results) {
		res.send(results);
	});
});

app.get("/record", function(req, res) {
  req.models.record.find({ID: req.query.ID}, function(err, results) {
    res.send(results);
  });
});

app.listen(80);
