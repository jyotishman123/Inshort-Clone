import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBubsZ5qTdT1RrKzvou6EcUZLn3_IBk7D0",
    authDomain: "inshort-9609e.firebaseapp.com",
    projectId: "inshort-9609e",
    storageBucket: "inshort-9609e.appspot.com",
    messagingSenderId: "422238247866",
    appId: "1:422238247866:web:47d5cfe28f7f62370f5b83"
  };


  const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const db = getFirestore(app);
   export  {auth}
   export {db}