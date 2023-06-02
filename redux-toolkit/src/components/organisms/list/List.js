import React from "react";
import "./List.css";
import Row from "../../molecules/row/Row";

const List = ({ records }) => {
  const renderRecords = () => {
    return records && records.length > 0
      ? records.map((item, index) => {
          return (
            <Row
              uid={"row-" + index + "-" + item.id}
              key={"row-" + index + "_" + item.id}
              title={item.title}
              description={item.description}
              dated={item.dated}
            ></Row>
          );
        })
      : null;
  };
  return <div className="list-container">{renderRecords()}</div>;
};

export default List;
