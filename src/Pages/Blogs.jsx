import React from 'react';
import { blogs } from '../constants';
import { Button } from '@material-tailwind/react';

const BlogCard = ({ image, title, date, excerpt }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-64" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-600">{title}</div>
                <p className="text-gray-600 text-sm mb-4">{date}</p>
                <p className="text-gray-700 text-base">
                    {excerpt}
                </p>
                <Button className="bg-green-700 rounded-sm mt-4 inline-block">Read More</Button>
            </div>
        </div>
    );
};

const BlogsPage = () => {
    

    return (
        <div className="bg-gray-100 py-8">
            {/* Hero Section */}
            <div className="text-green-900 text-center py-4 md:py-6 lg:py-8">
                <h1 className="text-4xl font-bold">Blogs</h1>
                <p className="text-lg mt-4 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic sint ipsum ut corporis veritatis </p>
            </div>

            {/* Blogs Section */}
            <div className="container mx-auto px-4 md:mt-8">
                <div className="flex flex-wrap justify-center gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            image={blog.image}
                            title={blog.title}
                            date={blog.date}
                            excerpt={blog.excerpt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
