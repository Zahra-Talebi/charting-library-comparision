import React, { Component, Fragment } from "react";
import { Input, Switch } from "antd";

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

class FDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Top Incident Types",
      subtitle: "Subtitle",
      showLegend: "1",
      interactiveLegend: "1",
      showLabels: "1",
      showValues: "1",
      showpercentvalues: "1",
      enableSmartLabels: "1",
      plottooltext:
        "<b>$percentValue</b> of recieved incidents are <b>$label</b>",
      centerlabel: "$value incidents",
    };
  }

  render() {
    const chartData = [
      {
        label: "Botnet",
        value: "290",
      },
      {
        label: "DOS",
        value: "260",
      },
      {
        label: "DDOS",
        value: "180",
      },
      {
        label: "Port Scan",
        value: "140",
      },
      {
        label: "Sniff",
        value: "115",
      },
      {
        label: "Other",
        value: "100",
      },
    ];

    const chartConfigs = {
      type: "doughnut2d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: this.state.title,
          subcaption: this.state.subtitle,
          showLegend: this.state.showLegend,
          interactiveLegend: this.state.interactiveLegend,
          showLabels: this.state.showLabels,
          showValues: this.state.showValues,
          showpercentvalues: this.state.showpercentvalues,
          enableSmartLabels: this.state.enableSmartLabels,
            // defaultcenterlabel: "Top Incident Types",
          aligncaptionwithcanvas: "0",
          captionpadding: "0",
          decimals: "1",
          plottooltext: this.state.plottooltext,
          centerlabel: this.state.centerlabel,
          theme: "fusion",
          palettecolors:
            "#0A507B,#5AD8A6,#5B8FF9,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3",
        },
        // Chart Data
        data: chartData,
      },
    };

    return (
      <Fragment>
        <ReactFC {...chartConfigs} />
        <br />
        <div>
          <label>Show legend </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                showLegend: this.state.showLegend === "1" ? "0" : "1",
              });
            }}
          />
          <br />
          <label>Interactive legend </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                interactiveLegend:
                  this.state.interactiveLegend === "1" ? "0" : "1",
              });
            }}
          />
          <br />
          <label>Show labels </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                showLabels: this.state.showLabels === "1" ? "0" : "1",
              });
            }}
          />
          <br />
          <label>Show values </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                showValues: this.state.showValues === "1" ? "0" : "1",
              });
            }}
          />
          <br />
          <label>Show percentage value </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                showpercentvalues:
                  this.state.showpercentvalues === "1" ? "0" : "1",
              });
            }}
          />
          <br />
          <label>Enable smart labels </label>
          <Switch
            style={{ marginBottom: 5 }}
            defaultChecked
            onChange={() => {
              this.setState({
                enableSmartLabels:
                  this.state.enableSmartLabels === "1" ? "0" : "1",
              });
            }}
          />

          <Input
            style={{ marginBottom: 5 }}
            addonBefore={<span>Title</span>}
            name="title"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
          <Input
            style={{ marginBottom: 5 }}
            addonBefore={<span>Subtitle</span>}
            name="subtitle"
            onChange={(e) => {
              this.setState({ subtitle: e.target.value });
            }}
          />
          <Input
            style={{ marginBottom: 5 }}
            addonBefore={<span>Plot tool text</span>}
            name="plottooltext"
            placeholder="<b>$percentValue</b> of recieved incidents are <b>$label</b>"
            onChange={(e) => {
              this.setState({ plottooltext: e.target.value });
            }}
          />
          <Input
            style={{ marginBottom: 5 }}
            addonBefore={<span>Central label</span>}
            name="centerlabel"
            placeholder="$value incidents"
            onChange={(e) => {
              this.setState({ centerlabel: e.target.value });
            }}
          />
        </div>
      </Fragment>
    );
  }
}
export default FDonut;
