import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          border: "2px solid black",
          cursor: "pointer",
        }}
      >
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          AllProducts
        </h1>
        <h1
          onClick={() => {
            navigate("/add-product");
          }}
        >
          Add Product
        </h1>
        <h1
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </h1>
      </div>
    </>
  );
};

export default Navbar;
