import {
  categories,
  workProcess,
  newProducts,
  latestBlogs,
} from "../constants";
import { Carousel, IconButton } from "@material-tailwind/react";
import ProductSlider from "../Components/HomePageComponents/ProductSlider";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import ImpactCreated from "../Components/HomePageComponents/ImpactCreated";
import HeroGallery from "../Components/HomePageComponents/Herogallery";
import Testimonials from "../Components/HomePageComponents/Testimonial";
import ContactForm from "../Components/HomePageComponents/ContactForm";
import HeroBlogs from "../Components/HomePageComponents/HeroBlogs";
import homepagemain from "../assets/2400x1600/homepagemain.gif";
import homepage1 from "../assets/2400x1600/homepage1.png";
import homepage2 from "../assets/2400x1600/homepage2.png";
import homepage3 from "../assets/2400x1600/homepage3.png";
import homepage4 from "../assets/2400x1600/homepage4.png";
import lessoil from "../assets/lessoil.png";
import organic from "../assets/organic.png";
import properlycooked from "../assets/properlycooked.png";
import AboutBundelkhand from "../assets/AboutBundelkhand.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        className="-z-10"
        autoplay="true"
        autoplayDelay="5000"
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
        <img src={homepagemain} alt="image 1" className="w-full object-fit" />
        <img src={homepage1} alt="image 2" className="w-full object-fit" />
        <img src={homepage2} alt="image 2" className="w-full object-fit" />
        <img src={homepage3} alt="image 2" className="w-full object-fit" />
        <img src={homepage4} alt="image 2" className="w-full object-fit" />
      </Carousel>
      <div className="flex flex-col lg:relative items-center lg:h-screen justify-center bg-white p-8">
        {/* DIVIDING DIV BETWEEN IMAGES */}
        <div className="lg:absolute lg:-top-20 gap-4 lg:gap-0 grid lg:grid-cols-3 py-8 lg:w-4/5 bg-white rounded-md shadow-xl">
          <div className="flex lg:justify-center items-center space-x-4 px-8 lg:border-r-4">
            <img src={lessoil} className="size-16 md:size-24 lg:size-20"></img>
            <div>
              <h2 className="text-green-900 font-bold text-2xl">Less oil</h2>
              <p className="text-left">
                Our pickles are made with less oil and more love
              </p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center space-x-4 px-8 lg:border-r-4">
            <img src={organic} className="size-16 md:size-24 lg:size-20 "></img>
            <div>
              <h2 className="text-green-900 font-bold text-2xl">
                Organic Ingredients
              </h2>
              <p className="text-left">
                {" "}
                Has 0 preservatives and has 100% बुंदेलखंडी Swaad
              </p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center space-x-4 px-8">
            <img
              src={properlycooked}
              className="size-16 md:size-24 lg:size-20 "
            ></img>
            <div>
              <h2 className="text-green-900 font-bold text-2xl">
                Cooked properly
              </h2>
              <p className="text-left">
                Bundelkhand's raw culture infused with tender ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="lg:absolute w-full pt-12 flex flex-col lg:top-40 items-center justify-center">
          <h2 className="text-lg lg:text-3xl text-green-900">
            Recently Category
          </h2>
          <h1 className="text-3xl lg:text-5xl text-center py-2 font-bold">
            Browse by Category
          </h1>
          <div className="lg:flex w-3/4 lg:w-full py-6 lg:p-6 space-y-6 lg:space-y-0 lg:space-x-12 justify-center items-center">
            {categories.map((category, index) => (
              <div className="text-center  lg:h-60 bg-green-900 p-4 lg:w-1/4 rounded-lg">
                <div className="object-fill">
                  <img
                    src={category.href}
                    alt={category.name}
                    class="mx-auto size-32"
                  />
                </div>
                <p className="pt-6 text-white text-xl font-bold">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT US  */}
      <div className="lg:flex lg:py-12 h-full">
        <div className="lg:relative bg-green-900 w-full lg:w-1/2 lg:h-80">
          <img
            className="lg:absolute w-full lg:left-24 top-12 shadow-xl rounded-sm h-[520px] object-cover object-center"
            src={AboutBundelkhand}
            alt="About Bundelkhand"
          />
        </div>
        <div className="lg:pl-48 py-4 px-4 w-full lg:w-3/4 lg:px-24">
          <h2 className="text-lg lg:text-3xl text-green-900">
            Explore Bundelkhand
          </h2>
          <h1 className="text-3xl lg:text-5xl py-2 font-bold w-full lg:w-2/3">
            Re-introducing the world to the lost culture of Bundelkhand
          </h1>
          <p className="py-6 text-lg text-justify">
            We are Organic Matki, a homegrown brand from Bundelkhand. Situated
            in central India, now included in northern Madhya Pradesh state,
            Bundelkhand has been a vital part of India for ages. The rich
            culture, the food and the people, etc represent India altogether in
            a different limelight. We aim to bring forward the strengths of
            Bundelkhand in India's sight and later on to the world.
          </p>
          <hr className="border-t-2 w-3/4 p-4 border-black" />

          <button
            onClick={() => navigate("/discover")}
            className="bg-green-900 font-semibold px-4 py-2 text-white rounded-sm"
          >
            About More
          </button>
        </div>
      </div>

      {/* WORK PROCESS  */}

      <div className="text-center overflow-hidden bg-gray-200 py-6 lg:py-12">
        <h2 className="text-lg lg:text-3xl text-green-900 ">Work Process</h2>
        <h1 className="text-3xl lg:text-5xl mx-auto py-2 font-bold lg:w-2/3">
          How our pickles are made:{" "}
        </h1>
        <div className=" sm:grid  lg:grid-cols-3 sm:gap-y-20 sm:gap-x-2 pt-12  w-3/4 mx-auto space-y-20 sm:space-y-0 lg:pt-32">
          {workProcess.map((work, index) => (
            <div className="relative bg-white rounded-xl border-4 border-gray-300 flex flex-col justify-center items-center text-center">
              <div className=" absolute -top-12 lg:-top-20 size-24 md:size-32 lg:size-36 xl:size-44 flex flex-col justify-center items-center bg-yellow-700 rounded-full">
                <img
                  src={work.href}
                  className="size-16 md:size-20 lg:size-24 xl:size-28 object-fill "
                />
              </div>
              <div className="pt-16 md:pt-24 lg:pt-28 pb-12">
                <h2 className="p-1 text-green-900 font-bold text-2xl">
                  {work.heading}
                </h2>
                <p className="px-4">{work.description}</p>
              </div>
              <div className=" absolute -bottom-6 bg-yellow-700 px-4 py-3 text-white rounded-full">
                {work.step}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT RANGE  */}
      <div className="pt-8 md:pt-12 lg:pt-20 text-center">
        <h2 className="text-lg lg:text-3xl text-green-900">Product Range</h2>
        <h1 className="text-3xl lg:text-5xl mx-auto py-2 font-bold w-2/3">
          New and Favourite
        </h1>
        <ProductSlider newProducts={newProducts} />
      </div>

      <HeroSection />

      <div className="overflow-hidden">
        <ImpactCreated />
      </div>

      {/* <HeroGallery /> */}
      <Testimonials />
      <div id="contact" className="overflow-hidden">
        <ContactForm />
      </div>

      <div className="pt-8 md:pt-12 lg:pt-20 text-center">
        {/* <h2 className="text-lg lg:text-3xl text-green-900">Product Range</h2>
        <h1 className="text-3xl lg:text-5xl mx-auto py-2 font-bold w-2/3">
          New and Favourite
        </h1> */}
        {/* <HeroBlogs blogs={latestBlogs} /> */}
      </div>
    </>
  );
}
