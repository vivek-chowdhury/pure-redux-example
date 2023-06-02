import React, { useEffect, useState } from "react";
import "./ContentContainer.css";
import TodoEditor from "../../molecules/todo-editor/TodoEditor";
import List from "../list/List";

const ContentContainer = ({ title, store }) => {
  const [records, setRecords] = useState({
    todo: [],
    reminders: [],
    notes: [],
  });

  useEffect(() => {
    if (store) {
      setRecords(store);
    }
  }, [store]);

  const onFormSubmitted = (data) => {
    setRecords(() => {
      return {
        ...records,
        todo: [data, ...records.todo],
      };
    });
  };

  return (
    <div className="tabcontent">
      <h3>{title}</h3>
      <section>
        <TodoEditor onSubmitted={onFormSubmitted}></TodoEditor>
        <List records={records.todo}></List>
      </section>
    </div>
  );
};
export default ContentContainer;
