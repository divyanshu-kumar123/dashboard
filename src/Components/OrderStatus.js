import React from "react";

function OrderStatus({ status }) {
  let style = {
    borderRadius: "2px",
    display: "block",
    width: "6rem",
    verticalAlign: "middle",
    paddingBottom: "2px",
  };
  
  switch (status) {
    case "open":
      style.backgroundColor = "#4444441A";
      style.color = "#444444";
      break;
    case "complete":
      style.backgroundColor = "#4CAF501A";
      style.color = "#4CAF50";
      break;
    case "rejected":
      style.backgroundColor = "#DF514C1A";
      style.color = "#DF514C";
      break;
    case "buy":
      style.width = '3rem';
      style.backgroundColor = "#4184F31A";
      style.color = "#4184F3";
      break;
    case "sell": 
      style.width = '3rem';
      style.backgroundColor = "#DF514C1A";
      style.color = "#DF514C";
      break;
    default:
      style.backgroundColor = "#4444441A";
      style.color = "#444444";
      break;
  }
  
  return (
    <div className="">
      <span
        style={style}
        className="fw-lighter text-center"
      >
        {status}
      </span>
    </div>
  );
}

export default OrderStatus;
