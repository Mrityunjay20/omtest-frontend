import React, { useState } from 'react';
import { reviews } from '../../constants';

const Reviews = () => {
    const [newReview, setNewReview] = useState({
        name: '',
        email: '',
        review: '',
        rating: 0,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    });

    const [allReviews, setAllReviews] = useState(reviews);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setNewReview({ ...newReview, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllReviews([...allReviews, { ...newReview, id: allReviews.length + 1 }]);
        setNewReview({
            name: '',
            email: '',
            review: '',
            rating: 0,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG1hbiUyMHVzZXJ8ZW58MHx8MHx8fDA%3D', 
        });
    };

    return (
        <div className="w-5/6 mx-auto py-6">
            <h2 className="text-2xl font-bold px-6">{allReviews.length} Reviews</h2>
            {allReviews.map((review) => (
                <div key={review.id} className="md:flex py-6 md:p-6 md:space-x-12 border-b border-gray-400 items-center">
                    
                    <div className="space-y-2 py-2">
                        
                        <div className="flex md:items-center justify-between">
                            <div className="md:flex md:space-x-2 lg:space-x-4 items-center">
                                <i className="fa-solid fa-circle-user text-4xl text-gray-800"></i>
                                <p className="text-xl text-green-900 font-bold">{review.name}</p>
                                <p className="text-green-500 font-bold">{review.date}</p>
                                <p className="text-green-500 font-bold">{review.time}</p>
                            </div>
                            <div className="pt-2 md:pt-0 text-green-700 text-xs space-x-2">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-justify">{review.review}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Add a Review</h3>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="flex items-center space-x-4">
                        <label className="font-bold">Rate this product?</label>
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`fa-solid fa-star cursor-pointer ${newReview.rating > i ? 'text-green-500' : 'text-gray-400'}`}
                                onClick={() => handleRatingChange(i + 1)}
                            ></i>
                        ))}
                    </div>
                    <textarea
                        name="review"
                        placeholder="Write a message"
                        value={newReview.review}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    ></textarea>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={newReview.name}
                            onChange={handleInputChange}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={newReview.email}
                            onChange={handleInputChange}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="font-bold bg-yellow-700 text-white px-4 py-2 rounded-sm">
                        SUBMIT REVIEW
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;
