import React, { useEffect, useState } from "react";

function InfoBlock({
  title = "SENSEX",
  tag = "INDEX",
  pricing = "-371.75",
  pricingPercent = "0.60",
  absolutePrice = "65473.3",
}) {
  const [isProfit, setIsProfit] = useState(true);
  useEffect(() => {
    setIsProfit(parseFloat(pricingPercent) > 0);
  }, [pricingPercent]);
  return (
    <div
      className="container-fluid border-bottom row"
      style={{ height: "2.8rem", lineHeight: 2 }}
    >
      <div className="col-md-5">
        <span
          className={
            !isProfit
              ? "text-red-c fs-5 fw-normal"
              : "text-green-c fs-5 fw-normal"
          }
        >
          {" "}
          {title}
        </span>
        <span className="text-xsmall-c text-gray-c pb-1 opacity-75">{tag}</span>
      </div>
      <div className="col-md-7 pt-1 text-end">
        <div className="info justify-content-end">
          <span className="opacity-50 text-gray-c">{pricing}</span>&nbsp;
          <span className="text-gray-c text-small-c ms-1 me-1">
            {pricingPercent}%
          </span>
          &nbsp;
          <span
            className={
              !isProfit
                ? "text-small-c text-red-c"
                : "text-small-c text-green-c"
            }
          >
            {!isProfit ? (
              <i class="fa-solid fa-chevron-down"></i>
            ) : (
              <i class="fa-solid fa-angle-up"></i>
            )}
            {absolutePrice} %
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
