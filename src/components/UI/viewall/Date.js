import React from "react";
// import "./Date.css";

function Date({ children }) {
  return (
    <div className="Date">
      <div className="Date_Container">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Date;
