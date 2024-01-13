import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function Extras() {


  return (
    <>
      <div className="Extras_container">
        <h1>Extras</h1>
        <div className="extras_routes">
          <NavLink to="/extras/myextras"> My extras </NavLink>
          <NavLink to="/extras/supporters"> Supporters </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Extras;
