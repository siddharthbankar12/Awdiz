import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const AddedProducts = () => {
  // const router = useNavigate();
  const userData = useSelector((state) => state.user.user);
  const [products, setProducts] = useState([]);

  const getAddedProducts = async () => {
    if (userData?.userId && userData.role === "seller") {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/V1/product/added-products",
          { userId: userData.userId }
        );
        if (response.data.success) {
          setProducts(response.data.products);
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    getAddedProducts();
    if (userData && userData?.role !== "seller") {
      toast.error("You don't have access for this page.");
      //   router("/");
    }
  }, [userData]);
  return (
    <>
      <div className="w-[80%] m-auto">
        <h1 className="text-center my-[50px]">Your's added products</h1>
        <div className="flex flex-wrap justify-start gap-10">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="w-[23%] p-5 flex flex-col gap-3 border rounded-[12px] justify-start cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[60%] w-full rounded-[10px] object-cover"
                />
                <h2>
                  <b>Name : </b> {product.name}
                </h2>
                <p>
                  <b>Price :</b> ₹{product.price}
                </p>
                <p>
                  <b>Category :</b> {product.category}
                </p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AddedProducts;
