import React from "react";

const Props = ({ counter, setCounter }) => {
  return (
    <div>
      <h1>props {counter}</h1>

      <button onClick={() => setCounter((add) => add + 1)}>+ </button>
      <button onClick={() => setCounter((sub) => (sub > 1 ? sub - 1 : sub))}>
        -
      </button>
    </div>
  );
};

export default Props;
