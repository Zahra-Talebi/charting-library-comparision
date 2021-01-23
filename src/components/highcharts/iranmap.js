import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import mapDataIran from "@highcharts/map-collection/countries/ir/ir-all.geo.json";

HighchartsMap(Highcharts);

class HIranMap extends Component {
  render() {
    var data = [
      ["ir-5428", 0],
      ["ir-hg", 1],
      ["ir-bs", 2],
      ["ir-kb", 3],
      ["ir-fa", 4],
      ["ir-sm", 6],
      ["ir-go", 7],
      ["ir-mn", 8],
      ["ir-th", 9],
      ["ir-mk", 10],
      ["ir-ya", 11],
      ["ir-cm", 12],
      ["ir-kz", 13],
      ["ir-lo", 14],
      ["ir-il", 15],
      ["ir-ar", 16],
      ["ir-qm", 17],
      ["ir-hd", 18],
      ["ir-za", 19],
      ["ir-qz", 20],
      ["ir-wa", 21],
      ["ir-ea", 30],
      ["ir-bk", 30],
      ["ir-gi", 38],
      ["ir-kd", 42],
      ["ir-kj", 50],
      ["ir-kv", 50],
      ["ir-ks", 60],
      ["ir-sb", 79],
      ["ir-ke", 80],
      ["ir-es", 140],
      ["ir-al", 250],
    ];

    const options = {
      chart: {
        map: "countries/ir/ir-all",
      },
      title: {
        text: "Iran Map",
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
      legend: {
        title: {
          text: "Incidents",
        },
        align: "right",
        verticalAlign: "bottom",
        layout: "vertical",
        symbolRadius: 0,
        symbolHeight: 14,
      },
      colorAxis: {
        dataClasses: [
          {
            to: 3,
            color: "#ffbb97",
          },
          {
            from: 3,
            to: 10,
            color: "#ff9f7c",
          },
          {
            from: 10,
            to: 30,
            color: "#ff8363",
          },
          {
            from: 30,
            to: 50,
            color: "#e8684b",
          },
          {
            from: 50,
            to: 100,
            color: "#c94d33",
          },
          {
            from: 100,
            to: 150,
            color: "#aa311c",
          },
          {
            from: 150,
            color: "#8c1004",
          },
        ],
      },

      series: [
        {
          name: "Incidents",
          mapData: mapDataIran,
          data: data,
          showInLegend: false,
          states: {
            hover: {
              color: "#BADA55",
            },
          },
          dataLabels: {
            enabled: false,
            format: "{point.name}",
          },
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
export default HIranMap;
