"use client";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface CarouselImageFields {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any;
}

const CarouselList = ({ images }: CarouselImageFields) => {
  if (!Array.isArray(images) || images.length === 0) {
    return <h2>No images available</h2>;
  }

  return (
    <ResponsiveCarousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      dynamicHeight={false}
    >
      {images
        .map((asset, assetIndex) => {
          if (
            typeof asset.fields === 'object' &&
            asset.fields !== null &&
            'file' in asset.fields &&
            asset.fields.file &&
            typeof asset.fields.file.url === 'string'
          ) {
            const imageUrl = asset.fields.file.url.startsWith("//")
              ? `https:${asset.fields.file.url}`
              : asset.fields.file.url;

            return (
              <div key={assetIndex} className="relative w-full h-96">
                <Image
                  src={imageUrl}
                  alt={`carousel image ${assetIndex + 1}`}
                  className="object-cover w-full h-full"
                  width={800}
                  height={450}
                  priority
                />
              </div>
            );
          }

          return null;
        })
        .filter((element): element is JSX.Element => element !== null)}
    </ResponsiveCarousel>
  );
};

export default CarouselList;
