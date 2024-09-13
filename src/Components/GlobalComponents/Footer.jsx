import {
  socialMediaLinks,
  footerInformation,
  footerLinks,
} from "../../constants";
import { useState } from "react";
import logo from "../../assets/logo.png";
import visa from "../../assets/footerPayIcons/visa.png";
import applepay from "../../assets/footerPayIcons/applepay.png";
import discover from "../../assets/footerPayIcons/discover.png";
import mastercard from "../../assets/footerPayIcons/mastercard.png";

export default function Footer() {
  const [isOpen, setIsOpen] = useState({
    contactInfo: false,
    information: false,
    links: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {/* Large screens (above 'lg') */}
      <div className="hidden md:flex overflow-hidden bg-green-900 justify-around text-white py-6">
        <div className="space-y-4">
          <h2 className=" text-3xl font-semibold">Contact Info</h2>
          <p className="w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia
          </p>
          <p>Address</p>
          <p>contact@organicmatki.in</p>
          <p>+91 89289 13992 </p>
          <div className="flex space-x-6 text-2xl">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <div className="bg-gray-700 size-10 rounded-full flex items-center justify-center">
                  <i className={link.iconClass}></i>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="w-56">
          <h2 className="text-3xl font-semibold pb-2">Information</h2>
          {footerInformation.map((heading, index) => (
            <a key={index} href={heading.href}>
              <p className="my-4">{heading.name}</p>
            </a>
          ))}
        </div>
        <div className="w-56">
          <h2 className="text-3xl font-semibold pb-2">Links</h2>
          {footerLinks.map((heading, index) => (
            <a key={index} href={heading.href}>
              <p className="my-4">{heading.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Small and medium screens (below 'lg') */}
      <div className="md:hidden p-6 flex flex-col bg-green-900 text-white py-6">
        <div className="space-y-4">
          <button
            onClick={() => toggleSection("contactInfo")}
            className="w-full text-left flex justify-between items-center py-2"
          >
            <h2 className="text-2xl font-semibold">Contact Info</h2>
            <span className="text-xl">{isOpen.contactInfo ? "-" : "+"}</span>
          </button>
          {isOpen.contactInfo && (
            <div className="pl-4 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia
              </p>
              <p>Bundelkhand </p>
              <p>contact@organicmatki.in </p>
              <p>Phone</p>
              <div className="flex space-x-6 text-2xl">
                {socialMediaLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    <div className="flex items-center justify-center p-2">
                      <i className={link.iconClass}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <button
            onClick={() => toggleSection("information")}
            className="w-full text-left flex justify-between items-center py-2"
          >
            <h2 className="text-2xl font-semibold">Information</h2>
            <span className="text-xl">{isOpen.information ? "-" : "+"}</span>
          </button>
          {isOpen.information && (
            <div className="pl-4">
              {footerInformation.map((heading, index) => (
                <a key={index} href={heading.href}>
                  <p className="my-2">{heading.name}</p>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <button
            onClick={() => toggleSection("links")}
            className="w-full text-left flex justify-between items-center py-2"
          >
            <h2 className="text-2xl font-semibold">Links</h2>
            <span className="text-xl">{isOpen.links ? "-" : "+"}</span>
          </button>
          {isOpen.links && (
            <div className="pl-4">
              {footerLinks.map((heading, index) => (
                <a key={index} href={heading.href}>
                  <p className="my-2">{heading.name}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col sm:flex-row space-y-4 relative p-2 space-x-4 lg:p-8 items-center justify-around">
        <p>
          @2024 Organic Matki. <br className="hidden sm:flex" />
          Made by{" "}
          <a
            href="https://adultssolutions.com/"
            className="font-bold text-green-900"
          >
            {" "}
            The Ad-ults
          </a>
        </p>
        <div className="hidden lg:flex absolute bottom-2 bg-white rounded-full shadow-lg shadow-gray-500">
          <img
            src={logo}
            className="size-28 md:size-28 rounded-full object-fill"
          />
        </div>
        <div>
          <p>Allow payment base on</p>
          <div className="footer-bottom bg-customBlue w-full text-white flex justify-between items-center py-2">
            <div className="space-x-2 flex items-center  sm:space-x-4 md:space-x-6 text-2xl">
              <p className="w-8">
                <img src={visa} alt="visa" className=" w-8"></img>
              </p>
              <p className="w-8">
                <img src={mastercard} alt="mastercard" className="w-8"></img>
              </p>
              <p className="w-8">
                <img src={discover} alt="discover" className="w-8"></img>
              </p>
              <p className="w-8">
                <img
                  src={applepay}
                  alt="applepay"
                  className="bg-white object-cover h-5 w-8"
                ></img>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
