import "antd/dist/antd.css";
import "./App.css";
import { Tabs, Row, Col, Card } from "antd";

import HPie from "./components/highcharts/pie";
import FPie from "./components/fusioncharts/pie";

import HDonut from "./components/highcharts/donut";
import FDonut from "./components/fusioncharts/donut";

import HArea from "./components/highcharts/area";
import FArea from "./components/fusioncharts/area";

import HStackedBar from "./components/highcharts/stackedbar";
import FStackedBar from "./components/fusioncharts/stackedbar";

import MapChart from "./components/fusioncharts/worldmap";

import FIranMap from "./components/fusioncharts/iranmap";

const { TabPane } = Tabs;

function App() {
  return (
    <div>
      <Tabs tabPosition={"left"}>
        <TabPane tab="Pie Chart" key="1">
          <Row gutter={16}>
            <Col span={12}>
              <Card size="small" bordered title="Highcharts- Pie">
                <HPie />
              </Card>
            </Col>
            <Col span={12}>
              <Card size="small" bordered title="Fusioncharts- Pie">
                <FPie />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Donut Chart" key="2">
          <Row gutter={16}>
            <Col span={12}>
              <Card size="small" bordered title="Highcharts- Donut">
                <HDonut />
              </Card>
            </Col>
            <Col span={12}>
              <Card size="small" bordered title="Fusioncharts- Donut">
                <FDonut />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Area Chart" key="3">
          <Row gutter={16}>
            <Col span={24}>
              <Card size="small" bordered title="Highcharts- Area">
                <HArea />
              </Card>
            </Col>
            <Col span={24}>
              <Card size="small" bordered title="Fusioncharts- Area">
                <FArea />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Stacked Bar Chart" key="4">
          <Row gutter={16}>
            <Col span={12}>
              <Card size="small" bordered title="Highcharts- Stacked Bar">
                <HStackedBar />
              </Card>
            </Col>
            <Col span={12}>
              <Card size="small" bordered title="Fusioncharts- Stacked Bar">
                <FStackedBar />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Iran Map" key="5">
        <Row gutter={16}>
            <Col span={12}>
              <Card size="small" bordered title="Highcharts- Iran Map">
                {/* <HStackedBar /> */}
              </Card>
            </Col>
            <Col span={12}>
              <Card size="small" bordered title="Fusioncharts- Iran Map">
                <FIranMap />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="World Map" key="6">
        <Row gutter={16}>
            <Col span={24}>
              <Card size="small" bordered title="Fusioncharts- World Map">
                <MapChart />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Iran Map with Bubble Chart" key="7">
          Iran Map with Bubble Chart
        </TabPane>
        <TabPane tab="Heat Map" key="8">
          Heat Map
        </TabPane>
        <TabPane tab="Calendar Heat Map" key="9">
          Calendar Heat Map
        </TabPane>
        <TabPane tab="Live Attack" key="10">
          Live Attack
        </TabPane>
        <TabPane tab="Sparkline" key="11">
          Sparkline
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
