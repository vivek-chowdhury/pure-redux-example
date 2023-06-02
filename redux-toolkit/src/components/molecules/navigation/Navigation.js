import React from "react";
import NavButton from "../../atoms/nav-button/NavButton";

import "./Navigation.css";

const Navigation = ({ onClick }) => {
  return (
    <div className="tab">
      <NavButton uid="nav-todo-tab" label="TODOS" onClick={onClick}></NavButton>
      <NavButton
        uid="nav-reminder-tab"
        label="REMINDERS"
        onClick={onClick}
      ></NavButton>
      <NavButton
        uid="nav-notes-tab"
        label="DAILY NOTES"
        onClick={onClick}
      ></NavButton>
    </div>
  );
};

export default Navigation;
