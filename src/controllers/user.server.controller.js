
module.exports = {
    getDashboard: getDashboard
  , getMap: getMap
  , getLogout: getLogout
  , getSignin: getSignin
  , getSignup: getSignup
  , getCreateUser: getCreateUser
};

function getDashboard (req, res) {
  res.render('dashboard/panel');
}

function getMap(req,res) {
  res.render('user/map');
}

function getLogout (req,res,next) {
  req.logout();
  res.redirect('/');
}

function getSignin(req,res,next) {
  var messages = req.flash('error');
  res.render('user/signin',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
}

function getSignup (req,res,next) {
  var messages = req.flash('error');
  res.render('user/signup',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
}

function getCreateUser(req, res, next) {
  res.render('user/create-user', {crsToken: req.csrfToken()});
}
