// Header.jsx

import React from "react";
import { FaUser } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* Assuming you have a coffee logo available */}
        <SiBuymeacoffee />
      </div>
      <div className="user_avatar">
      <button className="myPageButton">My Page</button>
        {/* Using a user avatar icon from react-icons */}
        <FaUser />
      </div>
    </header>
  );
};

export default Header;
