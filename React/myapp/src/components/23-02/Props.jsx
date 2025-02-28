import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1>props {props.counterProps}</h1>

      <button onClick={() => props.setCounterProps((add) => add + 1)}>+</button>
      <button
        onClick={() =>
          props.setCounterProps((sub) => (sub > 1 ? sub - 1 : sub))
        }
      >
        -
      </button>
    </div>
  );
};

export default Props;
