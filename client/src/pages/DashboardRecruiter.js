import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { auth_recruiter } from '../controllers/recruiter';



export default function DashboardRecruiter() {

    document.title = "Recruiter-Dashboard | Easy-Jobs";

    let [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("recruiter_token")) {
            let obj = {
                token: localStorage.getItem("recruiter_token")
            }
            auth_recruiter(obj).then(data => {
                if (data.tag) {
                    setIsRecruiterLoggedIn(true);
                    //   get_all_jobposts().then(data => {
                    //     console.log(data);
                    //     setJobs(data.message);
                    //   })
                }
                else {
                    setIsRecruiterLoggedIn(false);
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


                {(isRecruiterLoggedIn) ?
                    <div className="profile bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-20">

                        <div className="profile-details text-left text-2xl ml-[38%] mr-[35%] font-semibold">
                            <h1> Name : Elon musk | recruiter</h1>
                            <h1> Email Address : lol@gmail.com </h1>
                        </div>

                        <div className="profile flex flex-row ml-[35%] mr-[35%] ">

                            <button className="p-4 px-6 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => { localStorage.removeItem("recruiter_token"); }}>Logout</button>

                        </div>

                    </div> :
                    <div className="post-job-container text-left relative w-[38%] shadow-xl p-10 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 text-2xl bg-[#ffffff]">
                        "You are not logged in , <Link className="font-medium text-indigo-700 underline underline-offset-1" to="/login">Login</Link> as <span className="font-semibold">Recruiter</span> to continue"
                    </div>

                }


            </div>
        </>

    )
}