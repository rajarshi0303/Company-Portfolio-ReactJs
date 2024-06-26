import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { motion } from "framer-motion";

import ProductCard from "../portfolio/ProductCard";

const gridContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Adjust the stagger delay as needed
    },
  },
};

const cardVarient = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

export default function ProductAll() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allUrlsAndIds = products.map((product) => ({
    id: product.id,
    url: product.url,
  }));
  return (
    <>
      {isloading ? (
        "..Loading"
      ) : (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"
        >
          {products.map((product, index) => {
            return (
              <motion.div key={product.id} variants={cardVarient}>
                <ProductCard
                  id={product.id}
                  url={product.url}
                  title={product.title}
                  body={product.body}
                  images={allUrlsAndIds}
                  imageId={index}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
