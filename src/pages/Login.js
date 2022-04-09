import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <h1 className="text-blue-800 rounded-xl shadow-2xl text-3xl p-10 w-[25rem] font-alfa ml-10">
        {" "}
        IIIT-Bhopal Library{" "}
      </h1>
      <div className="nav m-10 text-center">
        <Navbar />
      </div>
    </>
  );
}
