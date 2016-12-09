import React, { Component } from 'react';
import { render } from 'react-dom';

import HalfBlock from './HalfBlock.jsx';
import UserProfile from './UserProfile.jsx'
class App extends Component{
  render() {
    return(
      <div>


        <div className="row">
          <div className="col-sm-3 col-lg-3">

      {/*  BARS CHART - lineandbars.js file */}
            <HalfBlock title="Stock Information">
               <div className="info-aapl">
                <h4>AAPL</h4>
                <ul>
                  <li><span className="orange" style={{height: "37.5%"}}></span></li>
                  <li><span className="orange" style={{height: "47.5%"}}></span></li>
                  <li><span className="orange" style={{height: "70%"}}></span></li>
                  <li><span className="orange" style={{height: "85%"}}></span></li>
                  <li><span className="green" style={{height: "75%"}}></span></li>
                  <li><span className="green" style={{height: "50%"}}></span></li>
                  <li><span className="green" style={{height: "15%"}}></span></li>
                </ul>
              </div>
            </HalfBlock>

      {/* TO DO LIST  */}
            <HalfBlock title="TodoList">
              <p><bold>13</bold> | Pending Tasks</p>
              <div className="progress">
                  <div className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100" style={{Width:"60%"}}>
                    <span className="sr-only">60% Complete</span>
                  </div>
               </div>
            </HalfBlock>
          </div>

          <div className="col-sm-3 col-lg-3">

      {/*  LIVE VISITORS BLOCK */}
            <HalfBlock title="LIVE VISITORS">
              <div className="cont">
              <p><bold>388</bold></p>
              <p><img src="/img/up-small.png" alt=""/> 412 Max. | <img src="assets/img/down-small.png" alt=""/> 89 Min.</p>
              </div>
            </HalfBlock>

      {/* <!-- PAGE VIEWS BLOCK --> */}
            <HalfBlock title="PAGE VIEWS">
              <div className="cont">
              <p><bold>145.0K</bold></p>
              <p><img src="/img/up-small.png" alt=""/> 23.88%</p>
              </div>
            </HalfBlock>
          </div>

          <div className="col-sm-3 col-lg-3">
      {/* <!-- TOTAL SUBSCRIBERS BLOCK --> */}
            <HalfBlock title="TOTAL SUBSCRIBERS">
              <p><bold>14.744</bold></p>
              <p>98 Subscribed Today</p>
            </HalfBlock>

      {/* FOLLOWERS BLOCK */}
            <HalfBlock title="PAGE VIEWS">
              <p><bold>17.833 Followers</bold></p>
              <p>@SomeUser</p>
            </HalfBlock>
          </div>


        <div className="col-sm-3 col-lg-3">

            <div className="dash-unit">
              <dtitle>Maps</dtitle>
              <hr/>
              <div className="cont">
              <div className="info-user">
                <a href="/user/map"><span aria-hidden="true" className="fa fa-globe" style={{fontSize: '110px'}}></span></a>
              </div>
              <br/>
              <div className="text">
                <p>
                  You can Search the rasberry points
                </p>
              </div>
            </div>
            </div>

        </div>
      </div>
    </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
