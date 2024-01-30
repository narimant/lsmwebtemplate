import CourseCard from '@/components/module/root/CourseCard';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { TfiCup } from "react-icons/tfi";
const LatestCourses = () => {

    return (
        <div className='container mx-auto'>
            <div className='w-full flex justify-between items-center py-8'>
                <h2 className='flex justify-start items-center gap-5'>
                    <TfiCup size={30} className="text-amber-600" />
                    <span className='font-bold text-xl'>جدیدترین دوره های آموزشی </span>
                </h2>

                   <Link href="#"  className='flex justify-start items-center gap-2 bg-gray-500 rounded-lg px-8 py-2 text-white'>
                   <span>
                    مشاهده بیشتر
                    </span>
                        <HiOutlineArrowSmallLeft size={15}/>
                    </Link> 
            </div>


            <div className='grid grid-cols-12 mb-8 gap-5 mt-8'>
            <CourseCard title='آموزش Api نویسی با Nodejs ' imageSrc='/images/course-image/01.png' price={356000} link='#' />
            <CourseCard title='آموزش NPM برای جاوا اسکریپت ' imageSrc='/images/course-image/02.png' price={356000} link='#' />
            <CourseCard title='تست نفوذ با کالی لینوکس | PWK ' imageSrc='/images/course-image/03.png' price={356000} link='#' />
            <CourseCard title='راه اندازی کسب و کار شخصی برای برنامه نویسان ' imageSrc='/images/course-image/04.png' price={356000} link='#' />
            <CourseCard title='آموزش Api نویسی با Nodejs ' imageSrc='/images/course-image/01.png' price={356000} link='#' />
            <CourseCard title='آموزش NPM برای جاوا اسکریپت ' imageSrc='/images/course-image/02.png' price={356000} link='#' />
            <CourseCard title='تست نفوذ با کالی لینوکس | PWK ' imageSrc='/images/course-image/03.png' price={356000} link='#' />
            <CourseCard title='راه اندازی کسب و کار شخصی برای برنامه نویسان ' imageSrc='/images/course-image/04.png' price={356000} link='#' />
            </div>
            
        </div>
    );
};

export default LatestCourses;