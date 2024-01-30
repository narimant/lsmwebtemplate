import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
type modalProps={
    setModal:(value:boolean)=>void
}
const LoginRegisterModal = ({setModal}:modalProps) => {

    const [showForm,setShowForm]=useState(false);
    return (
        <>
        <div className='bg-slate-800/50 z-40 fixed inset-0' ></div>


        <div className='flex items-center justify-center fixed z-50 inset-0  ' onClick={()=>setModal(false)}>
           <div className='w-full h-full md:w-fit md:h-fit bg-white rounded-lg ' onClick={(e)=>e.stopPropagation()}>

          
            <h2 className='py-4 flex justify-between '>
                <span className='px-5 font-medium'>{showForm ? 'ورود' : 'ثبت نام'} </span>
                <button className='py-2 px-2 mx-5' onClick={()=>setModal(false)}><IoClose size={25}/></button>
            </h2>
            <div className='px-5 py-5'>
               <div className='px-5'>
                {
                    showForm ? (
                        // ----------login form
                    <div>
                        <div className='relative'>
                        <input type='text' className='bg-gray-100 w-full ltr py-3 rounded-lg pl-10 pr-2 border border-gray-300' placeholder='email@email.com'/>
                        <MdOutlineAlternateEmail className='absolute left-2 top-3 text-gray-400' size={25}/>
                        </div>  
                         
                        <div>
                            <input type='password' placeholder="password" className='bg-gray-100 w-full ltr py-3 rounded-lg px-3 mt-5 border border-gray-300'/>
                        </div>

                        <div>
                        <button className='w-full bg-green-600 text-white mt-5 py-3 rounded-lg hover:bg-green-800'>ورود به سایت </button>
                        </div>

                        <div>
                            <span>
                            <button className='text-blue-600 mt-5 w-full text-center' onClick={()=>setShowForm(!showForm)}>  برای ثبت نام اینجا کلیک کنید</button>
                            </span>
                        </div>
                    </div>
                    ) : (
                        //---------- register form
                        <div className='*:py-2'>
                            <div>
                                <input type='text' placeholder='name' className='bg-gray-100 w-full ltr py-3 rounded-lg pl-10 pr-2 border border-gray-300'/>
                            </div>
                            <div  className='relative'>
                                <input type='email' className='bg-gray-100 w-full ltr py-3 rounded-lg pl-10 pr-2 border border-gray-300' placeholder='email@email.com'/>
                                <MdOutlineAlternateEmail className='absolute left-2 top-5 text-gray-400' size={25}/>
                            </div>
                            <div>
                                <input type='password' placeholder='password' className='bg-gray-100 w-full ltr py-3 rounded-lg pl-10 pr-2 border border-gray-300'/>
                            </div>

                            <div>
                                <button className='w-full bg-green-600 text-white mt-5 py-3 rounded-lg hover:bg-green-800'>ثبت نام</button>
                            </div>
                            <span>
                            <button onClick={()=>setShowForm(!showForm)} className='text-blue-600 mt-5 w-full text-center'>  برای  ورود اینجا کلیک کنید</button>
                            </span>
                        </div>
                    )
                }
                </div>
            </div>  

            </div>
        </div>
        </>
    );
};

export default LoginRegisterModal;