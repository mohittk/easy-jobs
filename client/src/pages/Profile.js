import React from 'react';
import Dashboard from '../pages/Dashboard'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

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
          

          <div className="profile bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-20">

              <div className="profile-details text-left text-2xl ml-[38%] mr-[35%] font-semibold">
                  <h1> Name : Elon musk</h1>
                  <h1> Email Address : lol@gmail.com </h1>
                  <h1> Phone No : 1122334455</h1>
                
                  
                  </div>
              
              {/* <div className="profile flex flex-row ml-[35%] mr-[35%] ">
                <button type="dashboard" className="p-5 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded">Dashboard</button>
                {
                    (localStorage.getItem("applicant_token") || localStorage.getItem("recruiter_token")) ?
                        (localStorage.getItem("applicant_token") ?
                            
                                <button className="p-5 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded"  onClick={() => {localStorage.removeItem("applicant_token");   navigate('/')}}>Logout</button>
                             : 
                                <button className="p-5 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => {localStorage.removeItem("recruiter_token");  navigate('/')}}>Logout</button>
                            
                            // <button className={className_signup} onClick={() =>{navigate('/profile')}}>Profile</button> :
                            // <button className={className_signup} onClick={() =>{navigate('/profile')}}>Profile</button>
                            
                            )


                        :
                        navigate('/')
                        // <Link className={className_signup} to="/signup">Signup</Link>


                }
                </div> */}
       
        </div>
        </div>
        </>

    )
}