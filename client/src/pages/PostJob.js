import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function PostJob() {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <div className="upperbar bg-indigo-600">
        <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
          <Navbar />
        </div>
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
          {" "}
          Easy Jobs
        </h1>
      </div>

      <div className="post-job-container text-left m-20  p-20 rounded-xl  bg-[#ffffff]">
        <div className="title ">
          <h1 className="m-20 text-3xl font-semibold text-indigo-600">
            {" "}
            Job posting Form{" "}
          </h1>
        </div>
        <div className="role">
          <label className="text-xl ml-20 font-medium ">Enter the role </label>
          <input
            type="text"
            onChange={((e)=>{setRole(e.target.value);})}
            className="role shadow-2xl p-3 w-[20%] text-xl m-3 bg-white  outline-none border-2 rounded-xl"
          />
        </div>

        <div className="jobtype">
          <label className="jobtype ml-20 text-xl font-medium ">
            Select job type{" "}
          </label>
          <select onChange={((e)=>{setJobType(e.target.value)})}   className="job-type shadow-2xl p-3 w-[20%] text-xl border-2 m-3 bg-white outline-none rounded-xl">
            <option value="1">Full-Time</option>
            <option value="1">Part-Time</option>
          </select>
        </div>

        <div className="company">
          <label className="text-xl ml-20 font-medium">
            Enter Your company name
          </label>
          <input
            type="text"
            onChange={((e)=>{setCompany(e.target.value)})}
            className="company shadow-2xl p-3 w-[20%] text-xl border-2 m-3 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="location">
          <label className="text-xl ml-20 font-medium"> Enter Location </label>
          <input
            type="text"
            onChange={((e)=>{setLocation(e.target.value)})}
            className="location p-3 border-2 shadow-2xl w-[20%] text-xl m-5 bg-white outline-none rounded-xl"
          />
        </div>

        <button
          className="submit p-3 border-2 shadow-2xl w-[20%] text-xl hover:bg-[#c0c0c0] ml-20 bg-white outline-none rounded-xl "
          type="submit"
          onClick={((e)=>{setLocation(''); setCompany(''); setJobType(''); setRole('');})}
        >
          Submit
        </button>
      </div>
    </>
  );
}
