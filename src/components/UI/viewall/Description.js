import React from "react";

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
