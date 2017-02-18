const five  = require('johnny-five');


class TrafficLight {
  constructor(redNumber, yellowNumber, greenNumber) {
    this.signalRed = new five.Led(redNumber);;
    this.signalYellow = new five.Led(yellowNumber);;
    this.signalGreen = new five.Led(greenNumber);;

    this.signalState = 0;
    this.timePass = 2000;
    this.timePassYellow = 3000;

    this.stop = false;
    this.toggleLight = false;
  }

  secuence() {
    if (!this.stop) {
      switch (this.signalState) {
        case 0:
          console.log("Red Light");
          this.signalRed.on();
          this.signalYellow.off();
          this.signalGreen.off();
          this.signalState = 1;
          setTimeout(() => this.secuence(),this.timePass);
          break;
        case 1:
          console.log("Yellow Light");
          this.signalRed.off();
          this.signalYellow.on();
          this.signalGreen.off();
          this.signalState = 2;
          setTimeout(() => this.secuence(),this.timePassYellow);
          break;
        case 2:
          console.log("Green Light");
          this.signalRed.off();
          this.signalYellow.off();
          this.signalGreen.on();
          this.signalState = 3;
          setTimeout(() => this.secuence(),this.timePass);
          break;
        case 3:
          console.log("traffic crossing Y");
          this.signalRed.off();
          this.signalYellow.on();
          this.signalGreen.off();
          this.signalState = 0;
          setTimeout(() => this.secuence(),2000);
          break;
      }
    }
  }

  stopSecuence(){
    this.stop = true;
  }

  startSecuence(){
    this.stop = false;
    this.secuence();
  }

  allLightsOff(){
    this.signalRed.off();
    this.signalYellow.off();
    this.signalGreen.off();
  }

  allLightsOn(){
    this.signalRed.on();
    this.signalYellow.on();
    this.signalGreen.on();
  }

  // LEDS - RED
  lightRedOn(){
    this.signalRed.on();
  }

  lightRedOff(){
    this.signalRed.off();
  }

  lightRedToggle(){
    if (!this.toggleLight) {
      this.lightRedOn();
      this.toggleLight = !this.toggleLight;
    }else{
      this.lightRedOff();
      this.toggleLight = !this.toggleLight;
    }
  }

  // LEDS - GREEN
  lightGreenOn(){
    this.signalGreen.on();
  }

  lightGreenOff(){
    this.signalGreen.off();
  }

  lightGreenToggle(){
    if (!this.toggleLight) {
      this.lightGreenOn();
      this.toggleLight = !this.toggleLight;
    }else{
      this.lightGreenOff();
      this.toggleLight = !this.toggleLight;
    }
  }

  // LEDS - GREEN
  lightYellowOn(){
    this.signalYellow.on();
  }

  lightYellowOff(){
    this.signalYellow.off();
  }

  lightYellowToggle(){
    if (!this.toggleLight) {
      this.lightYellowOn();
      this.toggleLight = !this.toggleLight;
    }else{
      this.lightYellowOff();
      this.toggleLight = !this.toggleLight;
    }
  }

}

module.exports = TrafficLight;
