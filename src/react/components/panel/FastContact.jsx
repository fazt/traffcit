import React, { Component } from 'react';

class FastContact extends Component {
  render() {
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Fast Contact</dtitle>
          <hr/>
          <div className="cont">
            <form action="#get-in-touch" method="POST" id="contact">
              <input type="text" className="form-control" name="contactname" placeholder="Name"/>
              <input type="text" className="form-control" name="email" placeholder="Email"/>
              <div className="textarea-container">
              <textarea id="message" className="form-control" name="message" placeholder="Message"></textarea>
              </div>
              <input type="submit" id="submit" name="submit" value="Send"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FastContact;
