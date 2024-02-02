import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Jobsearch from "./pages/Jobsearch";
import Schedule from "./pages/Schedule";
import History from "./pages/History";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/jobsearch" Component={Jobsearch} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/history" Component={History} />
        <Route path="/events" Component={Events} />
      </Routes>
    </>
  );
}

export default App;
