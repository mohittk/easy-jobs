import React from "react";
import { Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function Navbar() {
  return (
    <>
      <div className="navbar p-5 bg-opacity-60 rounded-full  mt-7 w-100 shadow-2xl text-center">
        <Link
          className="home  mr-2 pl-5 pr-5 pt-2 pb-2  w-[50rem]  rounded-xl text-black font-encode"
          to="/"
        >
          Home
        </Link>
        <Link
          className="about  mr-2 pl-5 pr-5 pt-2 pb-2  w-[50rem] rounded-xl text-black font-encode"
          to="/about"
        >
          About
        </Link>
        <Link
          className="login  mr-2 pl-5 pr-5 pt-2 pb-2  w-[50rem]  rounded-xl text-black font-encode"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="signup  mr-2 pl-5 pr-5 pt-2 pb-2  w-[50rem]  rounded-xl text-black font-encode"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </>
  );
}
