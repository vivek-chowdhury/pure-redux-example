import React from "react";
import "./NavButton.css";

const NavButton = ({ uid, label, disabled, onClick }) => {
  return (
    <button id={uid} key={uid} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default NavButton;
