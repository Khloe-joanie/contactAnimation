/** @format */

import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
// import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Link onClick={showSidebar} to="#" className="menu-bars">
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul
          className="nav-menu-items"
          onClick={showSidebar}
          style={{ paddingTop: "5em" }}
        >
          <li className="navbar-toggle" style={{ marginBottom: "1em" }}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
