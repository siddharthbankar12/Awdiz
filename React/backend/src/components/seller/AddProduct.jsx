import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "computer",
    image: "",
  });
  const router = useNavigate();
  const userData = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleChangeCategory = (event) => {
    setProductData({ ...productData, category: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userData?.userId) {
      return toast.error("Please login.");
    }

    try {
      if (
        productData.name &&
        productData.price &&
        productData.quantity &&
        productData.category &&
        productData.image
      ) {
        const response = await axios.post(
          "http://localhost:8000/api/v1/product/add-product",
          {
            productData,
            userId: userData.userId,
          }
        );
        if (response.data.success === true) {
          toast.success(response.data.message);
          setProductData({
            name: "",
            price: "",
            quantity: "",
            category: "computer",
            image: "",
          });
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("All fields are required.");
      }
    } catch (error) {
      console.log(error, "error while submitting register.");
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("Please login first.");
      router("/login");
    }
    if (!userData || (userData && userData?.role !== "seller")) {
      toast.error("You don't have access for this page.");
      router("/");
    }
  }, [userData, token]);

  return (
    <div className="border w-fit mx-auto mt-16">
      <h1 className="border p-5 text-center font-bold">Add Product</h1>

      <form
        className="m-5"
        onSubmit={handleSubmit}
        style={{
          textAlign: "left",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <label htmlFor="name">Product Name :</label> <br />
        <input
          className="mb-3 text-black px-2"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={productData.name}
          placeholder="Enter product name"
          required
        />
        <br />
        <label htmlFor="price">Product Price :</label> <br />
        <input
          className="mb-3 text-black px-2"
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          value={productData.price}
          placeholder="Enter price"
          required
        />
        <br />
        <label htmlFor="quantity">Total Quantity :</label> <br />
        <input
          className="mb-3 text-black px-2"
          type="number"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={productData.quantity}
          placeholder="Enter quantity"
          required
        />
        <br />
        <label htmlFor="category">Category :</label> <br />
        <select
          id="category"
          onChange={handleChangeCategory}
          value={productData.category}
          className="mb-3 text-black px-2"
        >
          <option value="computer">Computer</option>
          <option value="laptops">Laptops</option>
          <option value="mobiles">Mobiles</option>
          <option value="ac">AC</option>
          <option value="fans">Fans</option>
        </select>
        <br />
        <label htmlFor="image">Product Image URL :</label> <br />
        <input
          className="mb-3 text-black px-2"
          type="url"
          id="image"
          name="image"
          onChange={handleChange}
          value={productData.image}
          placeholder="Enter image URL"
          required
        />
        <br />
        <div className="flex justify-between mt-3">
          <button type="submit" className="border px-3 py-1">
            Add Product
          </button>
          <button
            type="button"
            onClick={() => router("/")}
            className="border px-3 py-1"
          >
            Cancel
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AddProduct;
