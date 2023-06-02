import React, { useState } from "react";
import "./TodoEditor.css";
import Input from "../../atoms/input/Input";
import TextArea from "../../atoms/text-area/TextArea";

let initialState = { title: "", description: "" };
const TodoEditor = ({ onSubmitted }) => {
  const [formData, setFormData] = useState(initialState);
  const onInputChanged = ({ target }) => {
    setFormData(() => {
      return { ...formData, [target.name]: target.value };
    });
  };
  const onSubmitClick = (event) => {
    console.log("--------------------");
    event.preventDefault();
    const date = new Date();
    onSubmitted({
      ...formData,
      dated: date.toDateString(),
      id: date.getMilliseconds(),
    });
    setFormData(initialState);
  };

  const enableSumbitButton = () => {
    return !(formData.title !== "" && formData.description !== "");
  };
  return (
    <form onSubmit={onSubmitClick} className="form-container">
      <Input
        uid="todo-title"
        name="title"
        value={formData.title}
        placeholder="Enter todo title"
        onChange={onInputChanged}
      ></Input>
      <TextArea
        uid="todo-description"
        name="description"
        placeholder="Enter todo description"
        value={formData.description}
        onChange={onInputChanged}
      ></TextArea>
      <Input
        uid="todo-title"
        type="submit"
        onChange={onSubmitClick}
        disabled={enableSumbitButton()}
      ></Input>
    </form>
  );
};

export default TodoEditor;
