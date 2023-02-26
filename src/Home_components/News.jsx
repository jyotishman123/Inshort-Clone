import React from 'react'

export default function News({News}) {
  

  return (
    <div className='2xl:w-[360px] bg-slate-100 py-5 px-5 shadow-xl rounded-md'> 
    <div>
      <img src={ News.urlToImage} alt="" className='w-[330px]' />
    </div>
    <div className='my-2 font-semibold '>
      <h4>{ News.title}</h4>
    </div>
    <div className='my-3'>
      <p className='py-2'>{News.description}</p>
      <p className='font-semibold'>{ News.publishedAt}</p>

    </div>
    <div>
          <a href={News.url}> <button >Read more</button>  </a>   
    </div>
    </div>
  )
}
