"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { LiaUserLockSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

// type RootHeaderType= () => React.JSX.Element;


const RootHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const changeMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <div className="w-full bg-green-600 bg-pattern-2 p-5">
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
      <div className="w-full bg-white py-6 shadow-md">
        <div className="container mx-auto py-1 flex justify-between items-center">
          <div className="flex justify-between items-center gap-5 py-3">
            <button
              className="py-2 px-2 bg-green-100 text-green-800 rounded-lg  lg:hidden "
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <CiMenuBurger size={25} />
            </button>

            <Link href="#">
              <img
                src="/images/ostad-sho-light.png"
                className="max-w-32 h-auto"
              />
            </Link>
            <nav className="font-light text-sm hidden   lg:block">
              <ul className="flex justify-start items-center gap-5">
                <li>
                  <Link href="#" className="p-4">
                    صفحات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="p-4">
                    وکامرس
                  </Link>
                </li>
                <li>
                  <Link href="#" className="p-4">
                    مدرسان
                  </Link>
                </li>
                <li>
                  <Link href="#" className="p-4">
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" justify-between items-center gap-3 hidden lg:flex">
            <button className="py-4 px-4 bg-green-100 text-green-800 rounded-lg ">
              <IoSearchOutline size={20} />
            </button>

            <Link
              href="#"
              className="py-4 px-4 bg-green-100 text-green-800 rounded-lg "
            >
              <CiShoppingBasket size={20} />
            </Link>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-12 bg-gray-200 peer-focus:outline-none   rounded-lg peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-lg after:h-11 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <button className="flex justify-start items-center bg-green-500 text-white py-3 px-4 gap-2 rounded-lg hover:bg-green-800">
              <LiaUserLockSolid size={20}/>
              <span>ورود / عصویت</span>
            </button>
          </div>

          <button className="py-4 px-4 bg-green-100 text-green-800 rounded-lg  lg:hidden">
            <LiaUserLockSolid />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobileMenu && (
        <div
          className="absolute inset-0 backdrop-blur z-30"
          onClick={changeMobileMenu}
        >
          <div
            className="w-[300px] fixed right-0 bg-gray-400 bottom-0 top-0 p-5 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div>
                {" "}
                <img
                  src="/images/ostad-sho-light.png"
                  className="max-w-32 h-auto"
                />
              </div>
              <button
                onClick={changeMobileMenu}
                className="py-2 px-2 bg-green-100 text-green-800 rounded-lg  "
              >
                <IoClose size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RootHeader;
