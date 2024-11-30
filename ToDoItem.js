import React from "react";

function ToDoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <div>
        <button
          className={`btn btn-sm ${todo.completed ? "btn-warning" : "btn-success"} me-2`}
          onClick={() => toggleComplete(index)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
