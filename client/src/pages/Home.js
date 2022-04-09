import React from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';
import main from '../assets/main.png'


export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar />
          </div>
          <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
          {" "}
          Easy Jobs
        </h1>
        </Link>
        </div>

        <div className="hero p-20 flex flex-row">
          <div className="title p-5 ml-10 b">
            <h1 className="text-indigo-600 text-6xl p-5 font-encode">Easily find a job with Easy Jobs..</h1>
          </div>

        <div className="image absolute right-0 " >
          <img className=" mr-20 rounded-2xl" src={main} />
        </div>
        </div>





      </div>
    </>
  );
}
