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

      <div className="post-job-container ">

          <div className="role">
        <label>Enter the role </label>
        <input type="text" className="role" />
        </div>

        <div className="jobtype">
        <select className="job-type p-3 w-[50%] text-xl m-5 bg-white outline-none rounded-xl">
          <option value="1">Full-Time</option>
          <option value="1">Part-Time</option>
        </select>
        </div>

        <div className="company">
            <label>Enter Your company name</label>
            <input type="text" className="company" />
        </div>
        
        <div className="location">
        <label > Enter Location </label>
        <input type="text" className="location" />
        </div>
      </div>
    </>
  );
}
