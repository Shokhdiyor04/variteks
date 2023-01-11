import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";
import NavbarBgLogo from "../images/navbar/bg-logo.png";
import SlideBtnBgVector from "../images/navbar/section-c-left-overlay.png";

export default function HomeTopBackgroundSwiperPage() {
  const [slider, setSlider] = useState();

  useEffect(() => {
    const getSlider = async (url) => {
      const response = await axios.get(url);
      setSlider(await response.data);
    };
    getSlider("jsons/homeNavbarSlider.json");
  });
  if (!slider) return null;
  return (
    <>
      <Swiper
        modules={[Pagination]}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="mySwiper relative"
      >
        {slider.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={
              "w-full min-h-screen relative flex justify-end items-top overflow-hidden"
            }
          >
            <img
              className="min-h-screen object-cover object-[0]  absolute left-0"
              src={slide.sliderImage}
              alt={slide.id}
            />
            <h3 className="absolute z-50 text-4xl text-white md:w-[500px] w-[300px] max-w-full md:top-[130px] md:right-[50px] bottom-[40%]">
              {slide.text}
            </h3>
            <img
              className="absolute z-10 pointer-events-none"
              src={NavbarBgLogo}
              alt="bg"
            />
            <img
              className="slider-btn-bg-vector absolute z-10 pointer-events-none"
              src={SlideBtnBgVector}
              alt="bg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
