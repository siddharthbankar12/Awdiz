import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [cartButtonDisable, setCartButtonDisable] = useState(false);
  const userData = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  async function getSingleProductData() {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/single-product-data",
        { productId: id }
      );
      if (response.data.success) {
        setSingleProduct(response.data.productData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const AddToCart = async () => {
    try {
      setCartButtonDisable(true);

      if (!userData?.userId) {
        return toast.error("Please login to add product to cart");
      }

      const response = await axios.post(
        "http://localhost:8000/api/v1/user/add-to-cart",
        { productId: id, userId: userData.userId }
      );
      if (response.data.success) {
        return toast.success(response.data.message);
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCartButtonDisable(false);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <h1 className="text-center mt-[70px]">Loading...</h1>
      ) : (
        <div className="mx-auto my-16 w-[50%]">
          <h1 className="my-5">Product Detail</h1>

          {singleProduct ? (
            <div className="flex border rounded-2xl items-center p-[20px]">
              <div className="w-[50%]  p-3">
                <img
                  src={singleProduct.image}
                  alt={singleProduct.title}
                  className="w-[100%] rounded-lg overflow-hidden"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start pl-6">
                <h2>
                  <b>Product Name:</b> {singleProduct.name}
                </h2>
                <h2>
                  <b>Category:</b> {singleProduct.category}
                </h2>
                <p>
                  <b>Price:</b> ₹{singleProduct.price}
                </p>
                <p>
                  <b>Seller Name:</b> {singleProduct?.userId?.name}
                </p>
                <button
                  className="bg-white text-black my-[10px] w-fit px-[8px] py-[4px] rounded font-bold"
                  onClick={AddToCart}
                  disabled={cartButtonDisable}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ) : (
            <p>Please wait...</p>
          )}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
