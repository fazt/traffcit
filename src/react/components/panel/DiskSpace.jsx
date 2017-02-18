import React, { Component } from 'react';

import request from 'superagent';
import {Doughnut} from 'react-chartjs-2';

class DiskSpace extends Component{

  constructor(){
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    request
      .get('/api/diskspace')
      .end((err, res)=>{
        let data = JSON.parse(res.text)
        let tempData = [];
        tempData.push(data.free);
        tempData.push(data.available);
        tempData.push(data.total);

        this.setState({data: tempData});
      });
  }

  render() {

    var data = {
    labels: [
        "Libre",
        "Disponible",
        "Total"
    ],
    datasets: [
      {
        data: this.state.data,
        backgroundColor: [
          "#36A2EB",
          "#212529",
          "#1862ab"
        ],
        hoverBackgroundColor: [
          "#0A7285",
          "#36A2EB",
          "#72c3fc"
        ]
      }],
    options: {
      responsive: true
    }
};
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Espacio en Disco</dtitle>
          <hr/>
          <Doughnut
            ref='chart'
            data={data}
            height={240}
          />
        </div>
      </div>
    );
  }
}

export default DiskSpace;
