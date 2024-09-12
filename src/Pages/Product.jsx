import { useEffect, useState } from "react";
import ProductCard from "../Components/UserComponents/ProductCard";
import axiosInstance from "../utils/axios";
import { Spinner } from "@material-tailwind/react";

export default function Product() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Optional: Handle error state
  const [loading, setLoading] = useState(true); // Optional: Handle loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/shop"); // Request to /shop endpoint
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.error(err);
        setError(err.message); // Set error message if request fails
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center ">
        <Spinner className="h-12 w-12" />
      </div>
    ); // Show loading state
  if (error)
    return (
      <div className="text-center p-4 text-red-500 w-screen h-screen flex items-center justify-center">
        Error: {error}
      </div>
    ); // Show error state

  return (
    <>
      <h2 className="text-white bg-yellow-700 text-xl md:text-3xl font-semibold text-center p-2">
        ALL PRODUCTS
      </h2>
      <div className="grid py-12 bg-gray-200 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-4 gap-x-3 gap-y-2 md:gap-1 lg:gap-3">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
