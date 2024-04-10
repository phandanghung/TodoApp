import React from "react";
import "./TaskList.css";

function TaskList({
  doneTaskList,
  todos,
  handleDoneTodo,
  startEditTodo,
  deleteTodo,
}) {
  const onChangeCheckbox = (idTodo) => (event) => {
    handleDoneTodo(idTodo, event.target.checked);
  };

  return (
    <div className="TaskList">
      <h3>{doneTaskList ? "Done" : "Not Yet"}</h3>
      <div className="tasks">
        {todos.map((todo) => (
          <div className="task" key={todo.id}>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)}
            />
            <span className={todo.done ? "completed text-muted" : ""}>
              {todo.name}
            </span>
            {todo.done && (
              <h5>
                Completed Date: {new Date(todo.completedDate).toLocaleString()}
              </h5>
            )}
            <div className="taskActions">
              <button onClick={() => startEditTodo(todo.id)}>🖊️</button>
              <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
