const exp = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const template = require("art-template");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = exp();
app.use(exp.static("views"));

app.use(bodyParser.urlencoded({
	extended: true
}))

template.config('cache', false)

app.engine('.html', template.__express);
app.set('view engine', 'html');

var dbConn = mongoose.createConnection('localhost', 'jingdong');
dbConn.on('error', function(error) {
	console.log("数据库连接失败" + error);
});
dbConn.once('open', function() {
	console.log("数据库连接成功");
});
dbConn.on('disconnected', function() {
	console.log('数据库连接已经关闭');
});

var userschema = new Schema({
	name: String, //定义一个属性name，类型为String
	psw: String
}, {
	versionKey: false
});

var userModel = dbConn.model('user', userschema);

function findUser(userParam) {
	var res;
	userModel.find(userParam).exec(function(err, users) {
		if(err) {
			console.log(err);
			res = null;

		} else {
			console.log(users);
			res = users;
			console.log(res);

		}
	})
	return res;
}

function saveUser(userParam) {
	var userEntity = new userModel(userParam);
	userEntity.save(function(err, result) {
		if(err) {
			console.log("err" + err);
		} else {
			console.log("保存成功");
			console.log(result);
		}
	})
}

var currentUser;
//首页
app.get('/main', function(req, res) {
	if(currentUser) {
		res.render("main", {
			title: "京东商城122",
			user: currentUser
		})
	} else {
		res.render("main", {
			title: "京东商城"
		})
	}

})

//去登录页
app.get("/tologin", function(req, res) {
	if(currentUser) {
		res.render("main", {
			title: "京东商城122",
			user: currentUser
		})

	} else {
		res.render("login", {
			title: "登录页面"
		})
	}

})

//登出
app.get("/logout", function(req, res) {
	currentUser = undefined;
	res.render("main", {
		title: "京东商城122"
	})
})

//登录提交
app.post("/login", function(req, res) {
	var userParam = req.body;
	console.log(userParam);
	userModel.find(userParam, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			if(result.length != 0) {
				currentUser = result[0];
				res.status(200).json({
					code: "success",
					msg: "登陆成功"
				})

			} else {
				res.json({
					code: "error",
					msg: "用户名或密码错误"
				})
			}

		}
	})

})
//去注册页面
app.get("/toregister", function(req, res) {
	if(currentUser) {
		res.render("main", {
			title: "京东商城",
			user:currentuser
		})
	} else {
		res.render("register", {
			title: "注册页面"
		})
	}

})

//注册提交
app.post("/register", function(req, res) {
	//var newUser = res.body;
	//findUserByName(newUser.name);
//	var newUser = {
//		name: "zhansan11",
//		psw: "123"
//	};
	var newUser = req.body;
	var userName = {};
	userName.name = newUser.name;

	userModel.find(userName, function(err, result) {
		if(result) {
			if(result.length > 0) {
//				res.send("用户名已存在");
				res.json({
					code:"error",
					msg:"用户名已存在"
				})
			} else {
				saveUser(newUser);
				res.json({
					code:"success",
					msg:"注册成功,是否立即登录"
				})
			}
		}
	})

})

//去家电页面
app.get("/jiadian",function(req,res){
	if(currentUser) {
		res.render("jiadian", {
			title: "京东家电",
			user: currentUser
		})
	} else {
		res.render("jiadian", {
			title: "京东家电"
		})
	}
})
//去超市页面
app.get("/chaoshi", function(req, res) {
	if(currentUser) {
		res.render("chaoshi", {
			title: "京东超市",
			user: currentUser
		})
	} else {
		res.render("chaoshi", {
			title: "京东超市"
		})
	}
})

//去服装城页面
app.get("/clothes", function(req, res) {
	if(currentUser) {
		res.render("clothes", {
			title: "京东服装",
			user: currentUser
		})
	} else {
		res.render("clothes", {
			title: "京东服装"
		})
	}
})
//去秒杀页面
app.get("/miaosha", function(req, res) {
	if(currentUser) {
		res.render("miaosha", {
			title: "京东秒杀",
			user: currentUser
		})
	} else {
		res.render("miaosha", {
			title: "京东秒杀"
		})
	}
})

//去详情页
app.get('/detail', function(req, res) {
	if(currentUser) {
		res.render("detail", {
			title: "京东详情",
			user: currentUser
		})
	} else {
		res.render("detail", {
			title: "京东详情"
		})
	}

})


app.listen("3000", function() {
	console.log("服务器打开成功,端口号是3000");
})