import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import News from './News';
 


 
 export default function Cat({title, FetchApi}) {
    const [post, setPost] = useState(false);
 
    useEffect (() => {
    fetch(FetchApi)
                    .then((res) => res.json())
                    .then((data) => {
                        setPost(data.articles)
                    })

                },[])
  
    if (!post) return null
// console.log(request.topheading)
// console.log(post.articles[0].urlToImage);
console.log(post[0])

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


   return (
       
 <>
    <div>
            <div className='py-3 my-5 font-semibold text-2xl'>
        <h3>{title}</h3>
      </div>
  <Carousel responsive={responsive}>
 {
     post.slice(0,10).map((ele)=>{
        return(
         
        
      // <div className='2xl:w-[360px] bg-slate-100 py-5 px-5 shadow-xl rounded-md'> 
      //   <div>
      //     <img src={ ele.urlToImage} alt="" className='w-[330px]' />
      //   </div>
      //   <div className='my-2 font-semibold '>
      //     <h4>{ ele.title}</h4>
      //   </div>
      //   <div className='my-3'>
      //     <p className='py-2'>{ele.description}</p>
      //     <p className='font-semibold'>{ ele.publishedAt}</p>

      //   </div>
      //   <div>
      //     <button>Read more</button>
      //   </div>
      //   </div>
        <News News={ele}/>
        )
     
       

     

        
})

 }
  
</Carousel>

</div>

 
 </>
     
   
      
   )
 }
 