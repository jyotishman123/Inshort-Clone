import React from 'react'

export default function News({news}) {
  return (
    <div className='shadow-xl  w-full my-5'>
    <div className='flex flex-wrap'>

     <div className='w-[45%]'>
       <img src={news.urlToImage} alt="" className='w-[full]'/>
     </div>

       <div className='w-[45%] py-5 px-3'>
         <h2 className='my-3 text-2xl font-semibold'>{news.title}</h2>
         <p className='text-md py-2 my-1'>{news.description}</p>
         <h4 className='text-sm font-bold'>{news.publishedAt}</h4>
         <a href={news.url} className='py-3'><button className='py-2'>Read more</button></a>
         </div>        
    </div>
 </div>
  )
}
