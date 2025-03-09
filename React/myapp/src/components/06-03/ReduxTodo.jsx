import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HandleSubmit, HandleChange } from "../../redux/todoSlice";

const ReduxTodo = () => {
  const dispatch = useDispatch();
  const { newTodo, todos } = useSelector((state) => state.todo);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(HandleSubmit());
  }

  function handleChange(event) {
    dispatch(HandleChange(event.target.value));
  }

  return (
    <>
      <h1>ReduxTodo</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={newTodo}
            placeholder="enter todo"
          />
          <button type="submit">Add todo</button>
        </form>
      </div>

      <div>
        <h2>todo list</h2>
        {todos.map((todo, idx) => (
          <h2 key={idx}>
            {idx + 1}.{todo}
          </h2>
        ))}
      </div>
    </>
  );
};

export default ReduxTodo;
