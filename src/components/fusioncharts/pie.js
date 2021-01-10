import React, { Component } from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class FPie extends Component {
  render() {
    const chartConfigs = {
      type: "pie2d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "My title",
          subCaption: "subtitle",
          showlegend: "1",
          showpercentvalues: "1",
          legendposition: "bottom",
          usedataplotcolorforlabels: "1",
          theme: "fusion",
          palettecolors:
            "#0A507B,#5AD8A6,#5B8FF9,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3",
        },
        // Chart Data
        data: this.props.chartData,
      },
    };

    return <ReactFC {...chartConfigs} />;
  }
}
export default FPie;
