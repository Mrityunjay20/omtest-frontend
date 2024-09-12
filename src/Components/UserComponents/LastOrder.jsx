// src/components/LastOrder.jsx
import React from "react";

export default function LastOrder({ orders }) {
  const limitedItems = orders
    .flatMap((order) => order.items || [])
    .slice(0, 10);
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-2">Last Orders</h2>
      <div className="text-gray-700">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div>
            <p>Items</p>
            <ol className="list-decimal ml-4">
              {limitedItems.length === 0 ? (
                <li>No items available.</li>
              ) : (
                limitedItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.name} <br />{" "}
                    <span className="font-semibold">Rs. {item.price}</span> (x
                    {item.quantity})
                  </li>
                ))
              )}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
