import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { headerLinks, socialMediaLinks } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row p-4 overflow-hidden md:px-16 text-center md:text-left justify-between bg-green-900 text-white space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 md:space-x-3 lg:space-x-4 items-center justify-center">
          {/* <div className="flex items-center space-x-2">
                        <i className="fa-regular fa-clock"></i>
                        <p className="text-sm md:text-base">Mon-Sat 8.00-18.00, Sun Closed</p>
                    </div> */}
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <i className="fa-solid fa-location-dot"></i>
            <p className="text-sm md:text-base">27/52 Avenue, NY USA 685.</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row space-x-0 md:space-x-16 items-center">
          <div className="flex text-lg space-x-4 justify-center md:justify-start">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <div className="flex items-center justify-center">
                  <i className={link.iconClass}></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-2 text-xl text-green-900 font-bold text-center">
        <h2>
          {" "}
          Ghar{" "}
          <span className="text-yellow-800 line-through decoration-green-900">
            Jaisa
          </span>{" "}
          Ka Aachar! <br className="sm:hidden" />
          बदलेंगे स्वाद{" "}
        </h2>
      </div>

      {/* Menu */}
      <div className="flex relative bg-green-900 text-white text-lg items-center justify-between py-4 md:py-6 px-8 md:px-16">
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>

          {menuOpen && ( // Render menu only if it's open
            <div className="absolute bg-gray-800 text-white mt-2 rounded shadow-lg">
              <ul className="flex flex-col">
                {headerLinks.map((heading, index) => (
                  <li key={index}>
                    <a
                      href={heading.href}
                      className="block py-2 px-4 hover:bg-gray-700"
                    >
                      {heading.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="rounded-full md:absolute top-4 p-14 ml-14 md:m-0 bg-white"></div>

        {/* Full Menu Links - Hidden on small screens */}
        <div className="menu hidden md:flex flex-row items-center space-x-6 lg:space-x-8 pl-32 lg:pl-36 font-bold">
          {headerLinks.map((heading, index) => (
            <a key={index} href={heading.href}>
              <p className="py-2">{heading.name}</p>
            </a>
          ))}
        </div>

        {/* Search and Cart */}
        <div className="flex items-center">
          <div className="flex items-center space-x-4 p-4 lg:border-r-2 border-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i
              onClick={() => navigate("/userdashboard")}
              className="fa-solid fa-user"
            ></i>
          </div>
          <div className="hidden min-w-44 lg:flex items-center space-x-2 px-2">
            <i className="fa-solid fa-phone rounded-full text-white p-2 bg-yellow-800"></i>
            <div className="text-xs">
              <p>Requesting a Call:</p>
              <p className="md:text-sm text-lg font-bold">+91 1234 56 7890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
