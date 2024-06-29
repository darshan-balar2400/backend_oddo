import images from "../../assets/img/PNG/index";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const category = [
    {
      img: images.img_c1,
      category: "Bedroom",
    },
    {
      img: images.img_c7,
      category: "OFfice",
    },
    {
      img: images.img_c6,
      category: "Lighting",
    },
    {
      img: images.img_c5,
      category: "bathroom",
    },
    {
      img: images.img_c4,
      category: "kitchen",
    },
    {
      img: images.img_c3,
      category: "Interior",
    },
    {
      img: images.img_c2,
      category: "Livingroom",
    },
  ];
  const NextArrow = (props) => (
    <div {...props} className="slick-arrow next-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const PrevArrow = (props) => (
    <div {...props} className="slick-arrow prev-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white m-10 overflow-hidden text-center relative">
      <Slider {...settings}>
        {category.map((item, index) => (
          <div key={index}>
            <div className="max-w-xs m-4 transition-transform transform hover:scale-105 hover:text-red-600">
              <div className="bg-gray-100 p-12 hover:bg-white hover:shadow-md transition-all duration-300">
                <img
                  src={item.img}
                  title={item.category}
                  alt={item.category}
                  className="mx-auto"
                />
                <div className="mt-4">
                  <div className="font-semibold uppercase">{item.category}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
