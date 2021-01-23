import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class HArea extends Component {
  render() {
    const colors = [
      "#0A507B",
      "#5AD8A6",
      "#5B8FF9",
      "#F6BD16",
      "#E8684A",
      "#6DC8EC",
      "#9270CA",
      "#FF9D4D",
      "#269A99",
      "#FF99C3",
    ];

    const options = {
      chart: {
        type: "areaspline",
      },
      title: {
        text: "Incidents Trend",
      },
      legend: {
        align: "left",
        verticalAlign: "bottom",
      },
      xAxis: {
        categories: [
          "2019-01",
          "2019-02",
          "2019-03",
          "2019-04",
          "2019-05",
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
        ],
      },
      yAxis: {
        title: {
          text: "",
        },
      },
      tooltip: {
        shared: true,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "Total",
          data: [1100, 450, 940, 990, 1100, 700, 1000, 1100, 1200],
        },
        {
          name: "Tehran",
          data: [700, 150, 400, 700, 600, 350, 450, 600, 500],
        },
        {
          name: "Isfahan",
          data: [400, 300, 540, 290, 500, 350, 550, 500, 700],
        },
      ],
      colors: colors,
    };

    return (
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Fragment>
    );
  }
}
export default HArea;
