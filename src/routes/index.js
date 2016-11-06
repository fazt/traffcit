import express from 'express';
import csrf from 'csurf';

const router = express.Router();
var controllers = require('../controllers/index.server.controller');

router.use(csrf());

router.get('/',controllers.renderIndexPage);

router.get('/detail',(req,res)=>{
  res.render('detail');
});

router.get('/alert-citizen', (req, res) => {
  res.render('alert-citizen',{crsfToken: req.csrfToken()});
});

router.post('/alert-citizen', (req, res, next) => {
  console.log(req.body);
  next();
});

export default router;
