import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/faq")
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
      <section className="bg-orange-50">
        <div className="container flex flex-col justify-center p-4 max-w-screen-2xl mx-auto md:p-8">
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1, transition: { type: "spring" } }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
              F.A.Q
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
              Frequently Asked Questions.
            </p>
            <div className="text-center">
              <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
            </div>
          </motion.div>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 dark:divide-gray-700">
            {data.map((faq) => (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Accordion id={faq.id} title={faq.title} body={faq.body} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Accordion({ id, title, body }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div>
      <AnimatePresence>
        <motion.details onClick={() => setIsOpen(!isOpen)} key={id}>
          <summary className="py-4 text-lg focus:text-orange-500 outline-none cursor-pointer">
            {title}
          </summary>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="px-4 pb-4"
            >
              <p className="w-48 z-10">{body}</p>
            </motion.div>
          )}
        </motion.details>
      </AnimatePresence>
    </motion.div>
  );
}
