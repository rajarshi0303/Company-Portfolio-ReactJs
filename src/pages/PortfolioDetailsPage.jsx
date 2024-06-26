import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import PortfolioNavbar from "../layout/PortfolioNavbar";
import Subscribe from "../components/Subscribe";
import Footer from "../layout/Footer";

export default function PortfolioDetailsPage() {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((eror) => {
        console.log(eror);
      });

    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PortfolioNavbar />
      <div className="mt-36 max-w-screen-xl mx-auto lg:px-10">
        <div className="flex flex-col lg:h-full lg:flex-row">
          <div className="px-4 flex w-full h-full lg:w-3/5">
            <img className="object-cover" src={data.url} alt="glasses photo" />
          </div>

          <div className="px-4 max-w-md lg:px-2  lg:w-2/5">
            <a
              href="#"
              className="block p-6 bg-white border mt-8 lg:mt-0 shadow-lg divide-y divide-gray-200 "
            >
              <h5 className="mb-2 py-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Project Information
              </h5>
              <div className="py-2 space-y-2">
                <p className="text-lg capitalize">
                  <span className="font-semibold">Category</span> : {data.title}
                </p>
                <p className="text-lg capitalize">
                  <span className="font-semibold">Client</span> : ASU Company
                </p>
                <p className="text-lg capitalize">
                  <span className="font-semibold">Project Date</span> : 01,
                  March 2023
                </p>
                <p className="text-lg text-orange-500">
                  <span className="font-semibold text-black">Project URL</span>{" "}
                  : www.example.com
                </p>
              </div>
            </a>
            <h5 className="mt-8 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
              Exercitationem repudiandae officiis neque suscipit
            </h5>
            <p className="mt-4 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.Autem ipsum nam porro corporis
              rerum. Quis eos dolorem eos itaque inventore commodi labore quia
              quia. Exercitationem repudiandae officiis neque suscipit non
              officia eaque itaque enim.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
