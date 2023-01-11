import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const NewProductRight = () => {
  const [newProductSlider, setNewProductSlider] = useState();
  useEffect(() => {
    const getNewProductSlider = async (url) => {
      const response = await axios.get(url);
      setNewProductSlider(await response.data);
    };
    getNewProductSlider("jsons/newProductSlider.json");
  });
  if (!newProductSlider) return null;
  return (
    <div className="new-product-right md:w-[45%] w-full min-h-[0] relative flex justify-center my-5">
      <Swiper
        loop={true}
        slidesPerView={1}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },

          600: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={{ clickable: true }}
        className="swiper mySwiperPage"
      >
        {newProductSlider.map((slider) => (
          <SwiperSlide key={slider.id} className="min-h-[80vh]">
            <div className="swiper-img w-[240px] max-w-full min-h-0 flex flex-col items-center gap-2 justify-center">
              <div className="swiper-img-image overflow-hidden">
                <img
                  src={slider.img}
                  className="duration-300 w-[150px] hover:scale-[1.2]"
                  alt={slider.id}
                />
              </div>
              <h3 className="text-[23px] text-center font-bold text-red-600">
                {slider.text}
              </h3>
              <Link
                to={"/"}
                className="px-4 flex justify-center items-center py-2 rounded-[15px] bg-red-600 text-white hover:bg-white hover hover-red-600 hover:border-[1px] hover:border-red-600 hover:duration-[.5s] hover:text-red-600"
              >
                {slider.btn}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProductRight;
