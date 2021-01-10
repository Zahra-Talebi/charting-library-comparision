import "antd/dist/antd.css";
import "./App.css";
import { Tabs } from "antd";
import PieComponent from "./components/PieComponent";

const { TabPane } = Tabs;

function App() {
  return (
    <div>
      <Tabs tabPosition={"left"} >
        <TabPane tab="Pie Chart" key="1">
          <PieComponent />
        </TabPane>
        <TabPane tab="Donut Chart" key="2">
          Donut Chart
        </TabPane>
        <TabPane tab="Column Chart" key="3">
          Column Chart
        </TabPane>
        <TabPane tab="Group Column Chart" key="4">
          Group Column Chart
        </TabPane>
        <TabPane tab="Bar Chart" key="5">
          Bar Chart
        </TabPane>
        <TabPane tab="Group Bar Chart" key="6">
          Group Bar Chart
        </TabPane>
        <TabPane tab="Line Chart" key="7">
          Line Chart
        </TabPane>
        <TabPane tab="Area Chart" key="8">
          Area Chart
        </TabPane>
        <TabPane tab="Line & Area Chart" key="9">
          Line & Area Chart
        </TabPane>
        <TabPane tab="Bubble Chart" key="10">
          Bubble Chart
        </TabPane>
        <TabPane tab="Map" key="11">
          Map
        </TabPane>
        <TabPane tab="Map & Bubble chart" key="12">
          Map & Bubble chart
        </TabPane>
        <TabPane tab="Sparkline" key="13">
          Sparkline
        </TabPane>
        <TabPane tab="Heatmap" key="14">
          Heatmap
        </TabPane>
        <TabPane tab="Live Attack" key="15">
        Live Attack
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
