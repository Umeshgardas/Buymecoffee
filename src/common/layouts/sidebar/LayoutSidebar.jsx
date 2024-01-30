import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLockOutline, MdOutlineInsertChart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { TbNotes, TbUserSquareRounded } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";

const sidebarLink = [
  {
    icon: <MdOutlineInsertChart />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <IoMdHeartEmpty />,
    name: "Supporters",
    path: "/profile",
  },
  {
    icon: <MdLockOutline />,
    name: "Membership",
    path: "/membership",
  },
  {
    icon: <BsBasket />,
    name: "Extras",
    path: "/extras/myextras",
  },
  {
    icon: <TbNotes />,
    name: "Post",
    path: "/post",
  },
  {
    icon: <TbUserSquareRounded />,
    name: "Page settings",
    path: "/pagesettings",
  },
  {
    icon: <IoSettingsOutline />,
    name: "Settings",
    path: "/settings",
  },
];

function Sidebar({ onChange }) {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    onChange(!toggleIcon);
  };

  return (
    <div style={{ width: toggleIcon ? "200px" : "50px" }} className="sidebar">
      <div className="sidebar__top_section">
        <FaBars size={20} onClick={handleToggleIcon} />
        <div
          style={{
            display: toggleIcon ? "block" : "none",
          }}
          className="sidebar__top_section__logo"
        >
          Logo
        </div>
      </div>
      {sidebarLink.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="sidebar__link"
          activeclassname="active"
        >
          <div className="sidebar__link__icon">{item.icon}</div>
          <div
            style={{ display: toggleIcon ? "block" : "none" }}
            className="link_text"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
    // <nav className="navbar">
    //   <ul className={`navbar__container__menu ${toggleIcon ? "active" : " "} `}>
    //     {sidebarLink.map((item) => (
    //       <li className="navbar__container__menu__item">
    //         <Link className="navbar__container__menu__item__links" to={item.to}>
    //           {item.icon}
    //           <span className="label">{item.label}</span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="nav-icon" onClick={handleToggleIcon}>
    //     {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
    //   </div>
    // </nav>

    /* <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
   
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/extras/myextras">
           
            Extras
          </NavLink>
        </li>
      </ul>
    </nav> */
  );
}

export default Sidebar;
