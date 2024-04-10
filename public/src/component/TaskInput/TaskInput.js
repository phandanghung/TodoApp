import React, { useState } from "react";
import "./TaskInput.css";

function TaskInput({ addTodo, currentTodo, editTodo, finishEditTodo }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo) {
      finishEditTodo();
      if (name) setName("");
    } else {
      addTodo(name);
      setName("");
    }
  };

  const onChangeInput = (event) => {
    const { value } = event.target;
    if (currentTodo) {
      editTodo(value);
    } else {
      setName(value);
    }
  };

  return (
    <div className="taskInput ">
      <h2>What Thing To Do</h2>
      <form className="formInput d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  );
}

export default TaskInput;
