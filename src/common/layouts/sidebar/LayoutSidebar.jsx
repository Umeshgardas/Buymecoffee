import { useState, Fragment } from "react";
import { Dropdown, Popover, Whisper } from "rsuite";

// components
import { Link } from "react-router-dom";

// icons

const LayoutSidebar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LayoutSidebar;
