import React, { useState, useEffect } from 'react';
import Products from './NewProductsCard';

const ProductSlider = ({ newProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(1);
  const slideInterval = 3000; // 3 seconds

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleProducts = () => {
    let visibleProducts = [];
    for (let i = 0; i < productsToShow; i++) {
      const index = (currentIndex + i) % newProducts.length;
      visibleProducts.push(newProducts[index]);
    }
    return visibleProducts;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setProductsToShow(3); // 3 products for md and larger screens
      } else if (window.innerWidth >= 640) {
        setProductsToShow(2); // 2 products for sm screens
      } else {
        setProductsToShow(1); // 1 product for xs screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newProducts.length);
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [currentIndex, newProducts.length]);

  return (
    <div className="relative w-full overflow-hidden p-2 lg:p-12">
      <div className={`sm:grid max-w-96 sm:max-w-full mx-auto sm:grid-cols-${productsToShow} md:grid-cols-${productsToShow} sm:gap-4 justify-center space-y-4 sm:space-y-0 transition-transform duration-700 ease-in-out`}>
        {getVisibleProducts().map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {newProducts.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-yellow-700' : 'bg-green-900'
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
