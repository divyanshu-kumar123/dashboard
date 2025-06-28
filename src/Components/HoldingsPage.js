import React from "react";
import { holdingsData } from "../Data";
import HoldingTable from "./HoldingTable";

function convertToRuppee(num) {
  return num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function HoldingsPage() {
  const totalInvestment = holdingsData.reduce((total, item) => {
    return total + item.qty * item.avgCost;
  }, 0);

  const totalCurrentVal = holdingsData.reduce((total, item) => {
    return total + item.qty * item.ltp;
  }, 0);

  const totalDaysPL = holdingsData.reduce((total, item) => {
    return total + (item.currentValue * item.dayCharge) / 100;
  }, 0);

  const DaysPLPercent = holdingsData
    .reduce((total, item) => {
      return (totalDaysPL / totalCurrentVal) * 100;
    }, 0)
    .toFixed(2);
 
    const totalPL  = holdingsData.reduce((total, item)=>{
        return total + ((item.ltp - item.avgCost) * item.qty)
    }, 0)
    .toFixed(2);

    const totalPLPercent  = ((totalPL / totalInvestment) * 100)
    .toFixed(2);

  return (
    <div className="container">
      <h1 className="fw-normal fs-6 p-4 border-bottom">
        Holdings({holdingsData.length})
      </h1>
      <div className="row">
        <div className="col-md-3">
          <p className="text-gray-c text-small-c opacity-75">
            Total investment
            <br />
            <b className="text-black fs-6">
              {convertToRuppee(totalInvestment)}
            </b>
          </p>
        </div>
        <div className="col-md-3">
          <p className="text-gray-c text-small-c opacity-75">
            current value
            <br />
            <b className="text-black fs-6">
              {convertToRuppee(totalCurrentVal)}
            </b>
          </p>
        </div>
        <div className="col-md-3">
          <p className="text-gray-c text-small-c opacity-75">
            Day's P&L
            <br />
            <b
              className={`fs-6 ${
                totalDaysPL >= 0 ? "text-green-c" : "text-red-c"
              }`}
            >
              {convertToRuppee(totalDaysPL)}{" "}
              <span className={`text-xsmall-c fw-thin `}>
                ( {totalDaysPL >= 0 ? "+" : "-"}
                {DaysPLPercent}%)
              </span>
            </b>
          </p>
        </div>
        <div className="col-md-3">
          <p className="text-gray-c text-small-c opacity-75">
            Total P&L
            <br />
            <b className={` fs-6 ${totalPLPercent >= 0 ? "text-green-c" : "text-red-c"}`}>{convertToRuppee(totalPL)} <span className={`text-xsmall-c fw-thin `}>({totalPLPercent>=0 ? "+" : "-"}{totalPLPercent}%)</span></b>
          </p>
        </div>
      </div>
      <HoldingTable />
    </div>
  );
}

export default HoldingsPage;
