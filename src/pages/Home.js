import React from 'react';
import lib from '../assets/569.jpg'
import Navbar from '../components/Navbar'
export default function Home(){
    return(
        <>
        <h1 className="text-blue-800 rounded-xl shadow-2xl text-3xl p-10 w-[25rem] font-alfa ml-10"> IIIT-Bhopal Library </h1>
        <div className="nav m-10 text-center">
        <Navbar />

        </div>
        <div className="hero-section flex flex-row">
        <div className="book-issue-form m-16 rounded-xl shadow-2xl ">
            <h3 className="text-black font-semibold m-10"> Issue Book here</h3>
        </div>
        <img src={lib} className="absolute rounded-xl mr-20 mt-10 right-0 w-[25rem] " />
        </div>
        </>
    )
}