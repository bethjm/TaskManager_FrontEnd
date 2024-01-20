import React from "react";
import "./Description.css";

function Description({ children }) {
  return (
    <div className="Description">
      <div className="Description_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Description;
