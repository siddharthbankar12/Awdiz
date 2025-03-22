import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);

  return (
    <>
      <h1>cart</h1>

      {cartProducts.map((product, idx) => (
        <div
          key={idx}
          style={{
            margin: "10px",
            border: "1px solid black",
            display: "inline-block",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h3>id: {product.id}</h3>
          <h3>product name: {product.name}</h3>
          <h3>product price: {product.price}</h3>
          <h3>product quantity: {product.quantity}</h3>
        </div>
      ))}
    </>
  );
};

export default Cart;
