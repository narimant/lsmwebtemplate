"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import MainArticleSlider from "@/components/module/root/MainArticleSlider";
const MainArticle = () => {
  return (
    <div className="grid grid-cols-12 container mx-auto">


      <div className="col-span-12 rounded-lg md:col-span-3 h-full flex flex-col justify-center items-center  bg-pattern3 relative overflow-hidden   bg-gradient-to-r from-green-600 to-green-800 md:rounded-tr-md md:rounded-br-md md:rounded-tl-3xl md:rounded-bl-3xl">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="flex rota flex-col text-white">
            <span className="text-3xl font-thin">مطاب خواندنی</span>
            <span className="text-3xl font-bold">استادشو</span>
          </h2>
          <Link href="#" className="flex mb-5 md:mb-0 justify-start gap-3 bg-white py-2 px-5 items-center rounded-lg z-20 text-green-800">
            <span>مشاهده بیشتر</span>
            <IoIosArrowBack />
          </Link>
        </div>
      </div>

      <div className="col-span-12 mt-5 md:mt-0 md:col-span-9">
      <div className="h-auto    container  mx-auto  md:pr-5">
       <MainArticleSlider />
      </div>
      </div>
    </div>
  );
};

export default MainArticle;
