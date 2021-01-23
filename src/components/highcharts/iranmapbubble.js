import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import mapDataIran from "@highcharts/map-collection/countries/ir/ir-all.geo.json";

HighchartsMap(Highcharts);

class HIranMapBubble extends Component {
  render() {
    const data = [
      { name: "Isfahan", lat: 32.6539, lon: 51.666 },
      { name: "Tehran", lat: 35.6892, lon: 51.389 },
    ];

    const mapOptions = {
      chart: {
        map: "countries/ir/ir-all",
      },
      title: {
        text: "Iran Map with Bubble",
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

      series: [
        {
          name: "Incidents",
          mapData: mapDataIran,
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
        {
          type: "mappoint",
          name: "Cities",
          color: "#7cb5ec",
          joinBy: ['iso-a3', 'code3'],
          data: data,
          // minSize: 4,
          // maxSize: "12%",
          // tooltip: {
          //   pointFormat: "{point.properties.hc-a2}: {point.z} thousands",
          // },
        },
      ],
    };

    return (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={mapOptions}
      />
    );
  }
}
export default HIranMapBubble;
