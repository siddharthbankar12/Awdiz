import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("inside todos component");
  return (
    <>
      <button onClick={addTodo}>Add Todos</button>
      {todos.map((todo, i) => (
        <div key={i}>
          <h3>
            {i + 1}.{todo}
          </h3>
        </div>
      ))}
    </>
  );
};

export default memo(Todos);
