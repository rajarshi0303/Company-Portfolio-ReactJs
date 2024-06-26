import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function ProductCarousel({ id, images }) {
  console.log(id);
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Update current when id changes
  React.useEffect(() => {
    if (api) {
      setCurrent(id);
      api.scrollTo(id);
    }
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className={`${current === index ? "" : ""}`}>
                <img className="rounded-lg" src={image.url} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-900/75 text-white w-7 h-7" />
        <CarouselNext className="bg-gray-900/75 text-white w-7 h-7 " />
      </Carousel>
    </div>
  );
}
