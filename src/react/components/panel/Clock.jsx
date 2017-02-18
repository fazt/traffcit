import React, { Component } from 'react';

class Clock extends Component{
  constructor(){
    super();
    this.state = {
      timeString: ''
    };
  }

  pad(x) {
    return x < 10 ? '0'+x : x;
  };

  componentWillMount(){
    var d = new Date();

    var h = this.pad(d.getHours());
    var m = this.pad( d.getMinutes() );
    var s = this.pad( d.getSeconds() );

    this.setState({
      timeString: [h,m,s].join(':')
    });
  }

  componentDidMount(){
    // setInterval(()=> {
    //
    //   // this.setState({
    //   //   timeString: this.state.timeString + 1
    //   // });
    // }, 1000);
  }

  render() {
    var { timeString } = this.state;
    return(
      <div className="half-unit">
        <dtitle>Local Time</dtitle>
        <hr/>
        <div className="clockcenter">
          <div className="digiclock">{ timeString }</div>
        </div>
      </div>
    );
  }
}

export default Clock;
