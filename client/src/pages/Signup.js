import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

  return (
    <>
      <div className="signup-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar active="post_a_job" />
          </div>
          <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
            {" "}
            Easy Jobs
          </h1>
        </div>

        <div className="signup-form text-left p-32 bg-white m-32 rounded-lg">
        <h1 className="ml-20 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
           Signup
         <br />
           <span className="text-xl">Tell us about yourself !</span>
          </h1>
          <label className="text-xl ml-20 font-medium "> Full Name</label>
          <br />
          <input
            type="text"
            className="role shadow-2xl p-3 w-[20%] text-xl ml-20 bg-white  outline-none border-2 rounded-xl"
          />
       

        <div className="jobtype mt-5">
          <label className="jobtype ml-20 text-xl font-medium ">
            User Type{" "}
          </label>
          <br />
          <select className="job-type shadow-2xl p-3 w-[20%] text-xl border-2 ml-20 bg-white outline-none rounded-xl">
            <option value="1">Applicant</option>
            <option value="1">Recruiter</option>
          </select>
        </div>

        <div className="company mt-5">
          <label className="text-xl ml-20 font-medium">
            Email Address
          </label>
          <br />
          <input
            type="text"
            className="company shadow-2xl p-3 w-[20%] text-xl border-2 ml-20 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="location mt-5">
          <label className="text-xl ml-20 font-medium"> Password</label>
          <br />
          <input
            type="text"
            className="location p-3 border-2 shadow-2xl w-[20%] text-xl mb-10 ml-20 bg-white outline-none rounded-xl"
          />
        </div>

        <button
          className="submit p-3 border-2 shadow-2xl w-[20%] text-xl hover:bg-[#c0c0c0] ml-20 bg-white outline-none rounded-xl "
          type="submit"

        >
          Submit
        </button>

        <div className="already flex flex-row">
            <h3 className="ml-20 p-3 text-2xl text-indigo-600 font-medium">Already have an account?</h3>
            <button 
          className="submit p-2 border-2 shadow-2xl w-[10%] text-xl hover:bg-[#c0c0c0] bg-white outline-none rounded-xl "
          type="submit"
          onClick={()=>{navigate('/login')}}

        >
          Login
        </button>
        </div>
      </div>
      </div>
    </>
  );
}
