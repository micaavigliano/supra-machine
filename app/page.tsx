import client from "@/lib/contentful";
import Carousel from "./components/Carousel/Carousel";
import Cardslist from "./components/cardslist/Cardslist";
import CompanyText from "./components/companyText/CompanyText";
import OtherServices from "./components/otherServices/OtherServices";

const getImagesCarousel = async () => {
  const images = await client.getEntries({ content_type: 'carousel' })
  return images.items
}

export default async function Home() {
  const imagesCarousel = await getImagesCarousel();

  return (
    <>
      <Carousel />
      <CompanyText />
      <Cardslist />
      <OtherServices />
    </>
  );
}
