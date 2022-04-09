import React from 'react';

import Navbar from '../components/Navbar'
export default function Home(){
    return(
        <>
        <h1 className="text-blue-800 rounded-xl shadow-2xl text-3xl font-bold p-10 w-[23rem] ml-10"> IIIT-Bhopal Library </h1>
        <div className="nav m-10 text-center">
        <Navbar />

        </div>
        
        
        </>
    )
}