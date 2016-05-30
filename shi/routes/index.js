var express = require('express');
var request = require('request');
var orm = require('orm');
var app = express();
var router = express.Router();

router.use(orm.express("mysql://SakuraNeko:A449137973xaxazzh@120.24.6.29/shiTang", {
  define: function (db, models, next) {
    //add the USER table
    models.user = db.define("USER", {
    	phone: String,
    	userName: String,
      passWord: String
      }
    );
    models.food = db.define("FOOD", {
    	barName: String,
      foodName: String,
      pic: String,
      foodId: Number,
      rank: String,
      description: String
      }
    );
    next();
  }
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//register
router.post("/register", function(req, res) {
  var registerInfo = {
    phone: req.query.phone,
    userName: req.query.userName,
    passWord: req.query.passWord
  };

  req.models.user.exists({userName: registerInfo.userName}, function(err, exists) {
    if(exists) {
      res.send(
        {
          status: "false",
          code: "1003",
          msg: "Invalid Arguments",
          sub_msg: "用户名已经被注册"
        }
      );
    } else {
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
            userName: registerInfo.userName,
            passWord: registerInfo.passWord
          }, function(err, results) {
             var androidResults = {
               status: "True",
               api: "/register",
               results
             };
             res.send(androidResults);
          });
        }
      })
    }
  });
});

//login
router.post("/login", function(req, res, next) {
  req.models.user.exists({userName: req.query.userName}, function(err, exists) {
    if(exists) {
      next();
    } else {
      var androidResults = {
        status: "false",
        code: "1004",
        api: "/login",
        sub_msg: "用户名不存在"
      };
      res.send(androidResults);
    }
  });
});

router.post("/login", function(req, res, next) {
  req.models.user.find({userName: req.query.userName, loginPWD: req.query.loginPWD}, function(err, results) {
    var correctJson = JSON.stringify(results);
    if(correctJson != "[]") {
      var androidResults = {
        status: "true",
        api: "/login",
        user: {
          results:results,
          correctJson
        }
      };
      res.send(androidResults);
    } else {
      var androidResults = {
        status: "false",
        code: "1001",
        api: "/login",
        sub_msg: "用户名和密码不匹配"
      };
      res.send(androidResults);
    }
  });
});

router.post("/foodByBarName", function(req, res) {
  var food = {
    barName: req.query.barName,
  };
  req.models.food.find({barName: food.barName}, function(err, results) {
    var correctJson = JSON.stringify(results);
    if(correctJson != "[]") {
      var androidResults = {
        status: "true",
        api: "/foodByBarName",
        result: {
          results:results
        }
      };
      res.send(androidResults);
    } else {
      var androidResults = {
        status: "false",
        api: "/foodByBarName",
        sub_msg: "你他喵输错了吧"
      };
      res.send(androidResults);
    }
  });
});

router.post("/foodByFoodId", function(req, res) {
  var food = {
    foodId: req.query.foodId,
  };
  req.models.food.find({foodId: food.foodId}, function(err, results) {
    var correctJson = JSON.stringify(results);
    if(correctJson != "[]") {
      var androidResults = {
        status: "true",
        api: "/foodName",
        result: {
          results:results
        }
      };
      res.send(androidResults);
    } else {
      var androidResults = {
        status: "false",
        api: "/foodByFoodId",
        sub_msg: "你他喵输错了吧"
      };
      res.send(androidResults);
    }
  });
});

module.exports = router;
