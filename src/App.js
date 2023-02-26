 import Home from "./Pages/Home";
 import { Routes, Route } from "react-router-dom" 
 import NewsCateg from "./Pages/NewsCateg";
 import SignUp from "./Pages/SignUp";
 import SignIn from "./Pages/SignIn";
 import Error from "./Pages/404";
 

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/news/:id" element={ <NewsCateg/> } />
      <Route path="/sign-up" element={ <SignUp/> } />
      <Route path="/sign-in" element={ <SignIn/> } />
      <Route path="*" element={ <Error/> } />



      
       
    </Routes>
  </div>
  );
}

export default App;
 