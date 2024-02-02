import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";

Chart.register(ArcElement);

function generateData(filter) {
  const labels =
    filter === "weekly"
      ? ["Week 1", "Week 2", "Week 3", "Week 4"]
      : filter === "monthly"
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
      : ["2023", "2024", "2025"];

  const data = {
    labels,
    datasets: [
      {
        label: "Search",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#5b7fff",
      },
      {
        label: "Job Booster",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#38cb89",
      },
      {
        label: "Job Alert",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#ffab00",
      },
      {
        label: "Company Booster",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#e3aa36",
        borderRadius: 15,
      },
    ],
  };

  return data;
}

function StackedBar() {
  const [filter, setFilter] = useState("monthly");
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setData(generateData(filter));
  }, [filter]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
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
      <div className="divider"></div>
      <div className="stackedBarContent">
        <Bar options={options} data={data} />
      </div>
      <div className="mt-4 d-flex justify-content-between stackedBarLegends">
        <div className="legends d-flex align-items-center">
          <div className="legendsColor color1"></div>
          <div className="legendsName text-slate-500">Search</div>
        </div>
        <div className="legends d-flex align-items-center">
          <div className="legendsColor color2"></div>
          <div className="legendsName text-slate-500">Job Booster</div>
        </div>
        <div className="legends d-flex align-items-center">
          <div className="legendsColor color3"></div>
          <div className="legendsName text-slate-500">Job Alert</div>
        </div>
        <div className="legends d-flex align-items-center">
          <div className="legendsColor color4"></div>
          <div className="legendsName text-slate-500">Company Booster</div>
        </div>
      </div>
    </div>
  );
}

export default StackedBar;
