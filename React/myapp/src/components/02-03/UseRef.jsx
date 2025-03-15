import React, { useRef, useState } from "react";

const UseRef = () => {
  const counter = useRef(1);
  console.log(counter.current, "after page render");

  const [stateCounter, setStateCounter] = useState(100);

  return (
    <>
      <h1>UseRef</h1>

      <div>
        <h1>counter : {counter.current}</h1>
        <button
          onClick={() => {
            counter.current += 1;
            console.log(counter.current);
          }}
        >
          +
        </button>
        <br />

        <h1>State Counter : {stateCounter}</h1>
        <button
          onClick={() =>
            setStateCounter((prev) => {
              return prev + 1;
            })
          }
        >
          +
        </button>
      </div>
    </>
  );
};

export default UseRef;
