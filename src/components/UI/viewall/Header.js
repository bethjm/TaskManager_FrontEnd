import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <div className="Header">
      <div className="Header_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Header;
