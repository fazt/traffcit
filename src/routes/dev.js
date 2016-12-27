import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('three');
});
router.get('/chat', (req, res) => {
  res.render('chat');
});
router.get('/serial-port', (req, res) => {
  res.render('serial-port');
});
export default router;
