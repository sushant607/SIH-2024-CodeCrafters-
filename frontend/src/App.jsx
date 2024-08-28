import { useState } from "react";
import LoginPage from './components/Login/LoginPage'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup/SignupPage";
import JobPage from './components/JobPage/JobPage'
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/" element={<SignupPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/job" element={<JobPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
