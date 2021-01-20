import React, { Component, Fragment } from "react";
import { Input, Switch } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class HDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Top Incident Types",
      subtitle: "Subtitle",
      showLegend: "1",
      interactiveLegend: "1",
      dataLabelsEnable: true,
      showValues: "1",
      showpercentvalues: "1",
      enableSmartLabels: "1",
      dataLabelsFromat: "<b>{point.name}</b>: {point.percentage:.1f} %",
      centerlabel: "Users: $value",
    };
  }
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

    const chartData = [
      {
        name: "Botnet",
        y: 290,
      },
      {
        name: "DOS",
        y: 260,
      },
      {
        name: "DDOS",
        y: 180,
      },
      {
        name: "Port Scan",
        y: 140,
      },
      {
        name: "Sniff",
        y: 115,
      },
      {
        name: "Other",
        y: 100,
      },
    ];

    const dataSource = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: this.state.title,
      },
      subtitle: {
        text: "subtitle",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: this.state.dataLabelsEnable,
            format: this.state.dataLabelsFromat,
          },
          showInLegend: true,
        },
      },
      colors: colors,
      series: [
        {
          name: "percent",
          colorByPoint: true,
          data: chartData,
          size: "80%",
          innerSize: "50%",
        },
      ],
    };
    return (
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={dataSource} />
        <div>
          <label>data Labels Enable </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                dataLabelsEnable: !this.state.dataLabelsEnable,
              });
            }}
          />
          <br />
          <Input
            style={{ marginBottom: 5 }}
            addonBefore={<span>Title</span>}
            name="title"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
        </div>
      </Fragment>
    );
  }
}
export default HDonut;
