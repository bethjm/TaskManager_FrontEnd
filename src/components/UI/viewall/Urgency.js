import React from "react";
// import "./Urgency.css";

function Urgency({ children }) {
  return (
    <div className="Urgency">
      <div className="Urgency_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default Urgency;
