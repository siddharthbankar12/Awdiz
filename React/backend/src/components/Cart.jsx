import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const userData = useSelector((state) => state.user.user);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getCartProducts = async () => {
    try {
      if (!userData?.userId) {
        return toast.error("Please login to view cart products");
      }

      const response = await axios.post(
        "http://localhost:8000/api/v1/user/get-cart-products",
        { userId: userData.userId }
      );

      if (response.data.noProductsFound) {
        return toast.success("No products found in cart");
      }

      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userData?.userId) {
      getCartProducts();
    }
  }, [userData]);

  return (
    <>
      {loading ? (
        <h1 className="text-center mt-[70px]">Loading...</h1>
      ) : (
        <div className="w-[80%] m-auto mt-[60px]">
          <div className="flex flex-wrap justify-start gap-[40px]">
            {products.length > 0 ? (
              products.map((product, idx) => (
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

export default Cart;
