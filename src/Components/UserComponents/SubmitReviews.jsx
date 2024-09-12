import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SubmitReviews = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Key", "key", form.current, {
        publicKey: "key",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Review sent");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Your response was not sent");
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  return (
    <div className="w-5/6 mx-auto py-6">
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Add a Review</h3>
        <form ref={form} className="space-y-4 mt-4">
          <textarea
            name="user_message"
            placeholder="Write a message"
            value={formData.user_message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          <div className="flex space-x-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              value={formData.user_email}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="font-bold bg-yellow-700 text-white px-4 py-2 rounded-sm"
          >
            SUBMIT REVIEW
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitReviews;
