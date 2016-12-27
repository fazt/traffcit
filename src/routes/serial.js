import express from 'express';

module.exports = function (app, io) {
  app.get('/serial', function (req, res) {
    res.render('serial');
  });

var SerialPort = require('serialport');
// var SerialPort = serialPort.SerialPort;

var mySerial = new SerialPort("/dev/ttyACM1", {
  baudrate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

mySerial.on('open', function() {
  console.log('puerta serial abierta');
});
mySerial.on('data', function (data) {
  io.sockets.emit('arduino data', {
    valor: data
  });
  // console.log(data);
});
}
// router.get('/', function (req, res) {
//   ;
// });

// export default router;
