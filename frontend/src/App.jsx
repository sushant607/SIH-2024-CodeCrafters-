import { useState } from "react";
import LoginPage from './components/Login/LoginPage'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup/SignupPage";
import JobPage from './components/JobPage/JobPage'
import UpdateProfile from "./components/Profile/UpdateProfile";
function App() {
  const [count, setCount] = useState(0);

  return (
       <>
         <BrowserRouter>
         <Routes>
           <Route path="/" element={<SignupPage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/job" element={<JobPage />} />
           <Route path="/UpdateProfile" element={<UpdateProfile />} />
         </Routes>
         </BrowserRouter>
       </>
  );
}

export default App;
