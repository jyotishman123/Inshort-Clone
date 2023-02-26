import React,{useState, useEffect} from 'react';
import Navbar from '../Home_components/Navbar';

import { signInWithEmailAndPassword , onAuthStateChanged, signOut  } from "firebase/auth";
import {auth} from "../firebase"
 



export default function SignIn() {
   
  const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   
  const Submit= ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

   
  }


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('hellow')
      // ...
    } else {
      // User is signed out
      // ...
      
    }
  });


  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
   

 


  return (
     <>
     <Navbar/>
     <div className='flex justify-center items-center h-[100vh]'>
          <div className=' py-5 px-7 shadow-lg'>
            <h1 className='text-center py-3 text-2xl font-thin'>Login</h1>
           <form >
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} className='border-2 border-slate-200 py-2 px-5 w-full  my-3'/>
            
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} className='border-2 border-slate-200 py-2 px-5 w-full  my-3'/>
            
            
        
            <input type="Submit" placeholder='Password'  onClick={Submit} className='bg-red-500  font-semibold text-white py-2 px-5 w-full  my-3'/>


 


           </form>
          </div>
    </div>
     </>
  )
}


 