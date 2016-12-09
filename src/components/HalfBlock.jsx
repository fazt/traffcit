import React, { Component } from 'react';

class HalfBlock extends Component{
  render() {
    const title = this.props.title;
    const children = this.props.children;
    return(

      <div className="half-unit">
        <dtitle>{title}</dtitle>
        <hr/>
        <div className="cont">
          {children}
        </div>
      </div>
    );
  }
}

export default HalfBlock;
