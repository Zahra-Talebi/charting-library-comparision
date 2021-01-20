import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class HStackedBar extends Component {
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
        type: "bar",
      },
      title: {
        text: "Incident Types By SIEM",
      },
      xAxis: {
        categories: [
          "Tehran",
          "Isfahan",
          "Shiraz",
          "Mashhad",
          "Tabriz",
          "Ahvaz",
        ],
      },
      yAxis: {
        min: 0,
        title: {
          text: "title",
        },
      },
      legend: {
        reversed: true,
      },
      plotOptions: {
        series: {
          stacking: "normal",
        },
      },

      colors: colors,
      series: [
        {
          name: "Other",
          data: [800, 800, 800, 1200, 30, 1200],
        },
        {
          name: "Sniff",
          data: [200, 100, 1200, 600, 1200, 30],
        },
        {
          name: "Port Scan",
          data: [250, 1100, 700, 10, 120, 900],
        },
        {
          name: "DOS",
          data: [1100, 800, 900, 600, 800, 900],
        },
        {
          name: "Exploit",
          data: [20, 800, 300, 900, 1100, 500],
        },
        {
          name: "Botnet",
          data: [300, 900, 700, 1200, 200, 20],
        },
        {
          name: "DDOS",
          data: [1000, 900, 1200, 600, 300, 450],
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={dataSource} />;
  }
}
export default HStackedBar;
