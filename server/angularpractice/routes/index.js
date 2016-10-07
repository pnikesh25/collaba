var express = require('express');
var router = express.Router();


var jwt = require('jsonwebtoken');
var cfg = require('../config');
var passport = require('passport');

var UserModel = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', passport.authenticate('jwt' , {session : false}),function(req, res, next) {
	res.send('Authenticated');
});
router.post('/loginAuthenticate' , function(req,res,next){
    /*  console.log("Login Authenticate");
        console.log("Username : " +req.body.username);
        console.log("Password : " +req.body.password);
    */
    var user = {
        'username' : req.body.username,
        'password' : req.body.password
      };

      UserModel.findOne(user, function(err, userObj){
        console.log("User Details : "+userObj);
        if(err)
          console.error();

        if(userObj) {
          var payload = {'username' : userObj.username}
          var token = jwt.sign(payload , cfg.jwtSecret);
          token = 'JWT '+token;
          console.log(token);
          //userObj.online = true;
          res.send(token);
        }
        else {
          console.log("Invalid User Credentials");
          res.send('fail');
        }
      });

});


router.post('/registerAuthenticate', function(req, res, next) {
  var userName = req.body.username;
  var userPass = req.body.password;
  var confirmPass = req.body.conpassword;
  console.log("register");


  if(confirmPass != userPass) {
    res.send('The passwords do not Match');
  	//res.redirect('/users/register');
  }
  else {

  UserModel.findOne({"username":userName}, function(err, user) {
  	if(err) {
  		console.log("error");
  		res.send(err);
  	}
  	else {
  		/*console.log(user);
  		console.log("done");*/

  		if(user) {
  			console.log('User Already exists.');
  			res.redirect("/users/login");
  		}
  		else {
  		  var newUser = new UserModel({"username": userName, "password": userPass , "online" : false/*, "name":name, "email": email, "phone": phone*/});
  		  newUser.save(function(err, user) {
  		    if(err) console.log(err);
  		      console.log("Registration Successful. " + newUser);
  		      res.redirect('/users/login');
  	});
  	//console.log("Registration Successful. " + newUser);
  	}
  }

  });
}
});




module.exports = router;
