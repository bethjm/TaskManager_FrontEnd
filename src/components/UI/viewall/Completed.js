import React from "react";
// import "./Completed.css";

function Completed({ children }) {
  return (
    <div className="Completed">
      <div className="Completed_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Completed;
