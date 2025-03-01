import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit() {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }
    setNewTodo("");
  }

  function deleteTodo(i) {
    const deletedTodos = [...todos];
    deletedTodos.splice(i, 1);
    setTodos(deletedTodos);
  }

  function editTodo(todo, i) {
    setNewTodo(todo);
    setEditIndex(i);
  }

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update Todo" : "Add Todo"}
      </button>
      <h1>my todos:</h1>
      {todos.map((todo, i) => (
        <div key={i} style={{ display: "flex" }}>
          <p>
            {i + 1}. {todo}
          </p>
          <button onClick={() => deleteTodo(i)}>delete</button>
          <button onClick={() => editTodo(todo, i)}>edit</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
