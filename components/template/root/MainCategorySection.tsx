"use client";
import "swiper/css";
import "swiper/css/bundle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from 'swiper/modules';
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
const MainCategorySection = () => {
  return (
    <div className="my-6 ">
      <div className="flex flex-col text-center gap-2">
        <h4 className="font-extraligh text-gray-500">
          دسته بندی دوره های آموزشی
        </h4>
        <h2 className="text-xl font-bold text-gray-500">
          دوره های فراوان در دسته بندی های مختلف
        </h2>
      </div>

      {/* swiper start */}
      <div className="h-auto   container  mx-auto mt-4 ">
        <Swiper
        loop={true}
        autoplay={{delay: 2500,
         disableOnInteraction: false,}}
        spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}

          modules={[Autoplay]}
        >
          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md border hover:cursor-pointer border-gray-100 py-4  hover:bg-green-600 hover:text-white">
              <GiArtificialIntelligence size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md hover:cursor-pointer border border-gray-100 py-4  hover:bg-green-600 hover:text-white">
              <FaPhp size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md hover:cursor-pointer border border-gray-100 py-4  hover:bg-green-600 hover:text-white">
              <IoLogoJavascript size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md hover:cursor-pointer border border-gray-100 py-4  hover:bg-green-600 hover:text-white">
              <FaCss3Alt size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md border hover:cursor-pointer border-gray-100 py-4  hover:bg-green-600 hover:text-white">
              <ImHtmlFive2 size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-4">
            <div className="flex items-center flex-col w-full shadow-lg rounded-md border border-gray-100 hover:cursor-pointer py-4 hover:bg-green-600 hover:text-white">
              <FaPython size={40} />
              <div className="mt-4">کارگاه اموزش php</div>
              <div className="text-sm">15 دوره آموزشی</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainCategorySection;
