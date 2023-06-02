import React from "react";
import "./Label.css";

export const LabelTypes = {
  LIGHT: "Light-Label",
  MEDIUM: "Medium-Label",
  LARGE: "Large-Label",
};

const Label = ({
  uid,
  label,
  size = LabelTypes.MEDIUM,
  optionClasses = null,
  optionalStyle = null,
}) => {
  const getStyleClasses = () => {
    return optionClasses ? `${size} ${optionClasses}` : size;
  };
  return (
    <span
      id={uid}
      key={uid}
      className={getStyleClasses()}
      style={optionalStyle}
    >
      {label}
    </span>
  );
};

export default Label;
