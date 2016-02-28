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
var phoneTmp, loginPWDTmp;
app.get("/login", function(req, res, next) {
  phoneTmp = req.query.phone;
  loginPWDTmp = req.query.loginPWD;
  req.models.user.exists({phone: req.query.phone}, function(err, exists) {
    if(exists) {
      var havePhone = true;
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
  console.log(phoneTmp);
  console.log(loginPWDTmp);
  req.models.user.find({phone: phoneTmp, loginPWD: loginPWDTmp}, function(err, results) {
    console.log(results);
    if(results) {
      var androidResults = {
        status: "true",
        api: "login",
        user: {
          created: results.created,
          Uid: results.Uid
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

//
//   req.models.user.exists({phone: req.query.phone}, function(err, exists){
//     var phoneTmp = req.query.phoneTmp;
//     var loginPWDTmp = req.query.loginPWD;
//     if(exists) {
//       req.models.user.find({phone: phoneTmp, loginPWD: loginPWDTmp}, function(err, results){
//         if(results) {
//           var androidResults = {
            // status: "true",
            // api: "login",
            // user: {
            //   created: results.created,
            //   Uid: results.Uid
            // }
//           };
//           res.send(androidResults)
//         } else {
          // var androidResults = {
          //   status: "false",
          //   code: "1001",
          //   api: "login",
          //   sub_msg: "用户名和密码不匹配"
          // }
//           res.send(androidResults);
//         }
//       });
//     } else {
//       var androidResults = {
//         status: "false",
//         code: "1004",
//         api: "login",
//         sub_msg: "用户名不存在"
//       };
//       res.send(androidResults);
//     }
//   });
// });

app.get("/record", function(req, res) {
  req.models.user.find({ID: req.query.ID}, function(err, results) {
    res.send(results);
  });
});

app.listen(80);
