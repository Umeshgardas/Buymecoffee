// Header.jsx

import React from "react";
import { FaUser } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        {/* Assuming you have a coffee logo available */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcctLwxW_b2Y4LJUlAqxXs4YpGeb8djRd6ldmFhngLfAFl0b4"
          alt=""
        />
      </div>
      <div className="user_avatar">
        <button className="myPageButton" onClick={() => navigate("/signup")}>
          My Page
        </button>
        {/* Using a user avatar icon from react-icons */}
        <FaUser />
      </div>
    </header>
  );
};

export default Header;
