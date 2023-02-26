import React, {useState} from 'react';
import {MenuIcon, XIcon} from "@heroicons/react/solid"

export default function() {
    const [nav, setNav] = useState(false);
    const show=()=>{
        setNav(true)
    }
    const hide=()=>{
        setNav(false)
    }
  return (
    <>

    <div className='w-full py-4 sm:px-[80px] px-8 border-b-2 border-slate-200'>
      <div className='flex justify-between items-center drop-shadow-xl'>
        <span className='text-3xl'>In<span className='text-red-500'>Short</span></span>
        <MenuIcon className='w-7' onClick={show}/>
      </div>
    </div>
   
    <div className={ nav ? 'h-[100vh] w-full backdrop-blur-sm bg-black/90  fixed top-0 left-0 flex justify-center items-center' : 'hidden'}>
            <ul className='text-center'>
                <li className='sm:text-3xl my-6 text-white'>Home</li>
                <li className='sm:text-3xl my-6 text-white'>About</li>
                <li className='sm:text-3xl my-6 text-white'>Documentation</li>
                <li className='sm:text-3xl my-6 text-red-500'>Account</li>
                <li><button className='sm:text-2xl my-6 bg-red-500 py-3 px-4 text-white text-md'>Sign Out</button></li>
                <li className='sm:text-2xl my-6 absolute bottom-2 left-[50%]'><XIcon className='w-7 text-white' onClick={hide}/></li>
            </ul>
   </div>
    
</>
   

  )
}
