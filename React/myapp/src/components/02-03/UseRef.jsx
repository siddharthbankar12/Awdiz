import React, { useRef, useState } from "react";

const UseRef = () => {
  const counter = useRef(1);

  const [stateCounter, setStateCounter] = useState(100);

  return (
    <>
      <h1>UseRef</h1>

      <div>
        <h1>counter : {counter.current}</h1>
        <button
          onClick={() => {
            counter.current += 1;
            alert(counter.current);
          }}
        >
          +
        </button>
        <br />

        <h1>State Counter : {stateCounter}</h1>
        <button onClick={() => setStateCounter((prev) => prev + 1)}>+</button>
      </div>
    </>
  );
};

export default UseRef;
