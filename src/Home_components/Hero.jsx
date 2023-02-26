import React from 'react'

export default function Hero() {
  return (
    <div className='w-full  px-[60px] py-11 flex justify-center items-center flex-wrap'> 

   <div>
     <img src="https://www.inshorts.com/dist/images/home_page/main_india@2x.jpg " className='h-[500px]' alt="" />
   </div>

   <div className='text-center lg:text-left'>
    <h1 className='text-3xl font-semibold py-1'>Get <span className='text-red-500 text-4xl'>Upto date</span></h1>
    <p className='py-1'>We understand you don’t have time to go through long news articles everyday</p>
    <p className=''>So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile </p>
    <button className='sm:text-2xl my-6 bg-red-500 py-3 px-9 rounded-md text-white text-md'>Read</button>
    </div>
         
    </div>
  )
}
