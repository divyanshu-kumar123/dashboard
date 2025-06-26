import React from "react";

function Equity() {
  return (
    <div className="container pt-5" style={{ height: "15rem" }}>
      <i class="fa-solid fa-chart-pie fs-4"></i>
      <span className="text-gray-c fs-4 fw-lighter ms-2">Equity</span>
      <div className="row">
        <div className="col-md-6 border-end">
          <span
            className="fw-lighter "
            style={{ fontSize: "4rem", letterSpacing: "8px" }}
          >
            1L
          </span>
          <div className="text-small-c text-gray opacity-75">
            Margin available
          </div>
        </div>
        <div className="col-md-6 ps-3">
          <div className="pb-4 mt-2">
            <span className="text-gray-c ms-2 opacity-75">Margin used</span>
            <span className="text-black-c ms-2">0</span>
          </div>
          <div>
            <span className="text-gray-c ms-2 opacity-75">Opening balance</span>
            <span className="text-black-c ms-2">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equity;
