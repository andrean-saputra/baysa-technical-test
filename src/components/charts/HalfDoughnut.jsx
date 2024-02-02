import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Button from "react-bootstrap/Button";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ["#5b7fff", "#cccccc"],
      display: true,
    },
  ],
};

const App = () => {
  return (
    <div>
      <div className="stackedBarWrapper">
        <div className="stackedBarTitle doughnutTitleWrapper">
          <div className="titleWrapper doughnutTitle">
            <h3>Statistics</h3>
            <p className="text-slate-500 statsButton">Total</p>
          </div>
        </div>
        <div className="halfDoughnutWrapper d-flex flex-column justify-content-center align-items-center">
          <Doughnut
            className="halfDoughnut"
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              rotation: -90,
              circumference: 180,
              cutout: "60%",
              maintainAspectRatio: true,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div>
              <h1>50%</h1>
            </div>
          </div>
          <p className="text-slate-400 alignCenter">
            You definitely need to make an effort <br />
            to reach your goal
          </p>
          <Button className="buttonGrey" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
