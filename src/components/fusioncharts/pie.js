import React, { Component } from "react";
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFusioncharts.fcRoot(FusionCharts, Column2D, FusionTheme);

class FPie extends Component {
  render() {
    const chartData = [
      {
        label: "Botnet",
        value: "290"
      },
      {
        label: "DOS",
        value: "260"
      },
      {
        label: "DDOS",
        value: "180"
      },
      {
        label: "Port Scan",
        value: "140"
      },
      {
        label: "Sniff",
        value: "115"
      },
      {
        label: "Other",
        value: "100"
      },
    ];

    const chartConfigs = {
      type: "pie2d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "Top Incident Types",
          showlegend: "1",
          showpercentvalues: "1",
          legendposition: "bottom",
          usedataplotcolorforlabels: "1",
          theme: "fusion",
          palettecolors:
            "#0A507B,#5AD8A6,#5B8FF9,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3",
        },
        // Chart Data
        data: chartData,
      },
    };

    return <ReactFusioncharts {...chartConfigs} />;
  }
}
export default FPie;
