import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { auth_applicant } from '../controllers/applicant';



export default function DashboardApplicant() {

    document.title = "Applicant-Dashboard | Easy-Jobs";

    let [isApplicantLoggedIn, setIsApplicantLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("applicant_token")) {
            let obj = {
                token: localStorage.getItem("applicant_token")
            }
            auth_applicant(obj).then(data => {
                if (data.tag) {
                    setIsApplicantLoggedIn(true);
                    //   get_all_jobposts().then(data => {
                    //     console.log(data);
                    //     setJobs(data.message);
                    //   })
                }
                else {
                    setIsApplicantLoggedIn(false);
                }
            })
        }


    }, []);

    return (
        <>
            

            <div className="upperbar bg-indigo-600">
                <div className="nav float-right p-[3rem] text-2xl font-encode text-white">
                    <Navbar active="dashboard" />
                </div>
                <Link to="/">
                    <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
                        {" "}
                        Easy Jobs
                    </h1>
                </Link>


                {(isApplicantLoggedIn) ?
                     <div className="profile bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-20">
                     <div className="profile-details text-left text-2xl w-[30%] rounded border-indigo-600 font-semibold border-2">
                       <h1 className="m-2 p-2"> Name : Elon musk | Applicant </h1>
                       <h1 className="m-2 p-2"> Email Address : lmao@gmail.com </h1>
                     </div>
         
                     <div className="response-section">
                       <div className="text-3xl font-semibold m-10">
                         Your Applications
                       </div>
         
                       <div className="rounded flex flex-row">
                         <div className="card p-10 w-full bg-white">
                           <div className="job-container flex flex-row m-10 shadow-2xl">
                             <div className="role w-[50%] p-3 text-2xl font-medium ">
                               backend dev
                               <div className="company text-lg p-1 bg-indigo-600 text-white rounded w-[35%] text-center">
                                 abc
                               </div>
                             </div>
                             <div className="job-type m-3 w-[50%] text-xl font-medium p-3">
                               part-time - remote - nowhere
                             </div>

                             <button className="check m-3 w-[50%] bg-indigo-600 rounded-xl text-white font-medium p-3">
                               Edit
                             </button>
         
                             <button className="check m-3 w-[50%] bg-indigo-600 rounded-xl text-white font-medium p-3">
                               Delete
                             </button>
                           </div>
                         </div>
         
                         
                       </div>
                     </div>
                        {/* <div className="profile flex flex-row ml-[35%] mr-[35%] ">

                            <button className="p-4 px-6 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => { localStorage.removeItem("applicant_token"); }}>Logout</button>
                        </div> */}

                    </div> :
                     <div className="apply-job-container text-left  dark:bg-[#2e2e2e] relative w-[38%] shadow-xl p-10 text-2xl md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
                     "You are not logged in , <Link className="font-medium text-indigo-700 underline underline-offset-1" to="/login">Login</Link> as <span className="font-semibold">Applicant</span> to continue"
                   </div>

                }


            </div>
        </>

    )
}