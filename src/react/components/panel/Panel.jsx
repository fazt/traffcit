import React, { Component } from 'react';

import HalfBlock from './HalfBlock.jsx';
import Chat from './Chat.jsx';

import DiskSpace from './DiskSpace.jsx';
import Maps from './Maps.jsx';
import Incidences from './Incidences.jsx';
import Uptime from './Uptime.jsx';
import Serial from './Serial.jsx';
import OtherInfo from './OtherInfo.jsx';
import BandWidth from './BandWidth.jsx';
import LastMonth from './LastMonth.jsx';
import Stats from './Stats.jsx';
import LastUser from './LastUser.jsx';
import Information from './Information.jsx';
import FastContact from './FastContact.jsx';
import GaugeChart from './GaugeChart.jsx';
import User from './User.jsx';
import Clock from './Clock.jsx';
import Weather from './Weather.jsx';
import TrafficLight from './TrafficLight.jsx';

class Main extends Component{
  render() {
    return(
      <div>
        <div className="row">
          <User/>
          <div className="col-sm-3 col-lg-3">
            <Clock/>
            <TrafficLight/>
          </div>
          <Serial/>
          <div className="col-sm-3 col-lg-3">
            <Uptime/>
            <Incidences/>
          </div>
          <DiskSpace/>
          <Weather/>
          <Maps/>
          <OtherInfo/>
          <BandWidth/>
          <LastMonth/>
          <Stats/>
          <LastUser/>
          <Information/>
          <FastContact/>
          <GaugeChart/>
      </div>
      <Chat/>
    </div>
      );
  }
}

export default Main;
