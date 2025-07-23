import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(input.trim() !== '') {
      setTodos([...todos, input])
      setInput('')
    }
  };

  const removeItem = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="body">
      <div className="container">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-button" onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo} <button className="delete-button" onClick={() => removeItem(index)}>Delete</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
