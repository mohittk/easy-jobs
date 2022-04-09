import React from 'react';
import lib from '../assets/569.jpg'
import Navbar from '../components/Navbar'
export default function Home(){
    document.title="IIIT-Bhopal Library";
    return(
        <>
        <h1 className="text-blue-800 rounded-xl shadow-2xl text-3xl p-10 w-[25rem] font-alfa ml-10"> IIIT-Bhopal Library </h1>
        <div className="nav m-10 text-center">
        <Navbar />

        </div>
        <div className="hero-section flex flex-row text-center">
        <div className="book-issue-form m-16 rounded-xl shadow-2xl w-[500px]">
            <h3 className="text-black font-semibold m-10"> Issue Book here</h3>

            <div className="mb-5">
            <input type="date" 
            className="outline rounded text-blue-500 outline-dark-300 px-3 py-2 w-[80%]" 
            placeholder='dd/mm/yyyy'
            />
            </div>

            <div className="mb-5">
            <input type="text" 
            className="outline rounded text-blue-500 outline-dark-300 px-3 py-2 w-[80%]" 
            placeholder='Enter Book name'
            />
            </div>

            <div className="mb-5">
            <select className="outline rounded text-blue-500 outline-dark-300 px-3 py-2 w-[80%]" >
                <option>Select Author</option>
                <option>JK Rowling</option>
                <option>Robert Kiyoski</option>
                <option>Rabindranath Tagore</option>
            </select>
            </div>

            <div className="mb-5">
            <select className="outline rounded text-blue-500 outline-dark-300 px-3 py-2 w-[80%]" >
                <option>Select Category</option>
                <option>JK Rowling</option>
                <option>Robert Kiyoski</option>
                <option>Rabindranath Tagore</option>
            </select>
            </div>

        </div>

        <img src={lib} className="absolute rounded-xl mr-20 mt-10 right-0 w-[25rem] " />
        </div>
        </>
    )
}