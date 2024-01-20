import React from "react";
// import "./Date.css";

function Date({ children }) {
  return (
    <div className="Date">
      <div className="Date_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Date;
