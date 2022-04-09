import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="home-page ">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar />
          </div>
          <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
            {" "}
            Easy Jobs
          </h1>
        </div>
      </div>
    </>
  );
}
