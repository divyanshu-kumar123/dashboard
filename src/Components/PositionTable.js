import React, { useState } from "react";
import { positionsData } from "../Data";
import setTextColor from "../setTextColor";

function PositionTable() {
  let [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  return (
    <div className="table-responsive text-small-c mb-5">
      <table className="table align-middle table-hover text-start">
        <thead className="table-light text-small-c text-secondary fw-normal">
          <tr>
            <th className="text-small-c text-secondary fw-normal opacity-75"></th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Product
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Instrument
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 ">
              Qty
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Avg.
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              LTP
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              P&L
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 text-end">
              Chg.
            </th>
          </tr>
        </thead>
        <tbody>
          {positionsData.map((position, index) => (
            <tr
              key={index}
              className="border-bottom fw-lighter position-relative"
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
            >
              <td className="text-gray-c">
                <input type="checkbox" />
              </td>
              <td className="text-gray-c">{position.product}</td>
              <td className="text-gray-c">{position.instrument}</td>
              <td className="text-gray-c">{position.qty}</td>
              <td className="text-gray-c">{position.avg}</td>
              <td className="text-gray-c text-end">{position.ltp}</td>
              <td className={setTextColor("text-end text-small-c", position.pnl)}>{position.pnl >= 0 ?"+" : ""}{position.pnl}</td>
              <td className={setTextColor("text-end text-xsmall-c", position.chg)}>{position.chg >= 0 ?"+" : ""}{position.chg}</td>
              {hoveredRowIndex === index && (
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "40%",
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

export default PositionTable;
