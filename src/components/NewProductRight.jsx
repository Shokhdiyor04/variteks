import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


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
    <div className="new-product-right w-[45%] min-h-screen relative">
      <Swiper
        slidesPerView={2}
        modules={[Navigation]}
        className="swiper mySwiperPage"
      >
        {newProductSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="swiper-img w-[200px] flex flex-col items-center gap-5 justify-center">
              <div className="swiper-img-image">
                <img src={slider.img} className="w-[100px]" alt={slider.id} />
              </div>
              <h3 className="text-[23px] font-bold text-red-600">
                {slider.text}
              </h3>
              <a
                href="#"
                className="w-[150px] py-2 px-5 rounded-[15px] bg-red-600 text-white hover:bg-white hover hover-red-600 hover:border-[2px] hover:border-red-600 hover:duration-[.5s] hover:text-red-600"
              >
                {slider.btn}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProductRight;
