import React from "react";
import { useState } from "react";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (editIndex !== null) {
      const update = [...todos];
      update[editIndex] = newTodo;
      setTodos(update);
      setEditIndex(null);
    } else {
      event.preventDefault();
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  function editTodo(idx, todo) {
    setEditIndex(idx);
    setNewTodo(todo);
  }

  function deleteTodo(idx) {
    const deleteTodoIdx = [...todos];

    deleteTodoIdx.splice(idx, 1);

    setTodos(deleteTodoIdx);
  }
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo"
          onChange={handleChange}
          value={newTodo}
          required
        />
        <button type="submit">
          {editIndex !== null ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <div>
        <h3>todos list :</h3>
        {todos.map((todo, idx) => (
          <div key={idx} style={{ display: "flex", margin: "10px 0" }}>
            <h3>
              {idx + 1} . {todo}
            </h3>
            <button onClick={() => editTodo(idx, todo)}>edit</button>
            <button onClick={() => deleteTodo(idx)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
