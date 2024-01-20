import React from "react";
// import "./Completed.css";

function Completed({ children }) {
  return (
    <div className="Completed">
      <div className="Completed_Container">
        <h2>{children}</h2>
        {/* make this a button. when true, green. when false, red */}
      </div>
    </div>
  );
}

export default Completed;
