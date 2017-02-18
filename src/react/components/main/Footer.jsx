import React, { Component } from 'react';

let Footer = (props) => {
  return (
    <div id="footerwrap">
        <footer className="clearfix"></footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
            <p>
              <img src="/img/traffcity.png" style={{width:'15%'}} alt=""/>
            </p>
            <p>TrafcityJs - Crafted With Love - Copyright {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
