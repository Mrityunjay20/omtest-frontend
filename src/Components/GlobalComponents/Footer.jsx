import { socialMediaLinks, footerInformation, footerLinks } from "../../constants";
import { useState } from "react";

export default function Footer() {
    const [isOpen, setIsOpen] = useState({
        contactInfo: false,
        information: false,
        links: false
    });

    const toggleSection = (section) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <>
            {/* Large screens (above 'lg') */}
            <div className="hidden md:flex overflow-hidden bg-green-900 justify-around text-white py-6">
                <div className="space-y-4">
                    <h2 className=" text-3xl font-semibold">Contact Info</h2>
                    <p className="w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia</p>
                    <p>Address</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <div className="flex space-x-6 text-2xl">
                        {socialMediaLinks.map((link, index) => (
                            <a key={index} href={link.href} >
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
                        <a key={index} href={heading.href} >
                            <p className="my-4">{heading.name}</p>
                        </a>
                    ))}
                </div>
                <div className="w-56">
                    <h2 className="text-3xl font-semibold pb-2">Links</h2>
                    {footerLinks.map((heading, index) => (
                        <a key={index} href={heading.href} >
                            <p className="my-4">{heading.name}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Small and medium screens (below 'lg') */}
            <div className="md:hidden p-6 flex flex-col bg-green-900 text-white py-6">
                <div className="space-y-4">
                    <button onClick={() => toggleSection('contactInfo')} className="w-full text-left flex justify-between items-center py-2">
                        <h2 className="text-2xl font-semibold">Contact Info</h2>
                        <span className="text-xl">{isOpen.contactInfo ? '-' : '+'}</span>
                    </button>
                    {isOpen.contactInfo && (
                        <div className="pl-4 space-y-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia</p>
                            <p>Address</p>
                            <p>Email</p>
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
                    <button onClick={() => toggleSection('information')} className="w-full text-left flex justify-between items-center py-2">
                        <h2 className="text-2xl font-semibold">Information</h2>
                        <span className="text-xl">{isOpen.information ? '-' : '+'}</span>
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
                    <button onClick={() => toggleSection('links')} className="w-full text-left flex justify-between items-center py-2">
                        <h2 className="text-2xl font-semibold">Links</h2>
                        <span className="text-xl">{isOpen.links ? '-' : '+'}</span>
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
            <div className="flex relative p-2 space-x-4 lg:p-8 items-center justify-around">
                <p>@2024 organic matki. made by xyz</p>
                <div className="hidden lg:flex p-14 absolute bottom-2 bg-white rounded-full shadow-lg shadow-gray-500"></div>
                <div>
                    <p>Allow payment base on</p>
                    <div>icons</div>
                </div>
            </div>
        </>
    );
}
