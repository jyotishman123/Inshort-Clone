import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 

export default function Categories() {

  
  return (
    <div className='w-full py-2 px-8 my-11 '>
 
 <div className='text-center'>
   <h1 className='text-4xl py-5 my-10'> Categories </h1>
   <ul className='flex   items-center justify-around flex-wrap'>
   <a href="/news/technology"> <li className='border-2 border-sky-500 py-1 px-2 rounded-md my-2'><button>Technology</button></li></a>
   <a href="/news/automobile"> <li className='border-2 border-sky-500 py-1 px-2 rounded-md my-2'><button>Automobile</button></li></a>
   <a href="/news/sports"> <li className='border-2 border-sky-500 py-1 px-2 rounded-md my-2'><button>Sports</button></li></a>
   <a href="/news/trending"> <li className='border-2 border-sky-500 py-1 px-2 rounded-md my-2'><button>Trending</button></li></a>
    

   </ul>
 </div>     
        </div>
        
  )
}
