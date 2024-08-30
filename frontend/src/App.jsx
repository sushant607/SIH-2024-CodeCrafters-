import { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/Signup/SignupPage";
import JobPage from "./components/JobPage/JobPage";
import ProfileSection from "./components/ViewProfile/Profile";
import UpdateUserProfile from "./components/UserProfile/UpdateProfile";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import OrgNavbar from "./components/OrgNavbar/OrgNavbar";
import UpdateOrgProfile from "./components/OrgProfile/OrgProfile";
import JobList from "./components/JobList/JobList";
import AddJob from "./components/AddJob/AddJob";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userhome' element={<Home />} />
          <Route path='/orghome' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/job' element={<JobPage />} />
          <Route path='/UpdateOrgProfile' element={<UpdateOrgProfile />} />
          <Route path='/jobList' element={<JobList />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfileSection />} />
          <Route path='/currentjobs' element={<JobPage />} />
          <Route path='/job/:id' element={<JobPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/UpdateUserProfile' element={<UpdateUserProfile />} />
          <Route path='/addjob' element={<AddJob/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
