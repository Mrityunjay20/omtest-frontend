import React, { useState, useEffect } from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-yellow-200 h-full w-80">
      <img src={blog.image} className="h-56 w-80 object-cover" alt={blog.name} />
      <div className="p-5 bg-green-900 text-center space-y-4">
        <h2 className="text-white text-lg lg:text-xl font-bold">{blog.heading}</h2>
        <p className="text-white text-md">{blog.description}</p>
        <button className='text-white bg-invisible'>
            <span className='bg-yellow-700 m-2 py-2 px-3 rounded-full'>
                <i className="fa-solid fa-angle-right"></i>
            </span>Learn More
        </button>
      </div>
    </div>
  );
};

const HeroBlogs = ({ blogs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogsToShow, setBlogsToShow] = useState(1);
  const slideInterval = 3000; // 3 seconds

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleBlogs = () => {
    let visibleBlogs = [];
    for (let i = 0; i < blogsToShow; i++) {
      const index = (currentIndex + i) % blogs.length;
      visibleBlogs.push(blogs[index]);
    }
    return visibleBlogs;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setBlogsToShow(3); // 3 blogs for md and larger screens
      } else if (window.innerWidth >= 640) {
        setBlogsToShow(2); // 2 blogs for sm screens
      } else {
        setBlogsToShow(1); // 1 blog for xs screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      }, slideInterval);

      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [currentIndex, blogs.length]);

  if (blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="relative w-full overflow-hidden p-4 md:p-8 lg:p-12">
      <div className={`flex w-full justify-center space-x-6 lg:space-x-3 sm:grid-cols-${blogsToShow} md:grid-cols-${blogsToShow} transition-transform duration-700 ease-in-out`}>
        {getVisibleBlogs().map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {blogs.map((_, index) => (
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

export default HeroBlogs;
