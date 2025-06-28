import React, { useState } from "react";
import { holdingsData } from "../Data";
import setTextColor from "../setTextColor";


function HoldingTable() {
  let [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  return (
    <div className="table-responsive text-small-c mb-5">
      <table className="table align-middle table-hover text-start">
        <thead className="table-light text-small-c text-secondary fw-normal">
          <tr>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Instrument
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Qty
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Avg. cost
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              LTP
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              Cur. val
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              P&L
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              Net chg.
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              Day chg.
            </th>
          </tr>
        </thead>
        <tbody>
          {holdingsData.map((holdings, index) => (
            <tr
              key={index}
              className="border-bottom fw-lighter position-relative"
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
            >
              <td className="text-gray-c" style={{minWidth:'150px'}}>{holdings.instrument}</td>
              <td className="text-gray-c">{holdings.qty}</td>
              <td className="text-gray-c">{holdings.avgCost}</td>
              <td className="text-gray-c">{holdings.ltp}</td>
              <td className="text-gray-c text-end">{holdings.currentValue}</td>
              <td className={setTextColor("text-end", holdings.pnl)}>{holdings.pnl}</td>
              <td className={setTextColor("text-end text-small-c", holdings.netCharge)}>{holdings.netCharge}</td>
              <td className={setTextColor("text-xsmall-c text-end", holdings.dayCharge)}>{holdings.dayCharge}</td>
              {hoveredRowIndex === index && (
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                >
                  <button
                    className="btn btn-sm btn-light pt-0"
                    style={{ border: "1px solid blue", height: "20px" }}
                  >
                    <i className="fa-solid fa-ellipsis fs-4 text-primary"></i>
                  </button>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingTable;
