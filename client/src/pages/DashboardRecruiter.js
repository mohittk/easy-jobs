import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { auth_recruiter, get_recruiter_details_by_id } from '../controllers/recruiter';



export default function DashboardRecruiter() {

    document.title = "Recruiter-Dashboard | Easy-Jobs";

    let [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")

    useEffect(() => {
        if (localStorage.getItem("recruiter_token")) {
            let obj = {
                token: localStorage.getItem("recruiter_token")
            }
            auth_recruiter(obj).then(data => {
                if (data.tag) {
                    setIsRecruiterLoggedIn(true);
let obj={id:JSON.parse(atob(localStorage.getItem("recruiter_token").split(".")[1])).id}
                    get_recruiter_details_by_id(obj).then(data => {
                        setName(data.message.recruiter_name)
                        setEmail(data.message.recruiter_email)
                    })
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
                            <h1> Name : {name}</h1>
                            <h1> Email Address : {email} </h1>
                        </div>

                        <div className="profile flex flex-row ml-[35%] mr-[35%] ">

                            <button className="p-4 px-6 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => { localStorage.removeItem("recruiter_token"); window.location.reload() }}>Logout</button>

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