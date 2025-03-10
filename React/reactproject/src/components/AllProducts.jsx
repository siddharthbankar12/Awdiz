import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const router = useNavigate();

  const token = useSelector((state) => state.user.token);

  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data, "response");
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token == null) {
      router("/login");
    }
    getAllProducts();
  }, [token, router]);

  return (
    <>
      <div className="w-[80%] m-auto">
        {/* <h1 className="my-5">All Products</h1> */}

        <div className="flex flex-wrap justify-between gap-5">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  router(`/all-products/single-product/${product.id}`)
                }
                className="w-[23%] p-5 flex flex-col gap-3 border rounded-[12px] justify-start cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "60%", width: "100%", borderRadius: "10px" }}
                />
                <h2>
                  <b>Title : </b> {product.title}
                </h2>
                <p>
                  <b>Price :</b> {product.price}
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

export default AllProducts;
