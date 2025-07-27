import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      const task = {
        name: input,
        isComplete: false,
      };
      setTodos([...todos, task]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const removeItem = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="body">
      <div className="container">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task"
          />
          <button className="add-button" onClick={addTodo}>
            Add
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={todo.isComplete ? "completed" : ""}>
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleTodo(index)}
                  />
                  <span className="task-text">{todo.name}</span>
                </div>
                <button
                  className="delete-button"
                  onClick={() => removeItem(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
