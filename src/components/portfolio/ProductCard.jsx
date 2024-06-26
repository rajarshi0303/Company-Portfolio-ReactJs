import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ProductCarousel from "./ProductCarousel";

export default function ProductCard({ id, url, title, body, images, imageId }) {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(!modal);
  }

  return (
    <>
      <span className="group relative flex h-72 items-center justify-center overflow-hidden rounded-lg bg-gray-50 shadow-lg md:h-80">
        <img
          src={url}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 group-hover:bg-gray-950/70"></div>
        <span
          onClick={handleClick}
          className="contrast-100 rounded-full py-2 text-base text-white hover:text-orange-500 group-hover:block hidden"
        >
          <svg
            className="w-8"
            data-slot="icon"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
            ></path>
          </svg>
        </span>
        <NavLink to={`/portfoliodetails/${id}`}>
          <span className="ml-3 contrast-100 rounded-full  px-2 py-2 text-base text-white hover:text-orange-500 group-hover:block hidden">
            <svg
              className="w-8"
              data-slot="icon"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              ></path>
            </svg>
          </span>
        </NavLink>
        <span className="absolute top-4 left-4 rounded-lg text-lg font-semibold capitalize text-white md:text-lg group-hover:block hidden">
          {title}
        </span>
        <span className="absolute bottom-4 px-4 rounded-lg text-sm text-white md:text-sm group-hover:block hidden">
          {body}
        </span>
      </span>

      <AnimatePresence>
        {modal && (
          <div
            id="default-modal"
            aria-hidden="true"
            className="flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 max-h-full bg-slate-950/70"
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.3 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 300 },
              }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
              className="relative p-4 w-full max-w-2xl max-h-full"
            >
              <div className="relative rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between dark:border-gray-600">
                  <button
                    onClick={handleClick}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="w-full h-full space-y-4">
                  <ProductCarousel id={imageId} images={images} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
