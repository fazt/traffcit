var passport = require('passport');
var User = require('../models/users');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user,done) => {
  done(null,user.id);
});

passport.deserializeUser((id,done) => {
  User.findById(id,function(err,user) {
    done(err,user);
  });
});

passport.use('local.signup',new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},(req,email,password,done) => {
  req.checkBody('email','Invalid Email').notEmpty().isEmail();
  req.checkBody('password','Invalid password').notEmpty().isLength({min:4});

  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null,false,req.flash('error',messages));
  }
  User.findOne({'email':email},function(err,user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null,false,{message:'Email is already in use'});
    }
    var newUser = new User();
    // newUser.firstName = firstName;
    // newUser.lastName = lastName;
    // newUser.userName = userName;
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.save(function(err,result) {
      if (err) {
        return done(err);
      }
      return done(null,newUser);
    });
  });
}));

passport.use('local.signin',new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},function(req,email,password,done) {
  req.checkBody('email','Invalid Email').notEmpty().isEmail();
  req.checkBody('password','Invalid password').notEmpty().isLength({min:4});

  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null,false,req.flash('error',messages));
  }
  User.findOne({'email':email},function(err,user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null,false,{message:'User not found'});
    }
    if(!user.validatePassword(password)){
      return done(null,false,{message:'Wrong password!'});
    }
    return done(null,user);
  });
}));
