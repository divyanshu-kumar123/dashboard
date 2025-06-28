import React, { useEffect, useState } from "react";
import setTextColor from "../setTextColor";

function InfoBlock({
  title = "SENSEX",
  tag = "INDEX",
  pricing = "-371.75",
  pricingPercent = "0.60",
  absolutePrice = "65473.3",
}) {
  const [isProfit, setIsProfit] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsProfit(parseFloat(pricingPercent) > 0);
  }, [pricingPercent]);

  return (
    <div
      className="container-fluid border-bottom row position-relative overflow-hidden"
      style={{ height: "2.8rem", lineHeight: 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main InfoBlock Content */}
      <div className="col-md-5">
        <span
          className={setTextColor("text-small-c fw-normal", pricingPercent)}
        >
          {title}
        </span>
        <span className="text-xsmall-c text-gray-c pb-1 opacity-75 ms-2">
          {tag}
        </span>
      </div>

      <div className="col-md-7 pt-1 text-end d-flex justify-content-end align-items-center gap-2">
        <span className="opacity-50 text-gray-c">{pricing}</span>
        <span className="text-gray-c text-small-c">{pricingPercent}%</span>
        <span
          className={setTextColor("text-small-c", pricingPercent)}
        >

          {pricingPercent<=0 ? <i className="fa-solid fa-chevron-down"></i> :    <i className="fa-solid fa-angle-up"></i>}
          {absolutePrice}
        </span>
      </div>

      {/* Hover Buttons Overlay */}
      {isHovered && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-end align-items-center pe-3"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            zIndex: 10,
          }}
        >
          <button className="btn btn-sm btn-primary me-1 ps-3 pe-3 border">B</button>
          <button className="btn btn-sm btn-danger me-1 ps-3 pe-3 border">s</button>
          <button className="btn btn-sm btn-light me-1 border"><i class="fa-solid fa-align-center"></i></button>
          <button className="btn btn-sm btn-light me-1 border"><i class="fa-solid fa-chart-line"></i></button>
          <button className="btn btn-sm btn-light me-1 border"><i class="fa-solid fa-trash-can"></i></button>
          <button className="btn btn-sm btn-light me-1 border"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
      )}
    </div>
  );
}

export default InfoBlock;
