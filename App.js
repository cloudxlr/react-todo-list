import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import CompletedTasks from "./CompletedTasks";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const [todos, setTodos] = useState([]); // State to manage to-do items

  // Function to add a new to-do item
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to toggle the completion status of a to-do
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Function to remove a to-do item
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Router basename="/testreact">
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              To-Do List
            </Link>
            <div>
              <Link className="nav-link d-inline" to="/">
                Home
              </Link>
              <Link className="nav-link d-inline" to="/completed">
                Completed Tasks
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <ToDoForm addTodo={addTodo} />
                  <ul className="list-group mt-3">
                    {todos.map((todo, index) => (
                      <ToDoItem
                        key={index}
                        index={index}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        removeTodo={removeTodo}
                      />
                    ))}
                  </ul>
                </>
              }
            />

            {/* Completed Tasks Route */}
            <Route
              path="/completed"
              element={<CompletedTasks todos={todos.filter((todo) => todo.completed)} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
