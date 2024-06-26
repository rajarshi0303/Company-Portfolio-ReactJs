import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function Clients() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/clients")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const plugin = React.useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  return (
    <div>
      <section>
        <div className="bg-orange-50 py-6 sm:py-8 lg:py-10">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1, transition: { type: "spring" } }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-400 md:mb-2 lg:text-2xl">
                Clients
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 font-semibold md:text-3xl">
                They Trusted Us
              </p>
              <div className="text-center">
                <span className="inline-block w-20 h-0.5 bg-orange-400 rounded-full"></span>
              </div>
            </motion.div>
            <div className="mt-8 mx-4 lg:mx-0">
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full mx-auto max-w-sm lg:max-w-screen-2xl"
              >
                <div className="flex items-center">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index + 1}
                        className="basis-44 lg:basis-60"
                      >
                        <img
                          className="h-10 w-auto lg:h-16"
                          src={image.url}
                          alt=""
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
                <CarouselPrevious className="-left-8 lg:-left-12 text-gray-500" />
                <CarouselNext className=" -right-8 text-gray-500" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
