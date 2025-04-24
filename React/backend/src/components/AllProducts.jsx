import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();

  // const token = localStorage.getItem("token");

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/product/all-products"
      );
      if (response.data.success) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(allProducts);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center mt-[70px]">Loading...</h1>
      ) : (
        <div className="w-[80%] m-auto mt-[60px]">
          <div className="flex flex-wrap justify-start gap-[40px]">
            {allProducts.length > 0 ? (
              allProducts.map((product, idx) => (
                <div
                  key={idx + 1}
                  onClick={() =>
                    navigate(`/all-products/single-product/${product._id}`)
                  }
                  className="w-[260px] p-5 flex flex-col gap-3 border rounded-[12px] justify-start cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[60%] w-full rounded-[10px] object-cover"
                  />
                  <h2>
                    <b>Product Name : </b> {product.name}
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
              <p>Please wait...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
