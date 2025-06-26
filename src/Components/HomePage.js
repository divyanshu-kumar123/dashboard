import React from "react";
import LeftPane from "./LeftPane";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from "./OrderPage";

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
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
