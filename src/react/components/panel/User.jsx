import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

class User extends Component{
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    let self = this;
    request
      .get('http://localhost:3000/api/currentuser')
      .end((err,res)=>{
        self.setState({
          country: res.body.country,
          email: res.body.email,
          firstName: res.body.firstName,
          lastName: res.body.lastName,
          userName: res.body.userName
        });
      });
  }

  render() {

    let {firstName, lastName, userName, email, country} = this.state;

    return(
    <div className="col-sm-3 col-lg-3">
      <div className="dash-unit">
        <dtitle>Perfil de Usuario</dtitle>
        <hr/>
        <div className="thumbnail">
          {/* <!--  http://www.gravatar.com/avatar/{{user.gravatar}}?d=monsterid&s=45--> */}
          {/* <!-- <img src="http://www.gravatar.com/avatar/{{user.gravatar}}" alt="username" class="img-circle"> --> */}
          <img src="/img/traffcity.png" style={{width:'20%'}} alt="username" className="img-circle"/>
        </div>
        <h1>{firstName}</h1>
        <h3>{email}</h3>
        <h3>{country}</h3>
        <br/>
        <div className="info-user">
          <Link to="/users"><span aria-hidden="true" className="li_user fs1" title="My Account"></span></Link>
          <span aria-hidden="true" className="li_settings fs1" title="Settings"></span>
          <span aria-hidden="true" className="li_mail fs1" title="Email"></span>
          <span aria-hidden="true" className="li_key fs1" title="Change Password"></span>
        </div>
      </div>
    </div>
    )
  }
}

export default User;
