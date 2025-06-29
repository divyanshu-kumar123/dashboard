import React from "react";
import LeftPane from "./LeftPane";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from "./OrderPage";
import HoldingsPage from "./HoldingsPage";
import PositionPage from "./PositionPage";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <LeftPane />
        </div>
        <div className="col-md-8">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/order" element={<OrderPage/>} />
            <Route path="/holdings" element={<HoldingsPage />} />
            <Route path="/positions" element={<PositionPage />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
