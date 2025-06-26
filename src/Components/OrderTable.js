import React from 'react'

const orders = [
    {
      time: "13:32:12",
      type: "BUY",
      instrument: "SBIN BSE",
      product: "MIS",
      qty: "0 / 1",
      ltp: "586.50",
      price: "585.00 / 585.00 trg.",
      status: "OPEN",
    },
    {
      time: "13:29:52",
      type: "BUY",
      instrument: "VEDL NSE",
      product: "CNC",
      qty: "0 / 1",
      ltp: "279.45",
      price: "0.00 / 290.00 trg.",
      status: "OPEN",
    },
    {
      time: "13:35:15",
      type: "BUY",
      instrument: "USDINR 23MAY FUT CDS",
      product: "NRML",
      qty: "0 / 3",
      ltp: "82.4225",
      price: "81.0000",
      status: "OPEN",
    },
    {
      time: "13:34:15",
      type: "BUY",
      instrument: "USDINR 23MAY FUT CDS",
      product: "MIS",
      qty: "0 / 1",
      ltp: "82.4225",
      price: "81.0000",
      status: "OPEN",
    },
    {
      time: "13:39:12",
      type: "BUY",
      instrument: "INFY NSE",
      product: "CO",
      qty: "0 / 1",
      ltp: "49.30",
      price: "49.50 / 48.50 trg.",
      status: "OPEN",
    },
    {
      time: "13:39:12",
      type: "SELL",
      instrument: "PNB NSE",
      product: "CO",
      qty: "0 / 1",
      ltp: "49.30",
      price: "0.00 / 48.50 trg.",
      status: "OPEN",
    },
  ];


function OrderTable() {
  return (
    <div className="table-responsive">
      <table className="table align-middle table-hover text-center">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Time</th>
            <th>Type</th>
            <th>Instrument</th>
            <th>Product</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className='border-bottom'>
              <td><input type="checkbox" /></td>
              <td>{order.time}</td>
              <td>
                <span className={`badge opacity-50 ${order.type === "BUY" ? "bg-primary" : "bg-danger"}`}>
                  {order.type}
                </span>
              </td>
              <td>{order.instrument}</td>
              <td>{order.product}</td>
              <td>{order.qty}</td>
              <td>{order.ltp}</td>
              <td>{order.price}</td>
              <td><span className="badge bg-light text-dark">{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable