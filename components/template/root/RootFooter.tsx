import React from 'react';
import { PiStudentFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
const RootFooter = () => {
    return (
        <div className='w-full mt-8'>
           
                <div className='bg-black text-white py-5'>
                <div className='container mx-auto  flex  flex-col    items-center gap-8 md:flex-row md:justify-between md:flex-wrap md:gap-0 md:*:mb-5 lg:flex-nowrap lg:*:mb-0'>
                    <div className='basis-full  md:basis-6/12 lg:basis-3/12'>
                      <div className='flex gap-2'>
                      <PiStudentFill size={25} />
                        <span className='font-bold'>دوره های با کیفیت</span>
                      </div>
                        <p className='text-sm text-gray-300'> بر اساس جدیدترین مباحث</p>
                    </div>

                    <div className='basis-full md:basis-6/12 lg:basis-3/12'>
                      <div className='flex gap-2'>
                      <BiSupport size={25}/>
                        <span className='font-bold'> پشتیبانی 24 ساعته  </span>
                      </div>
                        <p className='text-sm text-gray-300'> بر اساس جدیدترین مباحث</p>
                    </div>


                    <div className='basis-full md:basis-6/12 lg:basis-3/12'>
                      <div className='flex gap-2'>
                      <FaSackDollar size={25}/>
                        <span className='font-bold'>  کش بک محصولات </span>
                      </div>
                        <p className='text-sm text-gray-300'> کش بک مصولات دارای تخفیف   </p>
                    </div>


                    <div className='basis-full md:basis-6/12 lg:basis-3/12'>
                      <div  className='flex gap-2'>
                      <IoCart size={25}/>
                        <span className='font-bold'> خرید آسان و امن  </span>
                      </div>
                        <p className='text-sm text-gray-300'>    در کمترین زمان امن خرید کنید</p>
                    </div>
                  </div>
                </div>
                
                
                {/*--------------- footer section 2---------- */}
                <div className='grid grid-cols-12 container mx-auto py-14 font-light'>
                    <div className='flex justify-start gap-8 col-span-12 mx-auto md:col-span-6 lg:col-span-4 '>
                       <div className=''>
                       <h3 className=' flex justify-start items-center gap-2'><PiCheckSquareOffsetFill size={25}/> <span>دسترسی سریع</span></h3>
                        <ul className='list-disc *:mr-8 *:leading-8 mt-2'>
                            <li>
                                <Link href="#">صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href="#">فروشگاه</Link>
                            </li>
                            <li>
                                <Link href="#">آموزش ها</Link>
                            </li>
                        </ul>
                       </div>
                       
                        <div className=''>
                        <h3 className=' flex justify-start items-center gap-2'><PiCheckSquareOffsetFill  size={25}/> <span> لیست مدرسان</span></h3>
                        <ul className=' list-disc *:mr-8 *:leading-8 mt-2'>
                            <li>
                                <Link href="#">محمد معین مهرانی</Link>
                            </li>
                            <li>
                                <Link href="#">ایمان مداینی</Link>
                            </li>
                            <li>
                                <Link href="#">رستم دستان</Link>
                            </li>
                        </ul>
                        </div>


                    </div>

                    <div className='col-span-12 lg:col-span-4 mx-auto mt-5 md:col-span-6 md:mt-0' >
                        <ul className='*:py-2'>
                            <li className='flex gap-2'>
                                <FaMapLocationDot size={25} className='text-green-600'/>
                                <span>تهران - خیابان پاسداران - فرعی ۶۵</span>
                            </li>

                            <li className='flex gap-2'>
                                <PiPhoneCall size={25} className='text-green-600'/>
                                <span>021-00000 | 021-000000</span>
                            </li>

                            <li className='flex gap-2'>
                                <MdOutlineMail className='text-green-600'/>
                                nariman.tatari@gmail.com
                            </li>
                        </ul>

                    </div>

                    <div className='flex flex-col col-span-12 md:mt-5 lg:col-span-4 lg:mt-0 px-5'>
                    <h3>عضویت در خبرنامه</h3>
                    <input type='text' className='w-full text-gray-500 outline-none bg-gray-200 ltr mt-5 py-2 px-3 rounded-lg' placeholder='youremail@yoursite.com' />
                    <button className='bg-black text-white py-2 w-full text-center rounded-lg mt-5'>عضویت در خبرنامه</button>
                    </div>
                </div>



                {/*-------footer section 3 ------  */}
                <div className='w-full border-t border-gray-200'>
                    <div  className='container mx-auto  flex-col md:flex-row px-5 justify-start  mt-8'>
                        <div className='basis-12 md:basis-3/12 flex gap-5 justify-around'>
                            <Image src="/images/namad/enamad.jpg" width={125} height={135}  alt='enamad'/>
                            <Image src="/images/namad/samandehi.png" width={125} height={135}  alt='samandehi'/>
                        </div>
                        <div className='basis-12 mt-5 md:basis-9/12 flex flex-col'>
                            <div>
                            <h4>قالب استاد شو ، قالبی کاملا ایرانی و مدرن جهت فروش دوره</h4>
                            <p>پوسته و قالب استاد شو اولین و بروزترین پوسته آموزشی ایران که در سال 1401 توسط تیم پیشتاز وب کد نویسی به بازار گرم وردپرس ایران عرضه شد، شما میتوانید این پوسته را در سایت راست چین خریداری و استفاده نمایید.​</p>
                            </div>

                            <div className='flex justify-end gap-5'>
                                <Link href="">
                                <FaFacebookF size={25}/>
                                </Link>
                                <Link href="">
                                <IoLogoTwitter size={25}/>
                                </Link>
                                <Link href="">
                                <FaTelegramPlane size={25}/>
                                </Link>
                                <Link href="">
                                <FaInstagram size={25}/>
                                </Link>
                               
                               
                              
                             
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RootFooter;