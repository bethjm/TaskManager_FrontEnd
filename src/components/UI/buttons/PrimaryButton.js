import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ children }) {
  return (
    <div className="PrimaryButton">
      <div className="PrimaryButton_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default PrimaryButton;
