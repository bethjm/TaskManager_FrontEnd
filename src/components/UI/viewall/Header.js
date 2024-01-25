import React from "react";

function Header({ children }) {
  return (
    <div className="Header">
      <div className="Header_Container">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Header;
