import express from 'express';
import csrf from 'csurf';

const router = express.Router();

router.use(csrf());

router.get('/',(req,res,next)=>{
  res.render('index');
});

router.get('/detail',(req,res)=>{
  res.render('detail');
});

export default router;
