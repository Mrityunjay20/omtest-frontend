import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/singleproduct/${product.id}`)}
      className="bg-green-900 rounded-sm flex flex-col h-full"
    >
      <img
        src={product.imageUrl[0]}
        className="sm:h-72 w-full object-cover rounded-t-sm"
        alt={product.name}
      />
      <div className="flex flex-col justify-between p-2 bg-green-900 space-y-2 md:px-4 md:py-4 rounded-b-sm flex-grow">
        <div>
          <h2 className="text-white text-md sm:text-lg lg:text-xl font-bold">
            {product.name}
          </h2>
        </div>
        <div className="mt-auto">
          <p className="text-yellow-700 text-md sm:text-lg lg:text-xl">
            Rs. {product.sizes[0].discountPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
