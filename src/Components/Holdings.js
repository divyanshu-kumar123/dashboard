import React from 'react'

function Holdings() {
  return (
    <div className="container pt-5" style={{ height: "15rem" }}>
    <i class="fa-solid fa-briefcase fs-4"></i>
    <span className="text-gray-c fs-4 fw-lighter ms-2">Holdings (17)</span>
    <div className="row">
      <div className="col-md-6 border-end">
        <span
          className="fw-lighter text-green-c "
          style={{ fontSize: "4rem", letterSpacing: "8px" }}
        >
          50K
        </span>
        <span className="text-small-c text-gray opacity-75 text-green-c">
          +16.90%
        </span>
      </div>
      <div className="col-md-6 ps-3">
        <div className="pb-4 mt-2">
          <span className="text-gray-c ms-2 opacity-75">Current Value</span>
          <span className="text-black-c ms-2">15.46k</span>
        </div>
        <div>
          <span className="text-gray-c ms-2 opacity-75">Investement</span>
          <span className="text-black-c ms-2">50K</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Holdings