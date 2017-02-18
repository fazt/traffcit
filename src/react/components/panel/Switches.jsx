import React, { Component } from 'react';

class Switches extends Component {
  render() {
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
              <dtitle>Switches</dtitle>
              <hr/>
              <div className="info-user">
            <span aria-hidden="true" className="li_params fs2"></span>
          </div>
          <br/>
          <div className="switch">
            <input type="radio" className="switch-input" name="view" value="on" id="on" checked=""/>
            <label for="on" className="switch-label switch-label-off">On</label>
            <input type="radio" className="switch-input" name="view" value="off" id="off"/>
            <label for="off" className="switch-label switch-label-on">Off</label>
            <span className="switch-selection"></span>
          </div>
          <div className="switch switch-blue">
            <input type="radio" className="switch-input" name="view2" value="week2" id="week2" checked=""/>
            <label for="week2" className="switch-label switch-label-off">Week</label>
            <input type="radio" className="switch-input" name="view2" value="month2" id="month2"/>
            <label for="month2" className="switch-label switch-label-on">Month</label>
            <span className="switch-selection"></span>
          </div>

          <div className="switch switch-yellow">
            <input type="radio" className="switch-input" name="view3" value="yes" id="yes" checked=""/>
            <label for="yes" className="switch-label switch-label-off">Yes</label>
            <input type="radio" className="switch-input" name="view3" value="no" id="no"/>
            <label for="no" className="switch-label switch-label-on">No</label>
            <span className="switch-selection"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Switches;
