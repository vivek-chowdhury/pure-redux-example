import React from "react";
import "./TopBar.css";
import Navigation from "../../molecules/navigation/Navigation";

const TopBar = () => {
  const onMenuButtonClicked = (event) => {};
  return (
    <nav>
      <Navigation onClick={onMenuButtonClicked}></Navigation>
    </nav>
  );
};
export default TopBar;
