import React from 'react';
import {Link} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


export default function Navbar(){
    return(
        <>
        <Link className="home p-4 ml-20 mt-7 w-[50rem] bg-yellow-700 rounded-xl text-yellow-400 font-bold " to="/">Home</Link>
        <Link className="about  p-4 ml-20 mt-7 w-[50rem] bg-yellow-700 rounded-xl text-yellow-400 font-bold" to="/about">About</Link>
        <Link className="login  p-4 ml-20 mt-7 w-[50rem] bg-yellow-700 rounded-xl text-yellow-400 font-bold" to="/login">Login</Link>
        <Link className="signup  p-4 ml-20 mt-7 w-[50rem] bg-yellow-700 rounded-xl text-yellow-400 font-bold" to="/signup">Signup</Link>
        </>
    )
}