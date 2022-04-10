import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import main from '../assets/main.png'
import { auth_applicant } from "../controllers/applicant";


export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3rem] text-2xl font-encode text-white">
            <Navbar />
          </div>
          <Link to="/">
            <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
              {" "}
              Easy Jobs
            </h1>
          </Link>
        </div>

        <div className="hero p-20 flex flex-row">
          <div className="title p-5 ml-10 b">
            <h1 className="text-indigo-600 text-6xl p-5 font-encode">Easily find a job with <br /><span className="text-9xl"> Easy Jobs..</span> </h1>
          </div>

          <div className="image absolute right-0 " >
            <img className="fadeupdown mr-20 rounded-2xl" src={main} />
          </div>
        </div>
      </div>
    </>
  );
}
