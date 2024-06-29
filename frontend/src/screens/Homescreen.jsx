import { useState } from "react";
// import Carousel from "../global/components/Carousel";
import Sliders from "../global/components/Sliders";
import Arrival from "../global/components/Arrival";
import Popular from "../global/components/Popular";

const Homescreen = () => {
  return (
    <div>
      <Sliders />
      <Arrival />
      <Popular />
    </div>
  );
};

export default Homescreen;
