import React, { Component } from 'react';

class Stats extends Component{
  render(){
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Last 30 Days Stats</dtitle>
          <hr/>
          <br/>
          <br/>
            <div className="flexslider">
        <ul className="slides">
          <li><img src="/img/slide01.png" alt="slider"/></li>
          <li><img src="/img/slide02.png" alt="slider"/></li>
        </ul>
          </div>
        <div className="cont">
        <p>StatCounter Information</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Stats;
