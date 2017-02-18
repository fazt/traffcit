import React, { Component } from 'react';
import { Link } from 'react-router';

class Serial extends Component{
  render(){
    return(
      <div className="col-sm-3 col-lg-3">

        <div className="dash-unit">
          <dtitle>Comunicacion Serial</dtitle>
          <hr/>
          <div className="text-center">
            <a href="/serial" className="btn3d btn btn-warning">Provar Comunicación Serial</a>
            <a href="/dev/emit" className="btn3d btn btn-primary">Iniciar Monitorizacion</a>
            <a href="/dev/receive" className="btn3d btn btn-success">Monitoreo</a>
            <Link to="/tweets" className="btn3d btn btn-info">Tweets</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Serial;
