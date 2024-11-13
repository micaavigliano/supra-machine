"use client";
import { Entry, EntrySkeletonType } from "contentful";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface ImageFields {
  file: {
    url: string;
  };
}

interface CarouselImageFields extends EntrySkeletonType {
  images: {
    fields: ImageFields;
  }[];
}

type CarouselProps = {
  images: Entry<CarouselImageFields>[];
};


const Carousel = ({ images }: CarouselProps) => {
  if (!Array.isArray(images) || images.length === 0 || !images[0].fields.images) {
    return <h2>No images available</h2>;
  }

  const imagesCarousel = ['/images/carousel-1.jpg', '/images/carousel-2.jpg', '/images/carousel-3.jpg', '/images/carousel-4.jpg']

  return (
    <>
      <ResponsiveCarousel showThumbs={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
        {imagesCarousel.map((img, index) => (
          <div key={index} style={{ height: '600px' }}>
            <Image
              src={img}
              alt={`carousel image ${index + 1}`}
              objectFit="cover"
              className="h-full w-full"
              width={500}
              height={500}
            />
          </div>
        ))}
      </ResponsiveCarousel>
    </>
  );
};

export default Carousel;
