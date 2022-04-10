import React from 'react';
import Dashboard from '../pages/Dashboard'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Profile({active}){

    const navigate = useNavigate();

    let className_jobs = "m-3 p-2 rounded";
    let className_post_a_job = "m-3 p-2 rounded";
    let className_signup = "m-3 p-2 rounded";

    if (active === "jobs") {
        className_jobs += " text-blue-300";
    }
    else if (active === "post_a_job") {
        className_post_a_job += " text-blue-300";
    }
    else if (active === "signup") {
        className_signup += " text-blue-300";
    }

    return (
        <>
        <div className="profile p-10 bg-red-700">
            <div className="btn">
                <button type="dashboard" onClick={navigate('/dashboard')} className="">Dashboard</button>
                {
                    (localStorage.getItem("applicant_token") || localStorage.getItem("recruiter_token")) ?
                        (localStorage.getItem("applicant_token") ?
                            
                                <button className={className_signup} onClick={() => {localStorage.removeItem("applicant_token"); window.location.reload();}}>Logout</button>
                             : 
                                <button className={className_signup} onClick={() => {localStorage.removeItem("recruiter_token");  window.location.reload();}}>Logout</button>
                            
                            // <button className={className_signup} onClick={() =>{navigate('/profile')}}>Profile</button> :
                            // <button className={className_signup} onClick={() =>{navigate('/profile')}}>Profile</button>
                            
                            )


                        :
                        <Link className={className_signup} to="/signup">Signup</Link>


                }
                
            </div>
        </div>
        </>

    )
}