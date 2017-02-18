import React, { Component } from 'react';
import { Link } from 'react-router';


class TrafficlightPage extends Component {
  constructor(){
    super();
    this.state = {
      socket: window.io('http://localhost:3000')
    }
  }

  componentDidMount(){
    this.state.socket.on('board:ready', function () {
      alertify.success('Semaforo Listo para conectar!');
    });

    this.state.socket.on('hardware:connected', function () {
      alertify
        .alert("Conectando al Semaforo...", function(){
          alertify.message('Hardware Conectado satisfactoriamente!');
        });
      });

    this.state.socket.on('hardware:not_connected_yet', function () {
       alertify.error('Hardware No Conectado Aun, esperando Conexion...');
    });

    this.state.socket.on('hardware:disconnect', function () {
       alertify.error('Hardware Desconectado.');
    });

  }
  render() {
    return(
      <div className="main">

          <div className="row">
            <div className="form-group">
              <div className="col-xs-12">
                <Link to="/" className="btn btn-link btn-lg btn3d">
                  Inicio <span className="glyphicon glyphicon-globe"></span>
                </Link>
                <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-7">
              <div className="panel panel-primary">
                <div className="row">
                  <div className="col-xs-12">
                    <h4>Panel de Control de Semaforo</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="row">
                      <div className="col-sm-12">

                        <div className="form-group">
                          <div className="col-sm-12">
                            <button
                              onClick={() => this.state.socket.emit('client:connect')}
                              className="btn-block btn btn-success btn-lg btn3d">
                              Iniciar Conexión
                            <span className="glyphicon glyphicon-cloud"></span>
                            </button>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-12">
                            <button
                              onClick={() => this.state.socket.emit('hardware:test-connection')}
                              className="btn-block btn btn-info btn-lg btn3d">
                            Test de Conexión
                            <span className="glyphicon glyphicon-cloud"></span>
                            </button>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-12">
                            <button
                              onClick={()=> this.state.socket.emit('client:red')}
                               type="button" className="btn btn-danger btn-lg btn3d">
                              Luz Roja <span className="glyphicon glyphicon-globe"></span>
                            </button>
                            <button
                              onClick={() => this.state.socket.emit('client:green')}
                              type="button" className="btn btn-success btn-lg btn3d">
                              Luz Verde <span className="glyphicon glyphicon-globe"></span>
                            </button>
                            <button
                              onClick={()=> this.state.socket.emit('client:yellow')}
                              type="button" className="btn btn-warning btn-lg btn3d">
                              Luz Amarilla <span className="glyphicon glyphicon-globe"></span>
                            </button>

                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-12">
                            <button
                              onClick={()=>this.state.socket.emit('client:secuence')}
                              type="button" className="btn3d btn btn-default btn-lg">
                              <span className="glyphicon glyphicon-download-alt"></span>
                              Iniciar/Continuar Secuencia Normal
                            </button>
                            <button
                              onClick={() => this.state.socket.emit('client:stop-secuence')}
                              type="button" className="btn3d btn btn-white btn-lg">
                              <span className="glyphicon glyphicon-tag"></span>
                              Parar Secuencia
                            </button>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-sm-12">
                            <button
                              onClick={() => this.state.socket.emit('client:on')}
                              type="button" className="btn btn-primary btn-lg btn3d">
                              Encender Todos<span className="glyphicon glyphicon-ok"></span>
                            </button>
                            <button
                              onClick={() => this.state.socket.emit('client:off')}
                              type="button" className="btn btn-danger btn-lg btn3d">
                              Apagar Todos <span className="glyphicon glyphicon-remove"></span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </form>
                  <div className="row text-center">
                    <button type="button" className="btn3d btn btn-default">Reset Password</button>
                    <button type="button" className="btn3d btn btn-default">Manage Services</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-lg-5">
              <div className="panel panel-primary">
                <div className="row">
                  <div className="col-xs-12">
                    <h4>Registrar Test</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="row">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/>
                           Registre los test para proveer de datos
                           de analiticas luego.
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

module.exports = TrafficlightPage;
