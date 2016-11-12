import express from 'express';
import csrf from 'csurf';
import passport from 'passport';


const router = express.Router();

var usercontroller = require('../controllers/user.server.controller');

router.use(csrf());

router.get('/dashboard',isLoggedIn, usercontroller.getDashboard);
router.get('/map',isLoggedIn, usercontroller.getMap);
router.get('/logout',isLoggedIn, usercontroller.getLogout);

router.use('/',notLoggedIn,function(req,res,next) {
  next();
});

router.get('/signin', usercontroller.getSignin);

// curl -X POST -d {""}
router.post('/signin',passport.authenticate('local.signin',{
  successRedirect: '/user/dashboard',
  failureRedirect: '/user/signin',
  failureFlash: true
}), function (req, res, next){
  req.welcome = true;
  next();
});

router.get('/signup', usercontroller.getSignup);

router.post('/signup',passport.authenticate('local.signup',{
  successRedirect: '/user/dashboard',
  failureRedirect: '/user/signup',
  failureFlash: true
}));


export default router;

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req,res,next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
