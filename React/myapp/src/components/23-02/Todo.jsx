import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["first", "second"]);
  const [newTodo, setNewTodo] = useState("");

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit() {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <h1>my todos:</h1>
      {todos.map((todo, i) => (
        <h5 key={i}>
          {i + 1}. {todo}
        </h5>
      ))}
    </div>
  );
};

export default Todo;
