import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "@highcharts/map-collection/custom/world.geo.json";

HighchartsMap(Highcharts);

class HWorldMap extends Component {
  render() {
    var data = [
      ["eu", 0],
      ["oc", 1],
      ["af", 200],
      ["as", 500],
      ["na", 9000],
      ["sa", 80],
      ["ir", 30000],
      ["us", 5],
    ];
    const options = {
      chart: {
        map: "'custom/world-continents",
      },
      colors: [
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
      ],
      title: {
        text: "Title",
      },
      mapNavigation: {
        enabled: true,
      },
      legend: {
        title: {
          text: "Incidents",
          // style: {
          //   color:
          //     // theme
          //     (Highcharts.defaultOptions &&
          //       Highcharts.defaultOptions.legend &&
          //       Highcharts.defaultOptions.legend.title &&
          //       Highcharts.defaultOptions.legend.title.style &&
          //       Highcharts.defaultOptions.legend.title.style.color) ||
          //     "black",
          // },
        },
        align: "right",
        verticalAlign: "bottom",
        // floating: true,
        layout: "vertical",
        // valueDecimals: 0,
        // backgroundColor:
        //   // theme
        //   (Highcharts.defaultOptions &&
        //     Highcharts.defaultOptions.legend &&
        //     Highcharts.defaultOptions.legend.backgroundColor) ||
        //   "rgba(255, 255, 255, 0.85)",
        symbolRadius: 0,
        symbolHeight: 14,
      },

      colorAxis: {
        dataClasses: [
          {
            to: 3,
          },
          {
            from: 3,
            to: 10,
          },
          {
            from: 10,
            to: 30,
          },
          {
            from: 30,
            to: 100,
          },
          {
            from: 100,
            to: 300,
          },
          {
            from: 300,
            to: 1000,
          },
          {
            from: 1000,
          },
        ],
      },

      series: [
        {
          name: "Basemap",
          mapData: mapDataWorld,
          data: data,
          // borderColor: "#606060",
          nullColor: "rgba(200, 200, 200, 0.2)",
          showInLegend: true,
        },
      ],
    };

    return (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    );
  }
}
export default HWorldMap;
