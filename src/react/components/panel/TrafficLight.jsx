import React, { Component } from 'react';
import { Link } from 'react-router';

class TrafficLight extends Component{
  render() {
    return(
      <div className="half-unit">
        <dtitle>Semaforo Control Panel</dtitle>
        <hr/>
        <Link to="/trafficlight" className="btn btn-success btn-lg btn3d">
        Control Panel Test
        </Link>
      </div>
    );
  }
}

export default TrafficLight;
