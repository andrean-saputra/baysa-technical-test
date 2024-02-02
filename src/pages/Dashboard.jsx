import * as react from "react";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Doughnut from "../components/charts/DoughnutChart";
import Vertical from "../components/charts/VerticalChart";
import StackedBar from "../components/charts/StackedbarChart";
import AreaChart from "../components/charts/AreaChart";
import HalfDoughnut from "../components/charts/HalfDoughnut"
import JobAds from "../components/JobAdsComponent";

import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <Container>
        <div className="d-flex flex-row my-5 flex-wrap">
          <div className="firstCard">
            <StackedBar />
            <Vertical />
            <AreaChart/>
          </div>
          <div className="secondCard">
            <HalfDoughnut/>
            <Doughnut />
            <JobAds/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
