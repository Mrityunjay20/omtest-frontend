import React, { useState } from "react";

export default function Address() {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState({
    lane1: "Address Lane 1",
    lane2: "Address Lane 2",
    city: "City",
    state: "State",
    pincode: "Pincode",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 space-y-4">
      {isEditing ? (
        <>
          <input
            type="text"
            name="lane1"
            value={address.lane1}
            onChange={handleChange}
            className="w-full p-4 border-2 border-black rounded-lg"
          />
          <input
            type="text"
            name="lane2"
            value={address.lane2}
            onChange={handleChange}
            className="w-full p-4 border-2 border-black rounded-lg"
          />
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className="w-full p-4 border-2 border-black rounded-lg"
          />
          <div className="w-full flex space-x-4">
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-1/2 p-4 border-2 border-black rounded-lg"
            />
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              className="w-1/2 p-4 border-2 border-black rounded-lg"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-full p-4 border-2 border-black rounded-lg">
            {address.lane1}
          </div>
          <div className="w-full p-4 border-2 border-black rounded-lg">
            {address.lane2}
          </div>
          <div className="w-full p-4 border-2 border-black rounded-lg">
            {address.city}
          </div>
          <div className="w-full flex space-x-4">
            <div className="w-1/2 p-4 border-2 border-black rounded-lg">
              {address.state}
            </div>
            <div className="w-1/2 p-4 border-2 border-black rounded-lg">
              {address.pincode}
            </div>
          </div>
        </>
      )}
      <div className="w-full flex justify-end space-x-4">
        <button
          className="px-8 py-2 bg-black text-white rounded-lg"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}
