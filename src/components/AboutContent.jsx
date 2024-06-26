import React from "react";
import { motion } from "framer-motion";

const ContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Adjust the stagger delay as needed
    },
  },
};

const textVarient = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const featureVarient = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.5 } },
};

export default function AboutContent() {
  return (
    <div>
      <motion.header
        id="aboutus"
        className="bg-white max-w-screen-2xl mx-auto lg:px-8"
      >
        <div className="container my-10 flex flex-col lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            className="w-full h-full lg:w-1/2"
          >
            <img
              className="object-cover"
              src="public/images/about-img.svg"
              alt="glasses photo"
            />
          </motion.div>
          <motion.div
            variants={ContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mt-10 px-14 lg:mt-0 lg:w-1/2"
          >
            <motion.h1
              variants={textVarient}
              className="text-xl mr-2 font-bold text-orange-500 flex items-center"
            >
              About Us
            </motion.h1>

            <motion.h3
              variants={textVarient}
              className="text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl"
            >
              Voluptatem dignissimos provident quasi
            </motion.h3>
            <motion.p
              variants={textVarient}
              className="mt-4 text-gray-600 dark:text-gray-300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </motion.p>

            <div className="grid gap-4 mt-4 sm:grid-cols-2">
              <motion.div
                variants={featureVarient}
                className="flex items-center"
              >
                <div className="flex flex-col ">
                  <svg
                    className="w-12 mb-1"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      className="text-orange-400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                    ></path>
                  </svg>
                  <h3 className="mb-2 text-gray-500 text-xl font-semibold">
                    Corporis voluptates sit
                  </h3>
                  <p className=" text-gray-500">
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip.harum
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={featureVarient}
                className="flex items-center"
              >
                <div className="flex flex-col ">
                  <svg
                    className="w-12 mb-1"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      className="text-orange-400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    ></path>
                  </svg>
                  <h3 className="mb-2 text-gray-500 text-xl font-semibold">
                    Ullamco laboris nisi
                  </h3>
                  <p className=" text-gray-500">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt.harum pariatur
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
}
