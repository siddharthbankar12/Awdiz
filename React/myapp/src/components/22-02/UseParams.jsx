import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseParams() {
  let products = 10;

  const router = useNavigate();
  const [numbers, setNumbers] = useState(() => {
    let arr = [];
    for (let i = 1; i <= products; i++) {
      arr.push(i);
    }
    return arr;
  });

  return (
    <div>
      <h1>UseParams</h1>
      {numbers.map((uniqueid) => (
        <button onClick={() => router(`/useparams/paramsproduct/${uniqueid}`)}>
          product {uniqueid}
        </button>
      ))}
    </div>
  );
}
export default UseParams;
