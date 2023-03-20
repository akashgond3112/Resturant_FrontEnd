import { Carousel } from "./Component/Carousel";
import { ExploreTopResturant } from "./Component/ExploreTopResturant";
import { Heros } from "./Component/Hero";
import { ResturantServices } from "./Component/ResturantServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopResturant />
      {/* <NewCarousel /> */}
      <Carousel />
      <Heros />
      <ResturantServices />
    </>
  );
};
