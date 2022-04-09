import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (

        <>
        <div className="nav">
        <Link className="m-3"  to="/" ></Link>
        <Link className="m-3"  to="/jobs">Jobs</Link>
        <Link className="m-3"  to="/login">Login</Link>
        <Link className="m-3"  to="signup">Signup</Link>
        </div>
        </>

    )
}