import React from "react";
import "./NavBar.css";

import Add from "../images/add_sign.png";
import Alert from "../images/Alert.png";
import Today from "../images/Calendar.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar_Container">
        <div className="nav_icons">
          <a className="icon_container" href="/api/tasks/viewday">
            <img src={Today} />
          </a>
          <a className="icon_container" href="/api/tasks/addnew">
            <img src={Add} />
          </a>
          <a className="icon_container" href="/">
            <img src={Alert} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
