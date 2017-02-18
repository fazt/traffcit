import React, { Component } from 'react';

import {Doughnut} from 'react-chartjs-2';

class BandWidth extends Component{
  render() {
    var data = {
    labels: [
        "Libre",
        "Disponible"
    ],
    datasets: [
      {
        data: [50,50],
        backgroundColor: [
          "#36A2EB",
          "#b2c831",
        ],
        hoverBackgroundColor: [
          "#b2c831",
          "#36A2EB"
        ]
      }]
};
let options =  {
  responsive:true,
  cutoutPercentage:80,
}
    return(
      <div className="col-sm-3 col-lg-3">
        <div className="dash-unit">
          <dtitle>Site Bandwidth</dtitle>
          <hr/>
            <Doughnut
              ref='load'
              data={data}
              height={200}
              options={options}
            />
          <h2>45%</h2>
        </div>
      </div>
    );
  }
}

export default BandWidth;
