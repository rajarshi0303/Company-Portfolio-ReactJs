import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Adjust the stagger delay as needed
    },
  },
};

const cardVarient = {
  hidden: { y: 20 },
  show: { y: 0, transition: { duration: 0.3 } },
};

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/team")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section id="team">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-14">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
                Staff
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
                Meet Our Professional Team Members.
              </p>
              <div className="text-center">
                <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
              </div>
            </div>

            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8"
            >
              {data.map((team) => (
                <motion.div key={team.id} variants={cardVarient}>
                  <Card
                    url={team.url}
                    name={team.name}
                    position={team.position}
                  ></Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Card({ url, name, position }) {
  return (
    <a className="group relative flex items-center justify-center overflow-hidden h-96 md:h-80 rounded-sm bg-gray-100 shadow-lg">
      <img
        src={url}
        loading="lazy"
        alt="Photo by Minh Pham"
        className="absolute inset-0 h-96 w-full object-cover object-center  "
      />
      <div className="pointer-events-none absolute inset-0  group-hover:bg-gradient-to-tr  from-gray-950 "></div>

      <span className="absolute top-6 left-6 text-white group-hover:block hidden">
        <svg
          className="w-8 lg:w-6 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 17"
        >
          <path
            fillRule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="absolute top-28 left-6 text-white group-hover:block hidden">
        <svg
          className="w-4 lg:w-3 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fillRule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="absolute top-16 left-6 text-white group-hover:block hidden">
        <svg
          className="w-8 lg:w-6 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span className="absolute bottom-12  rounded-lg text-xl font-semibold text-white md:text-lg group-hover:block hidden">
        {name}
      </span>
      <span className="absolute  bottom-6 lg:bottom-8   italic rounded-lg text-lg text-white md:text-sm group-hover:block hidden">
        {position}
      </span>
    </a>
  );
}
