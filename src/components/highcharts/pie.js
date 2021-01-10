import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class HPie extends Component {
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

    const dataSource = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "My title",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      colors: colors,
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "Venezuela",
              y: 290,
            },
            {
              name: "Saudi",
              y: 260,
            },
            {
              name: "Canada",
              y: 180,
            },
            {
              name: "Iran",
              y: 140,
            },
            {
              name: "Russia",
              y: 115,
            },
            {
              name: "UAE",
              y: 100,
            },
            {
              name: "US",
              y: 30,
            },
            {
              name: "China",
              y: 30,
            },
          ],
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={dataSource} />;
  }
}
export default HPie;
