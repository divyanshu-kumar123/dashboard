import React from "react";
import LeftPane from "./LeftPane";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <LeftPane />
        </div>
        <div className="col-md-8">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
