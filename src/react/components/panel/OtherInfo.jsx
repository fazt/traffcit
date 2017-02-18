import React, { Component } from 'react';

class Serial extends Component{
  render(){
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Other Information</dtitle>
          <hr/>
          <div className="section-graph">
            <div id="importantchart"></div>
            <br/>
            <div className="graph-info">
              <i className="graph-arrow"></i>
              <span className="graph-info-big">634.39</span>
              <span className="graph-info-small">+2.18 (3.71%)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Serial;
