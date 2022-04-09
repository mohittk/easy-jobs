import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {Link}  from 'react-router-dom'

export default function PostJob() {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = async(e) =>{
    e.preventDefault();
    
    setRole('');
    setCompany('');
    setJobType('');
    setLocation('');

    

  }
 

  return (
    <>
      <div className="upperbar bg-indigo-600">
        <div className="nav float-right p-[3rem] text-2xl font-encode text-white">
        <Navbar active="post_a_job"/>
        </div>
        <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
          {" "}
          Easy Jobs
        </h1>
        </Link>
      </div>

      <div className="post-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
        <div className="title ">
          <h1 className="m-10 text-3xl font-semibold text-indigo-600">
            {" "}
            Job posting Form{" "}
          </h1>
        </div>
        <div className="role">
          <label className="text-xl ml-10 font-medium ">Enter the role </label>
          <br/>
          <input
            type="text"
            value={role}
            onChange={((e)=>{setRole(e.target.value);})}
            className="role shadow-2xl p-3  text-xl ml-10 w-[85%] bg-white outline-none border-2 rounded-xl"
          />
        </div>

        <div className="jobtype mt-5">
          <label className="jobtype ml-10 text-xl font-medium ">
            Select job type{" "}
          </label>
          <br />
          <select value={jobType} onChange={((e)=>{setJobType(e.target.value)})}   className="job-type shadow-2xl p-3 text-xl border-2  ml-10 w-[85%] bg-white outline-none rounded-xl">
            <option value="1">Full-Time</option>
            <option value="1">Part-Time</option>
          </select>
        </div>

        <div className="company mt-5">
          <label className="text-xl ml-10 font-medium">
            Enter Your company name
          </label>
          <br />
          <input value={company}
            type="text"
            onChange={((e)=>{setCompany(e.target.value)})}
            className="company shadow-2xl p-3  ml-10 w-[85%] text-xl border-2 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="location mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Location </label>
          <br /><input
            type="text"
            value={location}
            onChange={((e)=>{setLocation(e.target.value)})}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
          />
        </div>

        <button
          className="submit mb-5 p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 bg-white outline-none rounded-xl "
          type="submit"
          onClick={handleChange}

        >
          Submit
        </button>
      </div>
    </>
  );
}
