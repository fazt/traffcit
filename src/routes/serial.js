import express from 'express';
var SerialPort = require('serialport');


module.exports = function (app, io) {
  app.get('/serial', function (req, res) {

    res.render('serial');
    // var SerialPort = serialPort.SerialPort;

    var mySerial = new SerialPort("/dev/ttyACM0", {
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
    });

    mySerial.on('error', function (error) {
      console.log(error);
      // res.end('serial Error!');
    });
  });
}
