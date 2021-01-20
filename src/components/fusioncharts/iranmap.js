import React, { Component } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/fusioncharts.maps";
import IR from "fusioncharts/maps/fusioncharts.iran";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, FusionMaps, IR, FusionTheme);

class FIranMap extends Component {
  render() {
    const chartData = [
      {
        id: "IR.AL",
        value: "200",
      },
      {
        id: "IR.AR",
        value: "24",
      },
      {
        id: "IR.BS",
        value: "21",
      },
      {
        id: "IR.CM",
        value: "180",
      },
      {
        id: "IR.EA",
        value: "45",
      },
      {
        id: "IR.ES",
        value: "96",
      },
      {
        id: "IR.FA",
        value: "45",
      },
      {
        id: "IR.GI",
        value: "54",
      },
      {
        id: "IR.GO",
        value: "14",
      },
      {
        id: "IR.HD",
        value: "63",
      },
      {
        id: "IR.HG",
        value: "45",
      },
      {
        id: "IR.IL",
        value: "12",
      },
      {
        id: "IR.KE",
        value: "23",
      },
      {
        id: "IR.BK",
        value: "58",
      },
      {
        id: "IR.KZ",
        value: "4",
      },
      {
        id: "IR.KB",
        value: "22",
      },
      {
        id: "IR.KD",
        value: "4",
      },
      {
        id: "IR.LO",
        value: "45",
      },
      {
        id: "IR.MK",
        value: "30",
      },
      {
        id: "IR.MN",
        value: "52",
      },
      {
        id: "IR.KS",
        value: "85",
      },
      {
        id: "IR.QZ",
        value: "55",
      },
      {
        id: "IR.QM",
        value: "87",
      },
      {
        id: "IR.KV",
        value: "85",
      },
      {
        id: "IR.SM",
        value: "45",
      },
      {
        id: "IR.SB",
        value: "50",
      },
      {
        id: "IR.KJ",
        value: "40",
      },
      {
        id: "IR.TH",
        value: "100",
      },
      {
        id: "IR.WA",
        value: "10",
      },
      {
        id: "IR.YA",
        value: "30",
      },
      {
        id: "IR.ZA",
        value: "20",
      },
    ];

    const chartConfigs = {
      type: "map/iran", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "Iran Map",
          showlabels: "0",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          canvasBorderThickness: 0,
          legendBorderThickness: 0,
          legendShadow: 0,
          showBorder: true,
          borderColor: "#e8e8e8",
          borderThickness: 0.5,
        //   fillColor: "#8e8e8e",
          entityFillHoverColor: "#8e8e8e",
          // theme: "fusion",
          exportEnabled: "1",
          exportMode: "client",
        },

        colorrange: {
          color: [
            {
              minvalue: "0",
              maxvalue: "50",
              code: "#ffbb97",
            },
            {
              minvalue: "50",
              maxvalue: "100",
              code: "#ff8363",
            },
            {
              minvalue: "100",
              maxvalue: "150",
              code: "#c94d33",
            },
            {
              minvalue: "150",
              maxvalue: "200",
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
