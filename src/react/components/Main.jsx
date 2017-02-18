import React, { Component } from 'react';

import Footer from './main/Footer.jsx';

let Main = (props) => {
  return(
    <div>
      {props.children}
      <Footer/>
    </div>
  );
};

export default Main;
