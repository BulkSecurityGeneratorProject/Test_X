var express = require('express');
var request = require('request');
var orm = require('orm');
var app = express();

app.use(orm.express("mysql://SakuraNeko:PWD@120.24.6.29/Demo", {
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
      time: String,
      Uid: Number,
      left1: String,
      left2: String,
      left3: String,
      right1: String,
      right2: String,
      right3: String
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

  req.models.user.exists({phone: registerInfo.phone}, function(err, exists) {
    if(exists) {
      res.send(
        {
          status: "false",
          code: "1003",
          msg: "Invalid Arguments",
          sub_msg: "手机号已经被注册"
        }
      );
    } else {
      req.models.user.create({
        phone: registerInfo.phone,
        loginPWD: registerInfo.loginPWD,
        height: registerInfo.height,
        sexType: registerInfo.sexType,
        age: registerInfo.age,
        created: registerInfo.created,
        Uid: registerInfo.Uid
      }, function(err, results) {
         var androidResults = {
           status: "True",
           api: "/register",
           results
         };
         res.send(androidResults);
      });
    }
  });
});

//login
app.get("/login", function(req, res, next) {
  req.models.user.exists({phone: req.query.phone}, function(err, exists) {
    if(exists) {
      next();
    } else {
      var androidResults = {
        status: "false",
        code: "1004",
        api: "login",
        sub_msg: "用户名不存在"
      };
      res.send(androidResults);
    }
  });
});

app.get("/login", function(req, res, next) {
  req.models.user.find({phone: req.query.phone, loginPWD: req.query.loginPWD}, function(err, results) {
    var correctJson = JSON.stringify(results);
    if(correctJson != "[]") {
      var androidResults = {
        status: "true",
        api: "login",
        user: {
          results
        }
      };
      res.send(androidResults);
    } else {
      var androidResults = {
        status: "false",
        code: "1001",
        api: "login",
        sub_msg: "用户名和密码不匹配"
      };
      res.send(androidResults);
    }
  });
});

//Upload data
app.post("/upload", function(req, res, next) {
  var uploadInfo = {
    time: req.query.time,
    Uid: req.query.Uid,
    left1: req.query.left1,
    left2: req.query.left2,
    left3: req.query.left3,
    right1: req.query.right1,
    right2: req.query.right2,
    right3: req.query.right3
  };

  req.models.record.create({
    Uid: uploadInfo.Uid,
    time: uploadInfo.time,
    left1: uploadInfo.left1,
    left2: uploadInfo.left2,
    left3: uploadInfo.left3,
    right1: uploadInfo.right1,
    right2: uploadInfo.right2,
    right3: uploadInfo.right3
  }, function(err, results) {

    if(results) {
      var androidResults = {
        status: "True",
        api: "/upload",
        results
      };
    } else {
      var androidResults = {
        status: "Falsee",
        api: "/upload",
        code: "1000",
        sub_msg: "服务器存储数据错误"
      }
    }
     res.send(androidResults);
  });
});

//Find data

app.get("/findData", function(req, res, next) {
  req.models.record.exists({Uid: req.query.Uid , time: req.query.time}, function(err, exists) {
    if(exists) {
      next();
    } else {
      var androidResults = {
        status: "false",
        code: "1009",
        api: "/findData",
        sub_msg: "后台服务器数据不存在"
      };
      res.send(androidResults);
    }
  });
});

app.get("/findData", function(req, res, next) {
  req.models.record.find({Uid: req.query.Uid , time: req.query.time}, function(err, results) {
    var getRecord = {
      Uid: req.query.Uid,
      time: req.query.time
    };
    var correctJson = JSON.stringify(results);
    if(correctJson != "[]") {
      var androidResults = {
        status: "true",
        api: "/findData",
        results
      };
      res.send(androidResults);
    } else {
      var androidResults = {
        status: "false",
        code: "1000",
        api: "/findData",
        sub_msg: "服务器存储数据错误"
      };
      res.send(err);
    }
  });
});
app.listen(80);
