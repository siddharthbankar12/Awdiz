import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const [render, setRender] = useState("initial render");

  useEffect(() => {
    if (counter > 0) {
      setRender("counter button click");
    }
  }, [counter]);

  useEffect(() => {
    if (counter2 !== 100) {
      setRender("counter2 button click");
    }
  }, [counter2]);

  return (
    <div>
      <h1>useEffect counter : {counter}</h1>
      <h1>useEffect counter2 : {counter2} </h1>

      <h1>{render}</h1>

      <button onClick={() => setCounter((prev) => prev + 1)}> counter </button>
      <button onClick={() => setCounter2((prev) => prev + 5)}>counter 2</button>
    </div>
  );
};

export default UseEffect;
