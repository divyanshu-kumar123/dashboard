import React from "react";
import {Link} from 'react-router-dom'

function RightNav() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <Link to="" className="navbar-brand pt-0">
      <img width={'20rem'} src="./Assets/kite-logo.svg"/>
      </Link>
      <div className="form-inline">
        <Link to="/" className="text-gray-c text-small-c ms-4">Dashboard</Link>
        <Link to="/order" className="text-gray-c text-small-c ms-4">Order</Link>
        <Link to="/" className="text-gray-c text-small-c ms-4">Holdings</Link>
        <Link to="/" className="text-gray-c text-small-c ms-4">Positions</Link>
        <Link to="/" className="text-gray-c text-small-c ms-4">Bid</Link>
        <Link to="/" className="text-gray-c text-small-c ms-4 me-5">Funds</Link>
        <Link to="/" className="text-gray-c text-small-c ms-4 "><i class="fa-regular fa-bell"></i></Link>
        <Link to="/" className="text-gray-c text-small-c ms-4 me-5">Demo User</Link>
      </div>
    </nav>
  );
}

export default RightNav;
