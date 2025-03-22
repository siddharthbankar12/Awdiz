import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";

const AllProducts = () => {
  const { allProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [addToCart, setAddToCart] = useState([]);

  const handleCartSubmit = (idx) => {
    const selectedProduct = allProducts[idx];
    setAddToCart(selectedProduct);
    dispatch(updateCart(addToCart));
    console.log(addToCart);
  };

  useEffect(() => {
    console.log(addToCart);
  }, [addToCart]);

  return (
    <div className="container" style={{ flexDirection: "column" }}>
      <h1>All Products</h1>
      {allProducts.map((product, idx) => (
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
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "10px",
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            <p onClick={() => handleCartSubmit(idx)}>Add To Cart</p>
          </div>
          <h3>id: {product.id}</h3>
          <h3>product name: {product.name}</h3>
          <h3>product price: {product.price}</h3>
          <h3>product quantity: {product.quantity}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
