import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  function handleClick() {
    setMobile(!mobile);
  }
  return (
    <div>
      <nav className="bg-white border-gray-200 shadow-md fixed w-full top-0 z-10 lg:px-8">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center rtl:space-x-reverse">
            <span className="self-center text-2xl tracking-wide font-sans whitespace-nowrap text-gray-500">
              Ninestars
            </span>
          </a>
          <div className="flex">
            <button className="md:hidden py-2 px-6 bg-orange-600 text-gray-100 rounded-full hover:bg-orange-500 ">
              Get Started
            </button>
            <button
              onClick={handleClick}
              data-collapse-toggle="navbar-default"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${mobile ? "" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col px-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#home"
                  className="block py-2 text-gray-900 hover:text-orange-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className="block py-2 text-gray-900 hover:text-orange-600 "
                >
                  AboutUs
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 text-gray-900 hover:text-orange-600 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block py-2 text-gray-900 hover:text-orange-600 "
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="block py-2 text-gray-900 hover:text-orange-600 "
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  className="block py-2 text-gray-900 hover:text-orange-600 "
                >
                  ContactUs
                </a>
              </li>
              <li>
                <a className="hidden md:block py-2 px-6 bg-orange-600 text-gray-100 rounded-full hover:bg-orange-500 ">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
