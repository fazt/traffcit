import React, { Component } from 'react';

class GaugeChart extends Component {
  render() {
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Gauge Chart</dtitle>
            <hr/>
            <div className="info-user">
              <span aria-hidden="true" className="li_lab fs2"></span>
            </div>
            <canvas id="canvas" width="300" height="300"></canvas>
        </div>
      </div>
    );
  }
}

export default GaugeChart;
