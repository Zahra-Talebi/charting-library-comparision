import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const chartConfigs = {
  type: "stackedbar2d",
  width: "100%",
  height: "400",
  dataFormat: "JSON",
  dataSource: {
    chart: {
      caption: "Incident Types By SIEM",
      placevaluesinside: "1",
      showvalues: "0",
      plottooltext: "<b>$dataValue</b>  $seriesName visitors",
      theme: "fusion",
      palettecolors:
        "#0A507B,#5AD8A6,#5B8FF9,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3",
    },
    categories: [
      {
        category: [
          {
            label: "Tehran",
          },
          {
            label: "Isfahan",
          },
          {
            label: "Shiraz",
          },
          {
            label: "Mashhad",
          },
          {
            label: "Tabriz",
          },
          {
            label: "Ahvaz",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Other",
        data: [
          {
            value: "800",
          },
          {
            value: "800",
          },
          {
            value: "800",
          },
          {
            value: "1200",
          },
          {
            value: "30",
          },
          {
            value: "1200",
          },
        ],
      },
      {
        seriesname: "Sniff",
        data: [
          {
            value: "200",
          },
          {
            value: "100",
          },
          {
            value: "1200",
          },
          {
            value: "600",
          },
          {
            value: "1200",
          },
          {
            value: "30",
          },
        ],
      },
      {
        seriesname: "Port Scan",
        data: [
          {
            value: "250",
          },
          {
            value: "1100",
          },
          {
            value: "700",
          },
          {
            value: "10",
          },
          {
            value: "120",
          },
          {
            value: "900",
          },
        ],
      },
      {
        seriesname: "DOS",
        data: [
          {
            value: "1100",
          },
          {
            value: "800",
          },
          {
            value: "900",
          },
          {
            value: "600",
          },
          {
            value: "800",
          },
          {
            value: "900",
          },
        ],
      },
      {
        seriesname: "Exploit",
        data: [
          {
            value: "20",
          },
          {
            value: "800",
          },
          {
            value: "300",
          },
          {
            value: "900",
          },
          {
            value: "1100",
          },
          {
            value: "500",
          },
        ],
      },
      {
        seriesname: "Botnet",
        data: [
          {
            value: "300",
          },
          {
            value: "900",
          },
          {
            value: "700",
          },
          {
            value: "1200",
          },
          {
            value: "200",
          },
          {
            value: "20",
          },
        ],
      },
      {
        seriesname: "DDOS",
        data: [
          {
            value: "1000",
          },
          {
            value: "900",
          },
          {
            value: "1200",
          },
          {
            value: "600",
          },
          {
            value: "300",
          },
          {
            value: "450",
          },
        ],
      },
    ],
  },
};

class FStackedBar extends Component {
  render() {
    return <ReactFusioncharts {...chartConfigs} />;
  }
}
export default FStackedBar;
