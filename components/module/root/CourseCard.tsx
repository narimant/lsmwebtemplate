import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiArrowFatLinesLeftDuotone } from "react-icons/pi";
type Props={
    imageSrc:string;
    title:string;
    price:number;
    link:string;
}

const CourseCard = ({imageSrc,title,price,link,}:Props) => {
  return (
    <div className="col-span-12 border border-gray-100 py-3 px-3 md:col-span-6 xl:col-span-3  flex flex-col justify-between relative drop-shadow-xl rounded-lg bg-white  mb-5">
      <Link href={link}><Image
        src={imageSrc}
        width={300}
        height={200}
        alt="course image"
        className="w-full rounded-lg mx-auto "
      /></Link>
      <div className="   text-sm flex flex-col justify-between ">
        <h2 className="mt-4" ><Link href={link}>   {title} </Link></h2>

        <div className="flex justify-between items-center mt-3">
          <span>
            <span> {price}</span>
            <span>تومان</span>
          </span>

          <span className=" bg-gray-100 rounded-full">
            <PiArrowFatLinesLeftDuotone size={15} />
          </span>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;
