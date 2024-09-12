// src/components/Sidebar.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseConfig";

export default function Sidebar({ onSelectSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function logoutFunction() {
    localStorage.clear();
    auth.signOut();
    navigate("/login");
  }

  return (
    <div>
      {/* Menu Button for small screens */}
      <div className="px-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden rounded-md border-pink-400 text-pink-400 border-2 font-semibold  px-4 py-1 "
        >
          Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-28 text-white rounded-tr-md sm:top-0 left-0 h-screen bg-gray-900 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out sm:relative sm:translate-x-0 sm:w-40 sm:block w-3/4 z-40`}
      >
        <div className="flex p-4 justify-between">
          <div className="text-2xl font-bold">Indie Stori</div>
          <i
            onClick={() => setIsOpen(false)}
            className="fa-solid fa-xmark text-2xl font-bold cursor-pointer sm:hidden"
          ></i>
        </div>
        <nav className="px-4">
          <ul>
            <li
              onClick={() => {
                onSelectSection("dashboard");
                setIsOpen(false);
              }}
              className="cursor-pointer mb-2"
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                onSelectSection("account");
                setIsOpen(false);
              }}
              className="cursor-pointer mb-2"
            >
              Account
            </li>
            <li
              onClick={() => {
                onSelectSection("orders");
                setIsOpen(false);
              }}
              className="cursor-pointer mb-2"
            >
              Orders
            </li>
            {/* <li onClick={() => { onSelectSection('addresses'); setIsOpen(false); }} className="cursor-pointer mb-2">Addresses</li> */}
            <li onClick={logoutFunction} className="cursor-pointer mb-2">
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
        ></div>
      )}
    </div>
  );
}
