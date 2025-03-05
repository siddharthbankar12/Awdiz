import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);

  //   const heavyCalculation = functionForHeavyCalculation(counter);

  const heavyCalculation = useMemo(
    () => functionForHeavyCalculation(counter),
    [counter]
  );

  return (
    <>
      <h1>UseMemo </h1>
      <br />
      <div>
        <h2>Heavy Calculation : {heavyCalculation} </h2>

        <h2>counter {counter}</h2>
        <button onClick={() => setCounter((add) => add + 1)}>+</button>
      </div>
      <br />

      <div>
        <h1>Todos</h1>
        <button onClick={() => setTodos([...todos, "add todo"])}>
          add todo
        </button>
        <div>
          {todos.map((todo, i) => (
            <div key={i}>
              <h3>
                {i + 1}.{todo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function functionForHeavyCalculation(counter) {
  //   console.log(counter, "counter");

  for (let i = 0; i < 1000000000; i++) {
    counter++;
  }

  return counter;
}

export default UseMemo;
