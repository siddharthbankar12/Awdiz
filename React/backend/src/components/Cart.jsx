import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const userData = useSelector((state) => state.user.user);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const router = useNavigate();

  const getCartProducts = async (e) => {
    try {
      if (!userData?.userId) {
        return toast.error("Please login to view cart products");
      }
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/get-cart-products",
        { userId: userData.userId }
      );
      if (response.data.success) {
        setProducts(response.data.products);

        let totalQuantity = 0;
        response.data.products.forEach((item) => {
          totalQuantity += item.quantity;
        });
        setQuantity(totalQuantity);

        setTotalPrice(response.data.totalPrice);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCartProduct = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/delete-cart-products",
        { userId: userData.userId, productId }
      );
      if (response.data.success) {
        toast.success("Product removed from cart");
        getCartProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (productId, action) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/update-cart-product-quantity",
        { userId: userData.userId, productId, action }
      );
      if (response.data.success) {
        getCartProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkOut = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/checkout",
        { userId: userData.userId, products }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router("/order-history");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        <div className="w-[80%] m-auto mt-[60px] flex items-start">
          <div className="flex flex-wrap justify-start gap-[40px] w-[80%]">
            {products.length > 0 ? (
              products.map((product, idx) => (
                <div
                  key={idx}
                  className="w-[260px] p-5 flex flex-col gap-3 border rounded-[12px] justify-start"
                >
                  <div
                    className="my-2 flex justify-end cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      removeCartProduct(product._id);
                    }}
                  >
                    <MdDelete />
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[60%] w-full rounded-[10px] object-cover"
                  />
                  <h2>
                    <b>Product Name:</b> {product.name}
                  </h2>
                  <p>
                    <b>Price:</b> ₹{product.price}
                  </p>
                  <p>
                    <b>Category:</b> {product.category}
                  </p>
                  <div className="flex gap-2">
                    <b>Quantity:</b>
                    <div className="flex gap-2 items-center">
                      <FaPlus
                        size={12}
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product._id, "increase")}
                      />
                      {product.quantity}
                      <FaMinus
                        size={12}
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product._id, "decrease")}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Zero Products in cart ...</p>
            )}
          </div>

          <div className="w-[20%] p-5 flex flex-col gap-6 border rounded-[12px] ">
            <b className="text-2xl">Cart Details</b>
            <div className="flex flex-col gap-2">
              <p>
                <b>Total Cart Products:</b> {quantity}
              </p>
              <p>
                <b>Total Price:</b> ₹{totalPrice}
              </p>
              <button
                className="bg-white text-black rounded font-bold mt-5 py-2"
                onClick={checkOut}
              >
                Proceed To Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
