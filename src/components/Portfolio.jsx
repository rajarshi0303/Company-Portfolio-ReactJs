import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["all", "app", "product", "brand"];

export default function Portfolio() {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <div>
      <section id="portfolio">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1, transition: { type: "spring" } }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
                Portfolio
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
                Check Out Our Beautifull Portfolio.
              </p>
              <div className="text-center">
                <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
              </div>
            </motion.div>
            <nav className="bg-white ">
              <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {tabs.map((tab) => (
                  <NavLink to={`/${tab === "all" ? "" : tab}`}>
                    <Chip
                      text={tab}
                      selected={selected === tab}
                      setSelected={setSelected}
                      key={tab}
                    />
                  </NavLink>
                ))}
              </div>
            </nav>
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-slate-800 hover:text-orange-500"
      } text-lg font-semibold transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10 capitalize">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-orange-500 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
