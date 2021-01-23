import React, { Component } from "react";
import ReactFusioncharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: "mssplinearea",
  width: "100%",
  height: "400",
  dataFormat: "JSON",
  dataSource: {
    chart: {
      caption: "Incidents Trend",
      yaxisname: "Number of incidents",
      // numbersuffix: "M",
      yaxismaxvalue: "1200",
      theme: "fusion",
      palettecolors:
        "#0A507B,#5AD8A6,#5B8FF9,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3",
    },
    categories: [
      {
        category: [
          {
            label: "2019-01",
          },
          {
            label: "2019-02",
          },
          {
            label: "2019-03",
          },
          {
            label: "2019-04",
          },
          {
            label: "2019-05",
          },
          {
            label: "2019-06",
          },
          {
            label: "2019-07",
          },
          {
            label: "2019-08",
          },
          {
            label: "2019-09",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Total",
        data: [
          {
            value: "1100",
          },
          {
            value: "450",
          },
          {
            value: "940",
          },
          {
            value: "990",
          },
          {
            value: "1100",
          },
          {
            value: "700",
          },
          {
            value: "1000",
          },
          {
            value: "1100",
          },
          {
            value: "1200",
          },
        ],
      },
      {
        seriesname: "Tehran",
        data: [
          {
            value: "700",
          },
          {
            value: "150",
          },
          {
            value: "400",
          },
          {
            value: "700",
          },
          {
            value: "600",
          },
          {
            value: "350",
          },
          {
            value: "450",
          },
          {
            value: "600",
          },
          {
            value: "500",
          },
        ],
      },
      {
        seriesname: "Isfahan",
        data: [
          {
            value: "400",
          },
          {
            value: "300",
          },
          {
            value: "540",
          },
          {
            value: "290",
          },
          {
            value: "500",
          },
          {
            value: "350",
          },
          {
            value: "550",
          },
          {
            value: "500",
          },
          {
            value: "700",
          },
        ],
      },
    ],
  },
};

class FArea extends Component {
  render() {
    return (
      <ReactFusioncharts
        {...chartConfigs}
      />
    );
  }
}

export default FArea;
