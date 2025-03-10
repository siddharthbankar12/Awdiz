import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.user.token);

  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getAllProducts();
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <div className="w-[80%] m-auto">
        <div className="flex flex-wrap justify-between gap-5">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  navigate(`/all-products/single-product/${product.id}`)
                }
                className="w-[23%] p-5 flex flex-col gap-3 border rounded-[12px] justify-start cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[60%] w-full rounded-[10px] object-cover"
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
