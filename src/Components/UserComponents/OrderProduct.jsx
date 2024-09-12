import React from "react";
import { useState } from "react";

const OrderProduct = ({ order }) => {
  const items = order.items;
  const [itemstatus, setItemstatus] = useState(false);
  if (items.length > 0) {
    setItemstatus(true);
  } else {
    setItemstatus(false);
  }
  return (
    <div>
      {itemstatus ? (
        <div className="flex justify-between p-4 sm:p-8 bg-lightGray shadow-md rounded-lg">
          <div className="flex space-x-4 sm:space-x-8 items-center">
            <div className="w-24 md:w-36">
              <img
                className=" rounded-lg mx-auto"
                src={order.items[0].imageUrl}
                alt={order.id}
              />
            </div>
            <div>
              <h2>Order ID: {order.id}</h2>
              <p>Rs. {order.totalAmount}</p>
              <p>Quantity: {items.length}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p
              className={`status shadow-sm text-gray-700 bg-white rounded-md p-2 ${order.paymentStatus}`}
            >
              {order.paymentStatus}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-between p-4 sm:p-8 bg-lightGray shadow-md rounded-lg">
          <h1>You have no previous orders</h1>
        </div>
      )}
    </div>
  );
};

export default OrderProduct;
