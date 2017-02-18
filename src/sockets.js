const io    = require('socket.io');
const five  = require('johnny-five');
var TrafficLight     = require('./lib/trafficLight');


var Twit = require('twit');

var T = new Twit({
  consumer_key: 'IPhOHf7sOOrBNPB4QXazXMhY4',
  consumer_secret: 'SZFxdMVfwRSFdPeA3e2wlko0ir7wZZxTl3JSIePTJuqqftjhQN',
  access_token: '3407656973-YkDM6MuRcagi6dYNkhhPkTGfSc6UQpapk6aie3a',
  access_token_secret: 'gN9mzts4zDtxaOKV58vDE6OHiG6fHAHUpFvIycwtVooR4'
});

var stream = T.stream('statuses/filter', { track: ['traffic','transit']});

module.exports = function (io) {
  var ledRed = 13;
  var ledYellow = 12;
  var ledGreen = 11;
  var trafficLight;
  var board;

  io.on('connection', function (socket) {
    console.log('client:connected');

    socket.on('stream', function (image) {
      socket.broadcast.emit('stream', image);
    });

    
    socket.broadcast.emit('chat:new-user-alert','nuevo usuario conectado');

    socket.on('tweet', function () {
      stream.on('tweet', function(tweet) {
        console.log(tweet);
        socket.emit('info', { tweet: tweet});
      });
    });

    socket.on('chat:new-message', function (data) {
      io.emit('chat:receive-new-message',data);
    });


    socket.on('client:connect', function () {
      console.log('client:connect');
      board = new five.Board({
        repl: false
      });
      board.on('ready', function () {
        io.emit('board:ready');
      });
    });

    socket.on('hardware:test-connection', function () {
      if(!board) {
        socket.emit('hardware:disconnect');
      }else{
        if (!board.isReady) {
          socket.emit('hardware:not_connected_yet')
        } else {
          trafficLight = new TrafficLight(ledRed, ledYellow, ledGreen);
          socket.emit('hardware:connected');
        }
      }
    });

    socket.on('client:disconnect', function () {
      console.log('client:disconnect');
    });
    // red event
    socket.on('client:red', function () {
      console.log('client:red');
      trafficLight.lightRedToggle();
    });

    //yellow event
    socket.on('client:yellow', function () {
      console.log('client:yellow');
      trafficLight.lightYellowToggle();
    });

    //green event
    socket.on('client:green', function () {
      console.log('client:green');
      trafficLight.lightGreenToggle();
    });

    socket.on('client:secuence', function () {
      console.log('client:secuence');
      trafficLight.startSecuence();
    });

    socket.on('client:stop-secuence', function () {
      trafficLight.stopSecuence();
    });
    socket.on('client:off', function () {
      trafficLight.allLightsOff();
    });
    socket.on('client:on', function () {
      trafficLight.allLightsOn();
    });
  });

  return io;
}
