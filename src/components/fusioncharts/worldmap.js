import React, { Component } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/fusioncharts.maps";
import IR from "fusioncharts/maps/fusioncharts.worldwithcountries";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, FusionMaps, IR, FusionTheme);

class FIranMap extends Component {
  render() {
    //IDs is here: https://www.fusioncharts.com/dev/maps/spec-sheets/worldwithcountries
    const chartData = [
      {
        id: "01",
        value: "6000",
      },
      {
        id: "02",
        value: "900",
      },
      {
        id: "03",
        value: "4500",
      },
      {
        id: "03",
        value: "0",
      },
      {
        id: "04",
        value: "7500",
      },
      {
        id: "27",
        value: "8000",
      },
      {
        id: "101",
        value: "6400",
      },
      {
        id: "118",
        value: "4600",
      },
      {
        id: "159",
        value: "3000",
      },
      {
        id: "142",
        value: "3100",
      },
      {
        id: "141",
        value: "900",
      },
      {
        id: "173",
        value: "900",
      },
      {
        id: "113",
        value: "500",
      },
      {
        id: "193",
        value: "5000",
      },
      {
        id: "122",
        value: "900",
      },
    ];

    const chartConfigs = {
      type: "worldwithcountries", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        chart: {
          caption: "World Map",
          theme: "fusion",
        },
        colorrange: {
          color: [
            {
              minvalue: "0",
              maxvalue: "2000",
              code: "#ffbb97",
            },
            {
              minvalue: "2000",
              maxvalue: "4000",
              code: "#ff8363",
            },
            {
              minvalue: "4000",
              maxvalue: "6000",
              code: "#c94d33",
            },
            {
              minvalue: "6000",
              maxvalue: "8000",
              code: "#6f0000",
            },
          ],
        },
        // Chart Data
        data: chartData,
      },
    };

    return <ReactFC {...chartConfigs} />;
  }
}
export default FIranMap;
