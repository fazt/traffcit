import express from 'express';
import csrf from 'csurf';
import Incidence from '../models/incidences';

const router = express.Router();
var controllers = require('../controllers/index.server.controller');

router.post('/alert-citizen', (req, res, next) => {

  let myIncidence = new Incidence;
  myIncidence.title = req.body.title;
  myIncidence.description = req.body.description;

  myIncidence.save(function () {
    var io = req.app.get('socketio');
    io.emit('hi');
    res.end('enviado');
  });
});

router.use(csrf());

router.get('/',controllers.renderIndexPage);

router.get('/detail',(req,res)=>{
  res.render('detail');
});

router.get('/alert-citizen', (req, res) => {
  res.render('alert-citizen',{crsfToken: req.csrfToken()});
});



export default router;
