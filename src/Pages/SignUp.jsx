 
import React,{useState} from 'react';
import Navbar from '../Home_components/Navbar';
// import {addDoc,  collection} from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 
 

import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth , db} from "../firebase"
export default function SignUp() {
 




const [email, setEmail] = useState('')
const [password, setPassword] = useState('');

 


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const Submit = ()=>{


  createUserWithEmailAndPassword(auth,  email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

   

   setDoc(doc(db, "cities", email), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
  

  

}

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center h-[100vh]'>
          <div className=' py-5 px-7 shadow-lg'>
            <h1 className='text-center py-3 text-2xl font-thin'>Register</h1>
           <form > 
            <input type="email" placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}}  required className='border-2 border-slate-200 py-2 px-5 w-full  my-3'/>
            <br />
            <input type="password" placeholder='Password' required  onChange={(e)=>{setPassword(e.target.value)}}   className='border-2 border-slate-200 py-2 px-5 w-full  my-3'/>
            <br />
            <input type="Submit" placeholder='Password'  onClick={Submit} required className='bg-red-500  font-semibold text-white py-2 px-5 w-full  my-3'/>


 


           </form>
          </div>
    </div>
    </>
  )
}
