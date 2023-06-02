import React from "react";
import "./Row.css";

import Label, { LabelTypes } from "../../atoms/label/Label";

const Row = ({ uid, title, description, dated }) => {
  return (
    <div key={uid + "-container"} className="row-container">
      <Label
        uid={uid + "-title"}
        key={uid + "-title"}
        size={LabelTypes.LARGE}
        optionClasses="title-style"
        label={title}
      ></Label>
      <Label
        uid={uid + "-des"}
        key={uid + "-des"}
        size={LabelTypes.MEDIUM}
        label={description}
      ></Label>
      <Label
        uid={uid + "-date"}
        key={uid + "-date"}
        size={LabelTypes.LIGHT}
        label={"Dated: " + dated}
        optionClasses="date-style"
      ></Label>
    </div>
  );
};
export default Row;
