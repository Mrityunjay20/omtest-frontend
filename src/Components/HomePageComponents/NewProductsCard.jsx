import React from 'react';

const Products = ({ product }) => {
  return (
    <div className="bg-yellow-200  rounded-sm">
      <img src={product.href} className=" sm:h-72 w-full object-cover rounded-t-sm " alt={product.name} />
      <div className="p-2 bg-green-900 space-y-2 md:px-4 md:py-4 rounded-b-sm">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">{product.name}</h2>
        <p className="text-yellow-700 text-md sm:text-lg lg:text-xl">{product.price}</p>
        <span className="text-yellow-700 text-lg" style={{ whiteSpace: "nowrap" }}>
          {"★ ".repeat(product.star)}
        </span>
      </div>
    </div>
  );
};

export default Products;
