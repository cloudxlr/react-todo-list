import React from "react";

function CompletedTasks({ todos }) {
  return (
    <div>
      <h2>Completed Tasks</h2>
      {todos.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item">
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompletedTasks;
