"use client";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";


const Carousel = () => {
  const imagesCarousel = ['/images/carousel-1.jpg', '/images/carousel-2.jpg', '/images/carousel-3.jpg', '/images/carousel-4.jpg']

  return (
    <>
      <ResponsiveCarousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        {imagesCarousel.map((img, index) => (
          <div key={index} style={{ height: "400px", position: "relative" }}>
            <Image
              src={img}
              alt={`carousel image ${index + 1}`}
              style={{ objectFit: "cover" }}
              className="h-full w-full"
              fill
              priority
            />
          </div>
        ))}
      </ResponsiveCarousel>
    </>
  );
};

export default Carousel;
