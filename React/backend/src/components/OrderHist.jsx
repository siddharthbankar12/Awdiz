import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderHist = () => {
  const userData = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(orders);

  const getOrderHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/get-order-history",
        { userId: userData.userId }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData?.userId) {
      getOrderHistory();
    }
  }, [userData]);

  return (
    <>
      {loading ? (
        <h1 className="text-center mt-[70px] text-lg font-semibold">
          Loading...
        </h1>
      ) : (
        <div className="w-[90%]  m-auto mt-[60px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Order History</h2>
          {orders.length > 0 ? (
            <div className="space-y-6 flex flex-col items-center">
              {orders.map((order, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl px-16 py-10 shadow-sm bg-black text-white w-[50%] "
                >
                  <h2 className="text-xl font-semibold mb-2">
                    Order ID: {order._id}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">
                    Total Price: ₹{order.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    Order Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex flex-col gap-3">
                    {order.products.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.productId?.image}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.productId?.name}</p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              You haven't placed any orders yet.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default OrderHist;
