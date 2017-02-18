import React, { Component } from 'react';

class Serial extends Component{
  render(){
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Promedio de Gastos por Mes</dtitle>
          <hr/>
          <div className="cont">
        <p><bold>$879</bold> | <ok>Aprovado</ok></p>
        <br/>
        <p><bold>$377</bold> | Pendiente</p>
        <br/>
        <p><bold>$156</bold> | <bad>Denegado</bad></p>
        <br/>
        <p><img src="/img/up-small.png" alt=""/> 12% Comparacion del Ultimo Mes</p>

        </div>

        </div>
      </div>
    );
  }
}

export default Serial;
