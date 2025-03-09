import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "../../redux/counterSlice";

const ReduxCounter = () => {
  const counterValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function increment() {
    dispatch(Increment());
  }
  function decrement() {
    dispatch(Decrement());
  }
  function reset() {
    dispatch(Reset());
  }

  return (
    <>
      <div>
        <h1>ReduxCounter : {counterValue}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default ReduxCounter;
