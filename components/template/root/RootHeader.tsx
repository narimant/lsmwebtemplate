"use client";
import MobileMenu from "@/components/module/root/MobileMenu";
import Link from "next/link";





const RootHeader = () => {
 
  return (
    <>
      <div className="w-full  bg-green-600 bg-pattern-2 p-5">
        <div className="container mx-auto font-vazirmatn text-white">
          <div className="flex justify-between items-center font-vazir">
            <h2 className=" font-bold text-xl">
              دوشنبه های اختصاصی |{" "}
              <span className=" font-light text-lg">شروع تا 24 ساعت آینده</span>
            </h2>
            <Link
              href="#"
              className="text-sm  bg-gray-50 text-black py-3 px-4 rounded-lg"
            >
              بریم به کمپین
            </Link>
          </div>
        </div>
      </div>


      
      <MobileMenu />
    
    </>
  );
};

export default RootHeader;
