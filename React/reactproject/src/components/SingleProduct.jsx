import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  async function getSingleProduct() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  return (
    <>
      <div className="mx-auto my-16 w-[50%]">
        <h1 className="my-5">Product Detail</h1>

        {singleProduct ? (
          <div className="flex flex-col gap-6 border p-10">
            <h2>
              <b>Category:</b> {singleProduct.category}
            </h2>
            <h2>
              <b>Title:</b> {singleProduct.title}
            </h2>
            <p>
              <b>Description:</b> {singleProduct.description}
            </p>
            <p>
              <b>Price:</b> ${singleProduct.price}
            </p>
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              width="150"
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
