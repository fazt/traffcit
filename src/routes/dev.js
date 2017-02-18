import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('three');
});
router.get('/serial-port', (req, res) => {
  res.render('serial-port');
});

router.get('/one',(req, res) => {
  res.render('one');
});
router.get('/two',(req, res) => {
  res.render('two');
});
router.get('/emit',(req, res) => {
  res.render('emit');
});
router.get('/receive',(req, res) => {
  res.render('receive');
});
export default router;
