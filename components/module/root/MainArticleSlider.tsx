import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from 'swiper/modules';
import Image from "next/image";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';



const MainArticleSlider = () => {
  return (
    <>
      <Swiper
      navigation={true} 
      modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="">
          <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
             <Link href="#" className="h-48 block" >
             <Image
                src="/images/blog/01.jpg"
                width={300}
                height={260}
                alt="weblog image"
                className="w-full h-full object-cover"
              /></Link>
              <Image
                src="/images/user/01.jpg"
                width={50}
                height={50}
                className="absolute rounded-full -bottom-5 left-5 p-1 bg-white"
                alt="user image"
              />
            </div>
            <div  className="px-5 py-5">
              <div>
                <h2 className="mt-8 font-medium text-sm">
                  اصول برگزاری افتتاحیه فروشگاه برای رشد 100 درصدی
                </h2>
                <p className="text-xs font-light mt-4 leading-5">
                  یک دسته بادکنک به رنگ مشکی و زرد، یک اسپیکر بزرگ با آهنگ‌های
                  محسن ابراهیم‌زاده و در نهایت کمی کیک و آب‌میوه! این نهایت
                  ایده‌پردازی ...
                </p>
              </div>
              <div className="text-xs font-light flex justify-between items-center  mt-5">
                <span className="flex justify-start items-center gap-2">
                    <FaRegComments />
                    <span>  4 دیدگاه</span>
                  </span>
                <span className="flex justify-start items-center gap-2">
                  <Link href="#">مشاهده مطلب</Link>
                  <IoMdArrowDropleft />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className=" pb-4">
          <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
             <Link href="#" className="h-48 block" >
             <Image
                src="/images/blog/02.jpg"
                width={300}
                height={260}
                alt="weblog image"
                className="w-full h-full object-cover"
              /></Link>
              <Image
                src="/images/user/01.jpg"
                width={50}
                height={50}
                className="absolute rounded-full -bottom-5 left-5 p-1 bg-white"
                alt="user image"
              />
            </div>
            <div  className="px-5 py-5">
              <div>
                <h2 className="mt-8 font-medium text-sm">
                  اصول برگزاری افتتاحیه فروشگاه برای رشد 100 درصدی
                </h2>
                <p className="text-xs font-light mt-4 leading-5">
                  یک دسته بادکنک به رنگ مشکی و زرد، یک اسپیکر بزرگ با آهنگ‌های
                  محسن ابراهیم‌زاده و در نهایت کمی کیک و آب‌میوه! این نهایت
                  ایده‌پردازی ...
                </p>
              </div>
              <div className="text-xs font-light flex justify-between items-center  mt-5">
                <span className="flex justify-start items-center gap-2">
                    <FaRegComments />
                    <span>  4 دیدگاه</span>
                  </span>
                <span className="flex justify-start items-center gap-2">
                  <Link href="#">مشاهده مطلب</Link>
                  <IoMdArrowDropleft />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide className="">
          <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
             <Link href="#" className="h-48 block" >
             <Image
                src="/images/blog/03.jpg"
                width={300}
                height={260}
                alt="weblog image"
                className="w-full h-full object-cover"
              /></Link>
              <Image
                src="/images/user/01.jpg"
                width={50}
                height={50}
                className="absolute rounded-full -bottom-5 left-5 p-1 bg-white"
                alt="user image"
              />
            </div>
            <div  className="px-5 py-5">
              <div>
                <h2 className="mt-8 font-medium text-sm">
                  اصول برگزاری افتتاحیه فروشگاه برای رشد 100 درصدی
                </h2>
                <p className="text-xs font-light mt-4 leading-5">
                  یک دسته بادکنک به رنگ مشکی و زرد، یک اسپیکر بزرگ با آهنگ‌های
                  محسن ابراهیم‌زاده و در نهایت کمی کیک و آب‌میوه! این نهایت
                  ایده‌پردازی ...
                </p>
              </div>
              <div className="text-xs font-light flex justify-between items-center  mt-5">
                <span className="flex justify-start items-center gap-2">
                    <FaRegComments />
                    <span>  4 دیدگاه</span>
                  </span>
                <span className="flex justify-start items-center gap-2">
                  <Link href="#">مشاهده مطلب</Link>
                  <IoMdArrowDropleft />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>





        <SwiperSlide className="">
          <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
             <Link href="#" className="h-48 block" >
             <Image
                src="/images/blog/04.jpg"
                width={300}
                height={260}
                alt="weblog image"
                className="w-full h-full object-cover"
              /></Link>
              <Image
                src="/images/user/01.jpg"
                width={50}
                height={50}
                className="absolute rounded-full -bottom-5 left-5 p-1 bg-white"
                alt="user image"
              />
            </div>
            <div  className="px-5 py-5">
              <div>
                <h2 className="mt-8 font-medium text-sm">
                  اصول برگزاری افتتاحیه فروشگاه برای رشد 100 درصدی
                </h2>
                <p className="text-xs font-light mt-4 leading-5">
                  یک دسته بادکنک به رنگ مشکی و زرد، یک اسپیکر بزرگ با آهنگ‌های
                  محسن ابراهیم‌زاده و در نهایت کمی کیک و آب‌میوه! این نهایت
                  ایده‌پردازی ...
                </p>
              </div>
              <div className="text-xs font-light flex justify-between items-center  mt-5">
                <span className="flex justify-start items-center gap-2">
                    <FaRegComments />
                    <span>  4 دیدگاه</span>
                  </span>
                <span className="flex justify-start items-center gap-2">
                  <Link href="#">مشاهده مطلب</Link>
                  <IoMdArrowDropleft />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>




    
        
      </Swiper>
    </>
  );
};

export default MainArticleSlider;
