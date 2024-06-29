// import Carousel from "../global/components/Carousel";
import Sliders from "../global/components/Sliders";
import Arrival from "../global/components/Arrival";
import Popular from "../global/components/Popular";
import Category from "../global/components/Category";

const Homescreen = () => {
  return (
    <div className="h-auto">
      <Sliders />
      <Category />
      <Arrival />
      <Popular />
    </div>
  );
};

export default Homescreen;
