import React, { useEffect } from "react";

const DiscoverPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="md:flex  bg-orange-300 text-white">
        <div className="container md:w-1/2 w-full mx-auto px-4">
          <h1 className="text-5xl p-12 font-bold">
            About <br /> 365 Canvas
          </h1>
        </div>
        <div className="md:w-1/2 w-full h-96">
          <img
            className="w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" // Replace with the path to your image
            alt="Canvas Worker"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:flex container mx-auto px-4 mt-16">
        <div className="md:w-1/3 w-full text-justify ">
          <h2 className="text-3xl font-bold text-green-900">Lorem Ipsum</h2>
          <p className="mt-4 text-green-600">
            <span className="font-bold">
              We Print Your Photos Online & Turn Memories Into Forever
            </span>
            <br />A picture speaks a thousand words. However, do not just let
            them be on your phone or camera. Print it out!
          </p>
          <p className="mt-4 text-gray-600">
            At 365 Canvas, we help you turn your favorite photos into beautiful,
            unique photo canvas prints, mugs, desktop plaques, blankets, pillows
            & more.
          </p>
          <p className="mt-4 text-gray-600">
            Our headquarters are based in Delaware, USA. Also, we have other
            factories in Canada, the UK, Australia, Mexico, and Spain. Wherever
            it is, we ensure you get the premium quality products that stand the
            test of time.
          </p>
        </div>
        {/* Images Section */}
        <div className="md:w-3/4 w-full md:justify-end flex flex-wrap items-center justify-center gap-2 mt-8">
          <div className="flex w-1/2 gap-2">
            <img
              className="w-1/2 "
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="Canvas 1"
            />{" "}
            {/* Replace with image paths */}
            <img
              className="w-1/2"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="Canvas 2"
            />{" "}
            {/* Replace with image paths */}
          </div>
          <img
            className="w-1/2 pl-1"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Canvas 3"
          />{" "}
          {/* Replace with image paths */}
        </div>
      </div>
      {/* Quote Section */}
      <div className="bg-white m-6 md:m-12 shadow-md border border-gray-200 rounded-md flex items-center">
        <div className="text-orange-500 ml-2 text-3xl mr-4">❝</div>
        <p className="text-gray-700 p-6 md:p-12 ">
          365Canvas began with a simple thought – How to give you the best
          experience when customizing your gorgeous photo gifts!
        </p>
      </div>
    </div>
  );
};

export default DiscoverPage;
