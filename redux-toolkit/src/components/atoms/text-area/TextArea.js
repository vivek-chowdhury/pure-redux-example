import React from "react";
import "./TextArea.css";

const TextArea = ({
  uid,
  name,
  value,
  onChange,
  placeholder = "Enter value",
  disabled = false,
}) => {
  return (
    <textarea
      className="textArea"
      id={uid}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    ></textarea>
  );
};
export default TextArea;
