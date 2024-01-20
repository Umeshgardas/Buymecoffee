import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaStar, FaSignInAlt } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            <MdOutlineInsertChart />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <IoMdHeartEmpty />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/extras/myextras">
            <RiShoppingBasketFill />
            Extras
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
