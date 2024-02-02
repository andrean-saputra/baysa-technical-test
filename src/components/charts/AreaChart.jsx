import React, { useState } from "react";
import CanvasJS from "@canvasjs/charts";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const [filter, setFilter] = useState("yearly");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const dataPointsYearly = [
    { x: new Date(2015, 0), y: 70.735 },
    { x: new Date(2016, 0), y: 74.102 },
    { x: new Date(2017, 0), y: 72.569 },
    { x: new Date(2018, 0), y: 72.743 },
    { x: new Date(2019, 0), y: 72.381 },
    { x: new Date(2020, 0), y: 71.406 },
    { x: new Date(2021, 0), y: 73.163 },
    { x: new Date(2022, 0), y: 74.27 },
    { x: new Date(2023, 0), y: 72.525 },
    { x: new Date(2024, 0), y: 73.121 },
  ];

  const dataPointsMonthly = [
    { x: new Date(2023, 0), y: 70.735 },
    { x: new Date(2023, 1), y: 74.102 },
    { x: new Date(2023, 2), y: 72.569 },
    { x: new Date(2023, 3), y: 72.743 },
    { x: new Date(2023, 4), y: 72.381 },
    { x: new Date(2023, 5), y: 71.406 },
    { x: new Date(2023, 6), y: 73.163 },
    { x: new Date(2023, 7), y: 74.27 },
    { x: new Date(2023, 8), y: 72.525 },
    { x: new Date(2023, 9), y: 73.121 },
  ];

  const dataPointsWeekly = [
    { x: new Date(2023, 0), y: 70.735 },
    { x: new Date(2023, 0, 7), y: 74.102 },
    { x: new Date(2023, 0, 14), y: 72.569 },
    { x: new Date(2023, 0, 21), y: 72.743 },
  ];

  const options = {
    animationEnabled: true,
    data: [
      {
        type: "splineArea",
        yValueFormatString: "#,##0.## bn kW⋅h",
        showInLegend: false,
        legendText: "kWh = one kilowatt hour",
        dataPoints:
          filter === "yearly"
            ? dataPointsYearly
            : filter === "monthly"
            ? dataPointsMonthly
            : dataPointsWeekly,
      },
    ],
  };

  return (
    <div className="stackedBarWrapper">
      <div className="stackedBarTitle">
        <div className="titleWrapper">
          <p className="text-slate-500">TOTAL IMPRESSIONS</p>
          <h3>1.938.000</h3>
        </div>
        <div className="filterWrapper">
          <p className="text-slate-500 mx-2">Show: </p>
          <select
            className="filter"
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="stackedBarContent">
        <CanvasJSReact.CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default App;
