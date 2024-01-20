import React from "react";
// import "./Description.css";

function Description({ children }) {
  return (
    <div className="Description">
      <div className="Description_Container">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Description;
