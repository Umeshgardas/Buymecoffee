import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaStar, FaSignInAlt } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <MdOutlineInsertChart />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <IoMdHeartEmpty />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/extras/myextras">
            <RiShoppingBasketFill />
            Extras
          </Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
