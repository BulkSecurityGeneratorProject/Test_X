var express = require('express');
var request = require('request');
var orm = require('orm');
var app = express();

app.use(orm.express("mysql://SakuraNeko:psw@120.24.6.29/Demo", {
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
  var registerInfo = {
    phone: req.query.phone,
    loginPWD: req.query.loginPWD,
    height: req.query.height,
    sexType: req.query.sexType,
    age: req.query.age,
    created: req.query.created,
    Uid: req.query.Uid
  };

  req.models.user.create({
    phone: registerInfo.phone,
    loginPWD: registerInfo.loginPWD,
    height: registerInfo.height,
    sexType: registerInfo.sexType,
    age: registerInfo.age,
    created: registerInfo.created,
    Uid: registerInfo.Uid
  },function(err, results) {
    var androidResults = {
      status: "True",
      api: "/register",
      results
    };
    res.send(androidResults);
  });
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
