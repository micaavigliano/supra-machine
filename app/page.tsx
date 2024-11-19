import Carousel from "./components/Carousel/Carousel";
import Cardslist from "./components/cardslist/Cardslist";
import CompanyText from "./components/companyText/CompanyText";
import OtherServices from "./components/otherServices/OtherServices";

export default async function Home() {
  return (
    <>
      <Carousel />
      <CompanyText />
      <Cardslist />
      <OtherServices />
    </>
  );
}
