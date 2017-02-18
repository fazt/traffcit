import React, { Component } from 'react';

import request from 'superagent';
import { Link } from 'react-router';

class Incidences extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    request
      .get('/api/incidences/')
      .end((err, res) => {
        let data = JSON.parse(res.text);
        this.setState({count: data.count});
      });
  }
  render() {
    return(
      <div className="half-unit">
        <dtitle>Incidencias</dtitle>
        <hr/>
        <div className="cont">
          <p>
            <span aria-hidden="true" className="li_lab fs2"></span>
            <bold>
              {this.state.count}
               <Link to="/incidences">Incidentes</Link>
            </bold>
          </p>
        </div>
      </div>
    );
  }
}

export default Incidences;
