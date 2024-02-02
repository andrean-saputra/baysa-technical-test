import React, { useEffect, useRef } from "react";
import CanvasJS from "@canvasjs/charts";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  animationEnabled: true,
  responsive:true,
  subtitles: [
    {
      text: "1.938.000",
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: "doughnut",
      showInLegend: false,
      dataPoints: [
        { name: "Unsatisfied", y: 5, color: "#5b7fff" }, // Red
        { name: "Very Unsatisfied", y: 31, color: "#38cb89" }, // Tomato Red
        { name: "Very Satisfied", y: 40, color: "#ffab00" }, // Steel Blue
        { name: "Satisfied", y: 17, color: "#e3aa36" }, // Green
      ],
    },
  ],
};

const App = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    console.log("Chart instance", chartRef.current);
  }, []);

  return (
    <div className="stackedBarWrapper">
      <div className="stackedBarTitle doughnutTitleWrapper">
        <div className="titleWrapper doughnutTitle">
          <h3>Statistics</h3>
          <p className="text-slate-500 statsButton">Total</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="halfDoughnutWrapper d-flex justify-content-center align-items-center">
        <CanvasJSReact.CanvasJSChart options={options} ref={chartRef} />
        <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div>
              <p className="text-slate-500">Total Impressions</p>
            </div>
          </div>
      </div>
      <div className="mt-4 d-flex justify-content-between doughnutLegendsWrapper flex-wrap">
        <div className="doughnutLegends d-flex align-items-center">
          <div className="legendsColor color1"></div>
          <div className="legendsName text-slate-500">Search</div>
        </div>
        <div className="doughnutLegends d-flex align-items-center">
          <div className="legendsColor color2"></div>
          <div className="legendsName text-slate-500">Job Booster</div>
        </div>
        <div className="doughnutLegends d-flex align-items-center">
          <div className="legendsColor color3"></div>
          <div className="legendsName text-slate-500">Job Alert</div>
        </div>
        <div className="doughnutLegends d-flex align-items-center">
          <div className="legendsColor color4"></div>
          <div className="legendsName text-slate-500">Company Booster</div>
        </div>
      </div>
    </div>
  );
};

export default App;
