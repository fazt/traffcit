import React, { Component } from 'react';

class Maps extends Component{
  render(){
    return(
      <div className="col-sm-3 col-lg-3">

          <div className="dash-unit" style={{padding:"5px"}}>
            <dtitle>Mapas</dtitle>
            <hr/>
            <div className="cont">
            <div className="info-user">
              <a href="/user/map"><span aria-hidden="true" className="fa fa-globe" style={{fontSize: '110px'}}></span></a>
            </div>
            <br/>
            <div className="text">
              <a href="/user/map" className="btn btn-block btn-primary">Mapas de Usuarios</a>
              <a href="/traffic-light/map" className="btn btn-block btn-success">Mapas de Semaforos</a>
            </div>
          </div>
          </div>

      </div>
    );
  }
}

export default Maps;
