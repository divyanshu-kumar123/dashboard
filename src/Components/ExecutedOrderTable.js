import React, { useState } from "react";
import OrderStatus from "./OrderStatus";

const orders = [
  {
    time: "13:32:12",
    type: "BUY",
    instrument: "SBIN BSE",
    product: "MIS",
    qty: "0/1",
    ltp: "586.50",
    price: "585.00 / 585.00 trg.",
    status: "OPEN",
  },
  {
    time: "13:29:52",
    type: "BUY",
    instrument: "VEDL NSE",
    product: "CNC",
    qty: "0/1",
    ltp: "279.45",
    price: "0.00 / 290.00 trg.",
    status: "complete",
  },
  {
    time: "13:35:15",
    type: "BUY",
    instrument: "USDINR 23MAY FUT CDS",
    product: "NRML",
    qty: "0/1",
    ltp: "82.4225",
    price: "81.0000",
    status: "OPEN",
  },
  {
    time: "13:34:15",
    type: "BUY",
    instrument: "USDINR 23MAY FUT CDS",
    product: "MIS",
    qty: "0/1",
    ltp: "82.4225",
    price: "81.0000",
    status: "rejected",
  },
  {
    time: "13:39:12",
    type: "BUY",
    instrument: "INFY NSE",
    product: "CO",
    qty: "0/1",
    ltp: "49.30",
    price: "49.50 / 48.50 trg.",
    status: "Complete",
  },
  {
    time: "13:39:12",
    type: "SELL",
    instrument: "PNB NSE",
    product: "CO",
    qty: "0/1",
    ltp: "49.30",
    price: "0.00 / 48.50 trg.",
    status: "OPEN",
  },
];

function ExecutedOrderTable() {
  let [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  return (
    <div className="table-responsive text-small-c mb-5">
      <table className="table align-middle table-hover text-start">
        <thead className="table-light text-small-c text-secondary fw-normal">
          <tr>
            <th className="text-small-c text-secondary fw-normal opacity-75"></th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Time
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Type
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Instrument
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Product
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75 ">
              Qty
            </th>
            {/* <th className='text-small-c text-secondary fw-normal opacity-75'>LTP</th> */}
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Avg. Price
            </th>
            <th className="text-small-c text-secondary fw-normal opacity-75">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-bottom fw-lighter position-relative "
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
            >
              <td className="text-gray-c">
                <input type="checkbox" />
              </td>
              <td className="text-gray-c">{order.time}</td>
              <td>
                <td className="text-gray-c">
                  <OrderStatus status={order.type.toLocaleLowerCase()} />
                </td>
              </td>
              <td className="text-gray-c">{order.instrument}</td>
              <td className="text-gray-c">{order.product}</td>
              <td className="text-gray-c">{order.qty}</td>
              {/* <td className='text-gray-c text-end'>{order.ltp}</td> */}
              <td className="text-gray-c text-end">{order.price}</td>
              <td className="text-gray-c border-start">
                <OrderStatus status={order.status.toLocaleLowerCase()} />
              </td>
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

export default ExecutedOrderTable;
