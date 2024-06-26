import React from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handledata(event) {
    let { name, value } = event.target;
    setFormdata((prevdata) => ({ ...prevdata, [name]: value }));
  }
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/contact", formdata)
      .then((response) => {
        console.log(response.data);
        setFormdata({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <section id="contactus" className=" max-w-screen-xl mx-auto">
        <div className="bg-white container px-6 py-12 mx-auto">
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1, transition: { type: "spring" } }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
              ContactUs
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
              Lets Get Started.
            </p>
            <div className="text-center">
              <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 1, type: "spring", bounce: 0.2 },
              }}
              viewport={{ once: true }}
              className="p-6 grid grid-cols-1 gap-4 shadow-2xl border-t-2 border-b-2 border-orange-500 sm:grid-cols-2 lg:grid-cols-1"
            >
              <div className="flex">
                <span className="inline-block h-16 w-16 p-3 text-orange-500 rounded-full bg-orange-50 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="ml-4 text-2xl font-medium text-gray-800 dark:text-white">
                    Location
                  </h2>
                  <p className="ml-4 mt-1 text-base text-blue-500 dark:text-blue-400">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </div>
              <div className="flex">
                <span className="inline-block h-16 w-16 p-3 text-orange-500 rounded-full bg-orange-50 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="ml-4 text-2xl font-medium text-gray-800 dark:text-white">
                    Email
                  </h2>
                  <p className="ml-4 mt-1 text-lg text-blue-500 dark:text-blue-400">
                    hello@example.com
                  </p>
                </div>
              </div>
              <div className="flex">
                <span className="inline-block h-16 w-16 p-3 text-orange-500 rounded-full bg-orange-50 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="ml-4 text-2xl font-medium text-gray-800 dark:text-white">
                    Email
                  </h2>
                  <p className="ml-4 mt-1 text-lg text-blue-500 dark:text-blue-400">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg h-72 lg:h-72">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: "spring", bounce: 0.2 },
              }}
              viewport={{ once: true }}
              className="p-4 py-6 rounded-lg lg:col-span-2 shadow-2xl border-t-2 border-b-2 border-orange-500 md:p-8"
            >
              <form onSubmit={handlesubmit}>
                <div className="md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-lg text-gray-600 ">
                      Your Name
                    </label>
                    <input
                      name="name"
                      value={formdata.name}
                      onChange={handledata}
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-orange-500 rounded-lg"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-lg text-gray-600 ">
                      Your Email
                    </label>
                    <input
                      name="email"
                      value={formdata.email}
                      onChange={handledata}
                      type="email"
                      placeholder="example@gmail.com"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-orange-500 rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formdata.subject}
                    onChange={handledata}
                    type="text"
                    placeholder="Subject"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-orange-500 rounded-lg"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formdata.message}
                    onChange={handledata}
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-orange-500 rounded-lg md:h-56 "
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button className="text-center px-6 py-3 mt-4 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg ">
                    Send message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
