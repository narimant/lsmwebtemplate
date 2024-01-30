import React from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { LiaUserLockSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import  { useState } from "react";
import MobileMenuItem from './MobileMenuItem';
import LoginRegisterModal from './LoginRegisterModal';
const MobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [userModal,setUserModal]=useState(false);
    const changeMobileMenu = () => {
      setMobileMenu(!mobileMenu);
    };


    const menuItems=[
        {
            title: 'صفحات',
            subMenus: [
              {title: 'صفحه اول',src: '#',},
              {title: 'صفحه دوم',src: '#',},

             ],  
          },
          {
            title: 'صفحات دوم',
            subMenus: [
              {title: 'صفحه اول',src: '#',},
              {title: 'صفحه دوم',src: '#',},

             ],  
          }
          
    ]


    return (
       <>
       
       
      <div className="w-full z-30 py-1 sticky top-0 bg-white lg:py-6 shadow-md">
        <div className="container mx-auto py-1 flex justify-between items-center">
          <div className="flex pr-3 justify-between items-center gap-5 py-3">
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
            <button className="py-4 px-4 bg-green-100 text-green-800 rounded-lg  ">
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

        {/* ----user button ---- */}
          <button className="py-4 px-4 ml-3 bg-green-100 text-green-800 rounded-lg  lg:hidden" onClick={()=>setUserModal(!userModal)}>
            <LiaUserLockSolid />
          </button>


        </div>
      </div>


        {/* ----use register and login modal---------- */}
        {userModal && (<LoginRegisterModal setModal={setUserModal}/>)}


      {/* mobile menu */}
 
          <div
          className={`${mobileMenu ? 'fixed':'hidden' }  inset-0 backdrop-blur-sm z-30 bg-slate-800/25`}
          onClick={changeMobileMenu}
        >
           </div>
        
       
           
          <div
            className={`${mobileMenu ? `translate-x-0`:`translate-x-72` } right-0 w-72 duration-500 fixed  bg-white bottom-0 top-0  p-5 z-50 `}
            onClick={(e) => e.stopPropagation()}
          >

           <div>
           <div className="flex justify-between items-center">
              <div>
              
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

            {/* ----menu items----- */}
            <div>
                {
                    menuItems.map((item,index)=>(
                    <MobileMenuItem key={index} menuItem={item}/>
                    ))
                }
              
            </div>

           </div>



          </div>
       
       </>
    );
};

export default MobileMenu;