import React,{useState,useEffect} from 'react';
import Cat from './Cat'; 
import request from '../Request';


export default function Row() {
 
  return (
 
    <div className='border-2  px-[130px] py-10 '>
         <Cat title={'topHeading..'} FetchApi={request.topheading}/>
         <Cat title={'Sports..'} FetchApi={request.sports}/>
         <Cat title={'Crypto..'} FetchApi={request.bitcoin}/>
         <Cat title={'Technology..'} FetchApi={request.technology}/>



         
    </div>
  
  )
}
