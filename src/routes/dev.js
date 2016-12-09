import express from 'express';
const router = express.Router();

var SerialPort = require('serialport');
// var SerialPort = serialPort.SerialPort;

var mySerial = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

mySerial.on('open', function() {
  console.log('puerta serial abierta');
});
mySerial.on('data', function (data) {
  console.log(data);
});


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
