import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../assets/img/JPG/index";

const Sliders = () => {
  const sliderRef = useRef(null);

  const sliderdata = [
    {
      img: images.img_1,
    },
    {
      img: images.img_2,
    },
    {
      img: images.img3,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="overflow-hidden relative">
      <Slider ref={sliderRef} {...settings}>
        {sliderdata.map((img, index) => (
          <div key={index}>
            <img className="w-full" src={img.img} alt="img" />
          </div>
        ))}
      </Slider>

      <FontAwesomeIcon
        onClick={previous}
        className="bg-white absolute top-64 left-4  p-2 text-black font-bold size-8 hover:bg-red-600 hover:text-white"
        icon="angle-left"
      />
      <FontAwesomeIcon
        onClick={next}
        className="bg-white absolute top-64 right-2 p-2 text-black font-bold size-8 hover:bg-red-600 hover:text-white"
        icon="angle-right"
      />
    </div>
  );
};

export default Sliders;
