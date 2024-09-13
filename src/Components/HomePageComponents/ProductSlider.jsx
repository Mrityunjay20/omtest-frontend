import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./NewProductsCard";
import axiosInstance from "../../utils/axios";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(1);
  const [loading, setLoading] = useState(true);
  const slideInterval = 3000; // 3 seconds

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/shop");
      setProducts(response.data); // Adjust based on your API response structure
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleProducts = () => {
    let visibleProducts = [];
    for (let i = 0; i < productsToShow; i++) {
      const index = (currentIndex + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setProductsToShow(4); // 4 products for large screens
      } else if (window.innerWidth >= 640) {
        setProductsToShow(2); // 2 products for medium screens
      } else {
        setProductsToShow(1); // 1 product for small screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [currentIndex, products.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full overflow-hidden p-2 lg:p-12">
      <div
        className={`sm:grid max-w-96 sm:max-w-full mx-auto sm:grid-cols-${productsToShow} md:grid-cols-${productsToShow} sm:gap-4 justify-center space-y-4 sm:space-y-0 transition-transform duration-700 ease-in-out`}
      >
        {getVisibleProducts().map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {products.length > 0 &&
          products.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-yellow-700" : "bg-green-900"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ProductSlider;
