import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import HPie from "./highcharts/pie";
import FPie from "./fusioncharts/pie";

class PieComponent extends Component {
  render() {
    const chartData = [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ];
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card size="small" bordered title="Highcharts- Pie">
            <HPie chartData ={chartData}/>
          </Card>
        </Col>
        <Col span={12}>
          <Card size="small" bordered title="Fusioncharts- Pie">
            <FPie chartData ={chartData}/>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default PieComponent;
