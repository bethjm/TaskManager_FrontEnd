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
          <a>
            <img src={Add} />
          </a>
          <a>
            <img src={Alert} />
          </a>
          <a>
            <img src={Today} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
