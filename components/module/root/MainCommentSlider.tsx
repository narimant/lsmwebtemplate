"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import Image from "next/image";

const MainCommentSlider = () => {
  return (
    <>
      <Swiper
      loop={true}
      
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        
        className="mySwiper  bg-white min-h-36 h-auto"
      >
        <SwiperSlide className="bg-white border rounded-md shadow-lg  border-gray-200  ">
          <div className="flex justify-start items-center py-5 px-5 gap-5 min-h-36 h-auto flex-col xl:flex-row">
         
            <Image
              src="/images/user/01.jpg"
              width={100}
              height={100}
              alt="user image"
              className="rounded-full"
            />
         
          <div className="text-sm ">
            <h4>علیرضا محمدی</h4>
            <p className="font-extralight">
              به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو
              نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه
              راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی
              کاربردی بوده. تبریک میگم به محمد معین مهرانی عزیز برای دوره های
              ارزشمندی که خلق کرده.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white border rounded-md shadow-lg border-gray-200 absolute z-50">
          <div className="flex justify-start items-center py-5 px-5 gap-5 min-h-36 h-auto flex-col xl:flex-row">
         
            <Image
              src="/images/user/03.jpg"
              width={100}
              height={100}
              alt="user image"
              className="rounded-full"
            />
         
          <div className="text-sm ">
            <h4>علیرضا محمدی</h4>
            <p className="font-extralight">
              به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو
              نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه
              راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی
              کاربردی بوده. تبریک میگم به محمد معین مهرانی عزیز برای دوره های
              ارزشمندی که خلق کرده.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white border rounded-md shadow-lg border-gray-200  ">
          <div className="flex justify-start items-center py-5 px-5 gap-5 min-h-36 h-auto flex-col xl:flex-row">
         
            <Image
              src="/images/user/02.jpg"
              width={100}
              height={100}
              alt="user image"
              className="rounded-full"
            />
         
          <div className="text-sm ">
            <h4>علیرضا محمدی</h4>
            <p className="font-extralight">
              به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو
              نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه
              راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی
              کاربردی بوده. تبریک میگم به محمد معین مهرانی عزیز برای دوره های
              ارزشمندی که خلق کرده.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white border rounded-md shadow-lg border-gray-200  ">
          <div className="flex justify-start items-center py-5 px-5 gap-5 min-h-36 h-auto flex-col xl:flex-row">
         
            <Image
              src="/images/user/01.jpg"
              width={100}
              height={100}
              alt="user image"
              className="rounded-full"
            />
         
          <div className="text-sm ">
            <h4>علیرضا محمدی</h4>
            <p className="font-extralight">
              به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو
              نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه
              راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی
              کاربردی بوده. تبریک میگم به محمد معین مهرانی عزیز برای دوره های
              ارزشمندی که خلق کرده.
            </p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainCommentSlider;
