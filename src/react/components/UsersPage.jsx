import React, { Component } from 'react';

import request from 'superagent';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class UsersPage extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount(){
    request
      .get('http://localhost:3000/api/users')
      .end((err, res) => {
        this.setState({users: res.body});
      });
  }
  render() {
    return(
      <BootstrapTable data={this.state.users} striped={true} hover={true}>
        <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataSort={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="userName" dataSort={true}>Nombre de Usuario</TableHeaderColumn>
        <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
        <TableHeaderColumn dataField="lastName" dataSort={true}>Apellidos</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

module.exports = UsersPage;
