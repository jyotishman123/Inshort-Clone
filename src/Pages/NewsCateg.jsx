import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Home_components/Navbar';
import { Key } from '../Request';
import News from '../NewsCat/News';
import Error from './404';
import { useNavigate } from "react-router-dom";
import { ColorSwatchIcon } from '@heroicons/react/solid';
 

 

export default function NewsCateg() {
    let {id} = useParams()
    const [post, setPost] = useState(false);
    const [items , setItems] = useState(5);
    const [hide , setHide] = useState(false); 
    
 
    useEffect (() => {
    fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=${Key}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setPost(data.articles);
                        
                    }).catch(
                      
                      
                      console.log('error'),
                       
                      
                    )

                },[])
  
    if (!post) return null
console.log(post.length)

 const loading =()=>{
    
      setHide(true)
    
    
 }
 
const showMore =()=>{
 
  setItems(items+5);
  if(post.length <= items){
    setHide(true)
  }
}
  return (
     <>
    <Navbar/>
    

  
    

    <div className=  'w-[80%] m-auto my-8'>

      {
      post.slice(0,items).map((ele)=>{
  return(
        <News news={ele}/>
  )
      })
      
      
      }

  
 <div className='text-center' onLoad={loading}>
  <button className=  {hide ? 'hidden' :'my-8 border-2 border-sky-600 py-3 px-5 rounded-md'} onClick={showMore}>Load More</button>
 </div>
     

    </div>

 
     
     </>
  )
}
