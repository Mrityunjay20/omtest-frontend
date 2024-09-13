import {
  newProducts,
  socialMediaLinks,
  sections,
  faqs,
} from "../constants/index.jsx";
import { useEffect, useState } from "react";
import SubmitReviews from "../Components/UserComponents/SubmitReviews.jsx";
import ProductSlider from "../Components/HomePageComponents/ProductSlider.jsx";
import ShoppingCartDialog from "../Components/UserComponents/ShoppingCart.jsx";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useDispatch } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { addItem, clearCart } from "../services/cart/cartSlice.js";
import { Button, Carousel, IconButton } from "@material-tailwind/react";
import productpagebanner from "../assets/2400x1600/productpagebanner.gif";

export default function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = (
    productId,
    quantity,
    name,
    discountprice,
    imageUrl,
    size
  ) => {
    dispatch(
      addItem({ productId, quantity, name, discountprice, imageUrl, size })
    );
    handleOpen("xl");
  };

  const handleOpen = (value) => {
    if (selectedSize) {
      setSize(value);
    } else {
      alert("Select a size first");
    }
  };
  useEffect(() => {
    const element = document.getElementById(`product`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // This ensures the element is aligned at the start of the viewport
      });
    }
  }, [id]);

  useEffect(() => {
    if (!id || isNaN(id)) {
      navigate("/product");
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/shop/${id}`); // Fetch data for specific product
        setSingleProduct(response.data);
        setSelectedSize(response.data.sizes[0]);
        setSelectedImage(response.data.imageUrl[0]);
        setLoading(false); // Data fetched successfully
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError("Failed to load product data."); // Handle errors
        setLoading(false); // End loading state
      }
    };

    fetchData();
  }, [id, navigate]);

  const [isOpen, setIsOpen] = useState(false);

  const [openSection, setOpenSection] = useState("description");
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner className="h-12 w-12" />
      </div>
    );
  if (error) return <div>{Error}</div>;

  return (
    <div className="bg-white">
      <Carousel
        autoplay="false"
        loop="true"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="hidden absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton className="hidden "></IconButton>
        )}
        nextArrow={({ handlePrev }) => (
          <IconButton className="hidden "></IconButton>
        )}
      >
        <img
          src={[productpagebanner]}
          alt="image 1"
          className="w-full object-fit"
        />
      </Carousel>

      <div
        id="product"
        className="md:flex p-2 sm:p-6 lg:p-12 lg:px-24 items-start justify-center bg-white rounded-lg mx-auto"
      >
        <div className="md:w-1/2 flex flex-col items-center justify-start">
          <img
            src={selectedImage}
            alt={singleProduct.name}
            className="w-full max-w-96 md:max-w-full px-8 h-[300px] md:h-[550px] object-cover rounded-sm"
          />
          <div className=" -m-8 md:-m-10 flex w-full justify-center space-x-2">
            {singleProduct.imageUrl.map((product, key) => (
              <img
                key={key} // Add the key prop for each product
                src={product} // Image source from product
                alt={`Thumbnail ${key + 1}`} // Dynamic alt text for each image
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full cursor-pointer border-2"
                onClick={() => handleImageClick(singleProduct.imageUrl[key])} // Click event handler
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 py-12 p-3 md:py-0 space-y-2 flex flex-col items-center md:items-start ">
          <h2 className="text-3xl font-semibold text-center md:text-left text-green-900">
            {singleProduct?.name}
          </h2>

          <p className="text-xl font-bold text-green-600 mt-2">
            ₹{selectedSize.discountPrice}
          </p>

          <div className="flex space-x-4 items-center">
            <div className="text-yellow-700 text-xs space-x-2">
              {[...Array(singleProduct.rating)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <h2 className="text-gray-500">
              {singleProduct.rating || "No rating available "}{" "}
            </h2>
          </div>

          <h2 className="text-gray-700 max-w-[500px] text-justify">
            {singleProduct.description || "No description available."}
          </h2>

          <h2 className="text-green-500 font-bold">
            Cash on Delivery is Available!
          </h2>

          {/* selectSizeComponent */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <h2 className="text-yellow-700 font-bold">Size</h2>
            <div className="flex space-x-4 flex-wrap">
              {singleProduct.sizes.map((size, index) => (
                <Button
                  key={index}
                  className={`p-1 rounded-sm ${
                    selectedSize === size
                      ? "border-2 border-blue-500 text-blue-500"
                      : "border-2 border-gray-300 text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.size}
                </Button>
              ))}
            </div>
          </div>
          {/* selectSizeComponent */}

          {/* Qunatity manage buttons */}
          <div className="w-full py-4 space-x-2 md:space-x-4 flex items-center justify-center md:justify-start">
            <h2 className="text-yellow-700 font-bold">Quantity</h2>
            <button
              onClick={decrementQuantity}
              className="bg-gray-200 w-8 h-8 rounded-full"
            >
              -
            </button>
            <div className="text-center">{quantity}</div>
            <button
              onClick={incrementQuantity}
              className="bg-gray-200 w-8 h-8 rounded-full"
            >
              +
            </button>
            {/* Qunatity manage buttons */}
            <div>
              <Button
                onClick={() =>
                  handleAddToCart(
                    singleProduct.id,
                    quantity,
                    singleProduct.name,
                    selectedSize.discountPrice,
                    singleProduct.imageUrl[0],
                    selectedSize.size
                  )
                }
                className="w-full p-2 text-sm font-bold bg-white text-black border border-gray-900 rounded-sm hover:bg-black hover:text-white"
              >
                ADD TO CART
              </Button>
            </div>
          </div>

          <Button
            onClick={() => navigate("/checkout")}
            className="w-full max-w-[500px] bg-green-900 text-md rounded-sm hover:bg-green-800"
          >
            Buy it Now
          </Button>

          <div className="flex py-2 space-x-2 items-center">
            <h2 className="text-gray-500 font-bold">Share</h2>
            <div className="flex space-x-3">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <div className="flex bg-gray-200 rounded-full items-center justify-center p-2">
                    <i className={link.iconClass}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="border-t border-gray-400">
            <button
              className="w-full text-left text-gray-600 font-semibold px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection(section.id)}
            >
              <span>{section.title}</span>
              {openSection === section.id ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </button>
            {openSection === section.id && (
              <div className="px-4 pb-3 text-gray-500">
                {singleProduct[section.id]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sending Review section is here */}
      <SubmitReviews />

      <div className="w-5/6 mx-auto py-8">
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-gray-300">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full text-left py-2 px-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-yellow-800 font-semibold">
                    {faq.question}
                  </span>
                  <span className="text-yellow-800 text-2xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700">{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <ShoppingCartDialog size={size} handleOpen={handleOpen} />
      </div>

      <div className="w-4/5 mx-auto pt-8 text-center">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <ProductSlider newProducts={newProducts} />
      </div>
    </div>
  );
}
