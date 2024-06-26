import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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

export default function Product() {
  const [product, setProduct] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product?type=product")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allUrlsAndIds = product.map((item) => ({
    id: item.id,
    url: item.url,
  }));
  return (
    <>
      {isloading ? (
        "...isLoading"
      ) : (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"
        >
          {product.map((item, index) => {
            return (
              <motion.div key={item.id} variants={cardVarient}>
                <ProductCard
                  id={item.id}
                  url={item.url}
                  title={item.title}
                  body={item.body}
                  images={allUrlsAndIds}
                  imageId={index}
                ></ProductCard>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
