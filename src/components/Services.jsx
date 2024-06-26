import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // Adjust the stagger delay as needed
    },
  },
};

const cardVarient = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section id="services">
        <div className="bg-orange-50 py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1, transition: { type: "spring" } }}
              viewport={{ once: true }}
              className="mb-10 md:mb-14"
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
                Services
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
                Check Out The Great Services We offer.
              </p>
              <div className="text-center">
                <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
              </div>
            </motion.div>
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-5 justify-center sm:grid-cols-3 md:gap-6 xl:grid-cols-4"
            >
              {services.map((service) => (
                <motion.div key={service.id} variants={cardVarient}>
                  <Card title={service.title} body={service.body} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, body }) {
  const icon = {
    designing: (
      <svg
        className="w-12 "
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        ></path>
      </svg>
    ),
    development: (
      <svg
        className="w-12 "
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
    ),
    management: (
      <svg
        className="w-12"
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
          d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
        ></path>
      </svg>
    ),
    marketing: (
      <svg
        className="w-12"
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
          d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
        ></path>
      </svg>
    ),
  };
  return (
    <div className="max-w-sm p-6  bg-white rounded-2xl shadow-lg shadow-gray-200 flex flex-col justify-center items-center hover:-translate-y-2 duration-500 hover:border-b-4 border-orange-500 group">
      {icon[title]}
      <h5 className="mb-2 text-lg text-center capitalize font-semibold tracking-tight text-gray-900 group-hover:text-orange-500 ">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 text-center">{body}</p>
    </div>
  );
}
