import React from "react";
import Navbar from "../components/Navbar";
import JobContainer from "../components/JobContainer";
import {Link} from 'react-router-dom';


export default function Jobs() {

    const jobSearch = () =>{
      
    }

  return (
    <>
      <div className="upperbar bg-indigo-600">
        <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
          <Navbar active="jobs"/>
        </div>
        <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
          {" "}
          Easy Jobs
        </h1>
        </Link>
      </div>
      <div className="find-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
        <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
          Find Jobs
        </h2>

        <div className="flex flex-row">
        <select className="p-3 w-[50%] text-xl m-5 bg-[#e0e0e0] outline-none rounded-xl ">
          <option value="full-time">Full-Time</option>
          <option selected value="part-time">
            Part-Time
          </option>
        </select>

        <select className="p-3 w-[50%] text-xl m-5 bg-[#e0e0e0] outline-none rounded-xl ">
          <option value="grapefruit">Remote</option>
          <option selected value="coconut">
            In-office
          </option>
        </select>

        <button className="p-3 w-[50%] text-white text-xl m-5 rounded-xl bg-indigo-600"  onClick={jobSearch}>
           Search
        </button>
        </div>

        

      </div>


      <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
      <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
        {"3"} Results Found
        </h2>
        <JobContainer role="Backend Dev" company="Tesla Corp." location="Remote - work from home" jobtype="full-time" />
        <JobContainer role="Frontend Dev" company="SpaceX Inc." location="San Francisco, US" jobtype="part-time" />
        <JobContainer role="Cloud Engineer" company="Google Inc." location="California, US" jobtype="full-time"/>

      </div>
    </>
  );
}
