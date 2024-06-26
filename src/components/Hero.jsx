import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showvideo, setShowVideo] = useState(false);

  function handleClick() {
    setShowVideo(!showvideo);
  }

  const text = "Better digital experience with Ninestars".split(" ");

  return (
    <div>
      <section
        id="home"
        className="mt-16 border-b-2 border-orange-500 bg-orange-50 dark:bg-gray-900 px-8"
      >
        <div className="max-w-screen-2xl mx-auto py-14">
          <div className="items-center lg:flex">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -500 }}
              transition={{
                repeat: 1,
                repeatType: "mirror",
                repeatDelay: 0.5,
                delay: 2,
                duration: 2,
                ease: "easeInOut",
              }}
              className="order-1 flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            >
              <img
                className="w-full h-full lg:max-w-3xl"
                src="/public/images/hero-img.svg"
                alt="Hero.svg"
              />
            </motion.div>
            <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
              {text.map((character, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index / 5,
                  }}
                  key={index}
                  className="mb-4 text-gray-600 text-3xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl "
                >
                  {character}{" "}
                </motion.span>
              ))}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  className="mb-4 text-gray-500 lg:mb-4 md:text-lg lg:text-2xl dark:text-gray-400"
                >
                  We are team of talented designers making website with
                  bootstrap.
                </motion.p>
                <div className="flex">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    whileTap={{ scale: 0.85 }}
                    className=" bg-orange-600 inline-flex items-center justify-center px-8 py-2 mr-5 text-base text-center text-white rounded-full bg-primary-700 hover:bg-orange-500"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    whileTap={{ scale: 0.85 }}
                    onClick={handleClick}
                    className="flex items-center group"
                  >
                    <svg
                      className="h-10 w-10 group-hover:text-orange-600"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                      ></path>
                    </svg>
                    <p className="px-1 text-lg group-hover:text-orange-600">
                      Watch video
                    </p>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showvideo && (
            <div
              id="default-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 right-0 left-0 z-50 w-full h-screen flex justify-center items-center bg-gray-900/70"
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
                className="relative p-4 w-full max-w-3xl mx-auto"
              >
                <div className="relative  rounded-lg dark:bg-gray-700">
                  <div className="flex items-end p-1 dark:border-gray-600">
                    <button
                      onClick={handleClick}
                      type="button"
                      className="bg-gray-200 text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-3 h-3"
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
                  <div className="p-1">
                    <video className="w-full rounded-lg" autoPlay controls>
                      <source
                        src="/public/Video/preview.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
