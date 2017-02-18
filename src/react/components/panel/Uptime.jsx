import React, { Component } from 'react';
import request from 'superagent';

class Uptime extends Component{
  constructor(){
    super();
    this.state = {
      uptime: 0
    }
  }

  componentDidMount(){
    request
      .get('/api/uptime/')
      .end((err, res) => {
        let data = JSON.parse(res.text);
        this.setState({uptime: data.uptime});
      });
  }
  render() {
    return(
      <div className="half-unit">
        <dtitle>Server Uptime</dtitle>
        <hr/>
        <div className="cont">
          <p><img src="/img/up.png" alt=""/> <bold>Up</bold> | {this.state.uptime} 25 ms.</p>
      </div>
      </div>
    );
  }
}

export default Uptime;
