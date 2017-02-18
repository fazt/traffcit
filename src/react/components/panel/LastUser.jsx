import React, { Component } from 'react';
import request from 'superagent';

class LastUser extends Component{
  constructor(){
    super();
    this.state = {
      country: '',
      firstName: '',
      lastName: ''
    };
  }

  componentDidMount(){
    request
      .get('/api/lastuser')
      .end((err, res)=>{

        var data = res.body;
        this.setState({
          country: data.country,
          firstName: data.firstName,
          lastName: data.lastName
        });

      });
  }

  render(){
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="half-unit">
            <dtitle>Last Registered User</dtitle>
            <hr/>
              <div className="cont2">
                <img src="/img/user-avatar.jpg" alt=""/>
                <br/>
                <br/>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p><bold>{this.state.country}</bold></p>
              </div>
        </div>
        <div className="half-unit">
            <dtitle>Registrar Incidencia</dtitle>
            <hr/>
            <div className="cont">
              <a href="#myModal" role="button" className="btn3d btn btn-link" data-toggle="modal">
                Agregar Una
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default LastUser;
