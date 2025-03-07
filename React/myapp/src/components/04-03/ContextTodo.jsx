import React, { useContext } from "react";
import { MyTodoContext } from "../../context/TodoContext";

const ContextTodo = () => {
  const { state, dispatch } = useContext(MyTodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (state.newTodo.trim() !== "") {
      dispatch({ type: "handle_Submit" });
    }
  }

  function handleChange(event) {
    dispatch({ type: "handle_Change", payload: event.target.value });
  }

  return (
    <>
      <h1>Context Todo</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={state.newTodo}
            placeholder="Enter your todo"
            onChange={handleChange}
          />
          <button type="submit">add todo</button>
        </form>

        <div>
          <h2>Todo List:</h2>

          {state.todos.map((todo, idx) => (
            <div key={idx}>
              <h3>
                {idx + 1}.{todo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContextTodo;
