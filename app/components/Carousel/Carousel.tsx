import { Entry, EntrySkeletonType } from "contentful";
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

  return (
    <>
      <h2>funciona carousel</h2>
      <div>
        {(images[0].fields.images as { fields: ImageFields }[]).map((img, index) => (
          <Image
            key={index}
            src={img.fields.file.url.startsWith("//") ? `https:${img.fields.file.url}` : img.fields.file.url}
            alt="carousel image"
            width={500}
            height={300}
            className="w-auto h-auto"
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
