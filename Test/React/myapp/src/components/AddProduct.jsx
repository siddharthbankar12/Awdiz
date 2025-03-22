import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/slices/cartSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.cart);

  const [addPro, setAddPro] = useState({});

  function handleChange(event) {
    setAddPro((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addProduct(addPro));
    console.log(addPro);
    setAddPro({});
  }

  useEffect(() => {
    localStorage.setItem("all-products", JSON.stringify(allProducts));
  }, [allProducts]);
  return (
    <>
      <div className="container" style={{ flexDirection: "column" }}>
        <h1 style={{ marginBottom: "15px" }}>add-products</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "15px",
            border: "1px solid black",
            padding: "25px",
          }}
        >
          <input
            type="text"
            placeholder="enter product ID"
            onChange={handleChange}
            name="id"
            value={addPro.id || ""}
          />
          <input
            type="text"
            placeholder="enter product name.."
            onChange={handleChange}
            name="name"
            value={addPro.name || ""}
          />
          <input
            type="text"
            placeholder="enter product price.."
            onChange={handleChange}
            name="price"
            value={addPro.price || ""}
          />
          <input
            type="text"
            placeholder="enter product quantity"
            onChange={handleChange}
            name="quantity"
            value={addPro.quantity || ""}
          />
          <button type="submit">add product</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
