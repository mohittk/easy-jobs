import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Login from '../pages/Login';
import Signup from '../pages/Signup';



export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}
