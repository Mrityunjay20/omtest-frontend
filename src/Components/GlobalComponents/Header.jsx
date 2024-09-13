import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import { headerLinks, socialMediaLinks } from "../../constants";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/"); // Assuming "/" is your homepage route
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      console.log("this is contact section", contactSection);

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay for navigation
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-4 overflow-hidden md:px-16 text-center md:text-left justify-between bg-green-900 text-white space-y-4 md:space-y-0">
        <div className="w-full flex flex-col sm:flex-row space-x-0 sm:space-x-4 md:space-x-3 lg:space-x-4 items-center justify-center">
          {/* <div className="flex items-center space-x-2">
                        <i className="fa-regular fa-clock"></i>
                        <p className="text-sm md:text-base">Mon-Sat 8.00-18.00, Sun Closed</p>
                    </div> */}
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            {/* <i className="fa-solid fa-location-dot"></i> */}
            <p className="md:pl-20 text-sm text-cenetr font-bold md:text-base">
              FREE SHIPPING ON ALL ORDERS
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row space-x-0 md:space-x-16 items-center">
          <div className="flex text-lg space-x-4 justify-center md:justify-start">
            {socialMediaLinks.map((link, index) => (
              <a key={index} target="_blank" href={link.href}>
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
          बुंदेलखंडी स्वाद{" "}
        </h2>
      </div>

      {/* Menu */}
      <div className="flex z-100 relative bg-green-900 text-white text-lg items-center justify-between py-4 md:py-6 px-8 md:px-16">
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

        <img
          src={logo}
          alt="Company Logo"
          className="md:absolute top-4 ml-14 md:m-0 h-24 w-24 object-contain rounded-full"
        />

        {/* Full Menu Links - Hidden on small screens */}
        <div className="menu hidden md:flex flex-row items-center space-x-6 lg:space-x-8 pl-32 lg:pl-36 font-bold">
          {headerLinks.map((heading, index) => (
            <a
              key={index}
              href={heading.name === "Contact" ? "" : heading.href}
              onClick={heading.name === "Contact" ? handleContactClick : null}
            >
              <p className="py-2">{heading.name}</p>
            </a>
          ))}
        </div>

        {/* User and Cart */}
        <div className="flex items-center">
          <div className="flex items-center space-x-4 p-4 lg:border-r-2 border-gray-500">
            <i className="fa-solid fa-cart-shopping"></i>
            <i
              onClick={() => navigate("/userdashboard")}
              className="fa-solid fa-user"
            ></i>
          </div>
          <div className="hidden min-w-44 lg:flex items-center space-x-2 px-2">
            <i className="fa-solid fa-phone rounded-full text-white p-2 bg-yellow-800"></i>
            <div className="text-xs">
              <p>Get in touch:</p>
              <p className="md:text-sm text-lg font-bold">+91 89289 13992</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Menu for Mobile */}
      <Collapse open={menuOpen}>
        <div className="bg-green-900 text-white pb-3">
          <ul className="flex flex-col">
            {headerLinks.map((heading, index) => (
              <li key={index}>
                <a
                  href={heading.name === "Contact" ? "" : heading.href}
                  className="block font-bold py-2 px-4"
                  onClick={
                    heading.name === "Contact" ? handleContactClick : null
                  }
                >
                  {heading.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </>
  );
}
