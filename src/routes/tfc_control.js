import express from 'express';
const { Board, Led } = require('johnny-five');


module.exports = function (app, io) {
  app.get('/tfc_list/general_restart', function (req, res) {
    const board = new Board();
    board.on('ready', function () {
      console.log('ready');
      // leds
      var signalRed   = new Led(13);
      var signalYellow = new Led(12);
      var signalGreen  = new Led(11);

      var signalState = 0;
      var timePass = 6000;
      var timePassYellow = 2000;

      function trafficSignal() {
        switch (signalState) {
          case 0:
            console.log("Red Light");
            signalRed.on();
            signalYellow.off();
            signalGreen.off();
            signalState = 1;
            setTimeout(trafficSignal,timePass);
            break;
          case 1:
            console.log("Yellow Light");
            signalRed.off();
            signalYellow.on();
            signalGreen.off();
            signalState = 2;
            setTimeout(trafficSignal,timePassYellow);
            break;
          case 2:
            console.log("Green Light");
            signalRed.off();
            signalYellow.off();
            signalGreen.on();
            signalState = 3;
            setTimeout(trafficSignal,timePass);
            break;
          case 3:
            console.log("traffic crossing Y");
            signalRed.off();
            signalYellow.on();
            signalGreen.off();
            signalState = 0;
            setTimeout(trafficSignal,2000);
            break;
        }
      };

      trafficSignal();
    });

    res.end('<h1 class="text-center">Restarded!</h1>');
  });
};
