import React from "react";
import Navbar from "../components/Navbar";

export default function Jobs() {
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
      <div className="find-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
        <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
          Find Jobs
        </h2>

        <div className="flex flex-row">
        <select className="p-3 w-[50%] text-xl m-5 bg-[#e0e0e0] outline-none rounded-xl ">
          <option  value="full-time">Full-Time</option>
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

        <button className="p-3 w-[50%] text-white text-xl m-5 rounded-xl bg-indigo-600">
            Search
        </button>
        </div>

      </div>


      <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
      <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
         Results Found
        </h2>

      </div>
    </>
  );
}
