import client from "@/lib/contentful";
import Carousel from "./components/Carousel/Carousel";
import Cardslist from "./components/cardslist/Cardslist";


// const getBlogEntries = async () => {
//   const entries = await client.getEntries({ content_type: 'title' });
//   return entries;
// }

const getImagesCarousel = async () => {
  const images = await client.getEntries({ content_type: 'carousel' })
  return images.items
}

export default async function Home() {
  const imagesCarousel = await getImagesCarousel();

  return (
    <div>
      <Carousel images={imagesCarousel} />
      <Cardslist />
    </div>

  );
}
