import React, { useContext } from "react";
import { MyCounterContext } from "../../context/CounterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(MyCounterContext);

  function Increment() {
    dispatch({ type: "INCREMENT_COUNTER" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT_COUNTER" });
  }
  function Reset() {
    dispatch({ type: "RESET_COUNTER" });
  }

  function DarkMode() {
    dispatch({ type: "DARK_MODE" });
  }

  function LightMode() {
    dispatch({ type: "LIGHT_MODE" });
  }

  return (
    <>
      <h1>ContextCounter</h1>

      <div>
        <h2>Counter : {state.counter}</h2>

        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
      </div>
      <br />

      <div>Mode : {state.mode}</div>
      <button onClick={state.mode === "dark" ? LightMode : DarkMode}>
        {state.mode === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
};

export default ContextCounter;
