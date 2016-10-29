import express from 'express';
import csrf from 'csurf';
import passport from 'passport';
import disk from 'diskusage';

const router = express.Router();

router.use(csrf());

router.get('/dashboard',isLoggedIn,(req,res)=>{
  disk.check('/', function(err, info) {
    var giga = 1024*1024*1024;
    var diskFree =(info.free/giga).toFixed(2);
    var diskInfo = (info.available/giga).toFixed(2);
    var diskTotal = (info.total/giga).toFixed(2);

    res.render('dashboard/panel',{
      diskSpace:{
        available: diskInfo,
        free: diskFree,
        total: diskTotal
      },
      user:req.user
    });
  });
});

router.get('/map',isLoggedIn,(req,res)=>{
  res.render('user/map');
});

router.get('/logout',isLoggedIn,function(req,res,next) {
  req.logout();
  res.redirect('/');
});

router.use('/',notLoggedIn,function(req,res,next) {
  next();
});

router.get('/signin',(req,res,next)=>{
  var messages = req.flash('error');
  res.render('user/signin',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

router.post('/signin',passport.authenticate('local.signin',{
  successRedirect: '/user/dashboard',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

router.get('/signup',(req,res,next)=>{
  var messages = req.flash('error');
  res.render('user/signup',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

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
