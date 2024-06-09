import React from "react";

const CustomHeadingSecondary = ({ text, textColor }) => {
  return (
    <div>
      <h2 className={`fw-bold ${textColor}`} style={{ fontSize: "48px" }}>
        {text}
      </h2>
    </div>
  );
};

export default CustomHeadingSecondary;
