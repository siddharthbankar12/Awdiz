import React, { useCallback, useState } from "react";
import Todos from "../01-03/Todos";

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  //   const addTodo = () => {
  //     setTodos([...todos, "add Todo"]);
  //   };

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "addTodo"]);
  }, []);

  return (
    <>
      <h1>UseCallBack</h1>

      <div>
        <h1>Todos</h1>
        <Todos todos={todos} addTodo={addTodo} />
      </div>

      <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => setCounter((add) => add + 1)}>+</button>
      </div>
    </>
  );
};

export default UseCallBack;
