import client from "@/lib/contentful";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/Carousel/Carousel";

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: 'title' });
  return entries;
}

const getImagesCarousel = async () => {
  const images = await client.getEntries({ content_type: 'carousel' })
  return images.items
}

export default async function Home() {
  const blogEntries = await getBlogEntries();
  const imagesCarousel = await getImagesCarousel()

  return (
    <>
      <Header />
      <Carousel images={imagesCarousel} />
      <Footer />
    </>

  );
}
