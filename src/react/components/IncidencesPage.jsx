import React, { Component } from 'react';

import request from 'superagent';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Incidences extends Component {
  constructor(){
    super();
    this.state = {
      incidences: []
    };
  }
  componentDidMount(){
    request
      .get('http://localhost:3000/api/incidencesData')
      .end((err, res) => {
        this.setState({incidences: res.body});
      });
  }
  render() {
    return(
      <BootstrapTable data={this.state.incidences} striped={true} hover={true}>
        <TableHeaderColumn dataField="_id" isKey={true} hidden={true} dataSort={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="title" dataSort={true}>Titulo</TableHeaderColumn>
        <TableHeaderColumn dataField="description" dataSort={true}>Descripccion</TableHeaderColumn>
        <TableHeaderColumn dataField="date" dataSort={true}>Fecha</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

module.exports = Incidences;
