import React from "react";
import InfoBlock from "./InfoBlock";
import InfoBlockContainer from "./InfoBlockContainer";

function LeftPane() {
  return (
    <div className="border-end">
      <div className="border">
        <input
          style={{ width: "100%", height: "40px", border: "none" }}
          placeholder="Search (infy bse, nifty fut, etc)"
        />
      </div>
      <div>
        <InfoBlockContainer />
      </div>
    </div>
  );
}

export default LeftPane;
