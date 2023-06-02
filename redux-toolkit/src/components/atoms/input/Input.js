import React from "react";
import "./Input.css";

const Input = ({
  uid,
  name,
  value,
  onChange,
  placeholder = "Enter value",
  type = "text",
  disabled = false,
}) => {
  return (
    <input
      id={uid}
      type={type}
      key={uid}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};
export default Input;
