import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  function redirectToProductPage(id) {
    if (id === undefined || id === null || typeof id !== "number") {
      alert("Incorrect ID found");
    } else {
      navigate(`/singleproduct/${id}`);
    }
  }

  return (
    <>
      <div
        className="group bg-white space-y-1 h-full hover:shadow-lg transition ease-in-out p-1 xl:p-2 text-center rounded-xl flex flex-col  relative overflow-hidden"
        onClick={() => redirectToProductPage(product.id)}
      >
        <div className="w-full p-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            className="h-40 sm:h-56 md:h-56 xl:h-80 w-full rounded-xl object-cover transition-opacity duration-300"
            src={product.imageUrl[0]}
            alt={product.name}
          />
          <button className="absolute text-white text-xs lg:text-lg rounded-full bottom-0 right-0 m-3 px-2 lg:px-3 py-1 bg-green-900">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>

        <div className="p-2 flex h-full flex-col justify-between">
          <h2 className="text-sm md:text-md lg:text-xl font-medium">
            {product.name}
          </h2>
          <div>
            <p className="text-xs md:text-md lg:text-lg ">
              {/* {product.discountprice} */}
              10000
            </p>
            <div className="text-yellow-700 text-xs space-x-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
