import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
type menuItemProps={
    menuItem:{
    title:string;
    subMenus:{
        title:string,
        src:string}[]
    }
}
const MobileMenuItem = ({menuItem}:menuItemProps) => {
    const [toggleMenu,setTogleMenu]=useState(false);
    return (
        <>
            <div className=' w-full  border-b r'>
              <div className='flex justify-between w-full items-cente py-4'>
              <span className='font-light w-full' onClick={()=>setTogleMenu(!toggleMenu)}>{menuItem.title}</span>
                <div>
                {
                    toggleMenu ? (
                    <IoIosArrowDown onClick={()=>setTogleMenu(!toggleMenu)}/>
                    ) : ( 
                    <IoIosArrowUp onClick={()=>setTogleMenu(!toggleMenu)}/>
                    )
                }
               
                </div>
              </div>
                
              <div className={`${toggleMenu ? `show` : `hidden`}`}>
                    <ul className='text-sm  *:py-2 *:mr-2 bg-gray-100 rounded-lg py-2 mb-3 shadow-sm'>
                        {
                            menuItem.subMenus.map((item,index)=>(
                                <li><Link href={item.src} key={index}>{item.title}</Link></li>
                            ))
                        }
                        
                        
                    </ul>
                </div>
              </div>
            
        </>
    );
};

export default MobileMenuItem;