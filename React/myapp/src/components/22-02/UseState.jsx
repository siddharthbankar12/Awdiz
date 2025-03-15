import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  const [userLogin, setUserLogin] = useState(true);

  function increment() {
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }
  function reset() {
    setCounter(1);
  }

  function toggleLogin() {
    setUserLogin(!userLogin);
  }

  return (
    <div>
      {userLogin ? (
        <div>
          <h1>Please login In.</h1>
          <button onClick={toggleLogin}>Click to Login</button>
        </div>
      ) : (
        <div>
          <h1>Welcome</h1>
          <button onClick={toggleLogin}>click to logout</button>
        </div>
      )}

      <h1>Welcome to login page</h1>

      <h1>Counter {counter}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default UseState;
