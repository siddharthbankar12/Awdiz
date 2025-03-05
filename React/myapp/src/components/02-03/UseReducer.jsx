import React, { useReducer } from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };

    case "RESET_COUNTER":
      return { ...state, counter: 1 };

    default:
      return state;
  }
}
const initialState = { counter: 0 };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function Increment() {
    dispatch({ type: "INCREMENT_COUNTER" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT_COUNTER" });
  }
  function Reset() {
    dispatch({ type: "RESET_COUNTER" });
  }

  return (
    <>
      <h1>UseReducer</h1>
      <br />

      <h1>Counter : {state.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>reset</button>
    </>
  );
};

export default UseReducer;
