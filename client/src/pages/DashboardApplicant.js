import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { auth_applicant, get_applicant_details_by_id } from '../controllers/applicant';



export default function DashboardApplicant() {

    document.title = "Applicant-Dashboard | Easy-Jobs";

    let [isApplicantLoggedIn, setIsApplicantLoggedIn] = useState(false);
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [description, setDescription] = useState("")
    let [experience, setExperience] = useState("")

    useEffect(() => {
        if (localStorage.getItem("applicant_token")) {
            let obj = {
                token: localStorage.getItem("applicant_token")
            }
            auth_applicant(obj).then(data => {
                if (data.tag) {
                    setIsApplicantLoggedIn(true);
                    let obj = { id: JSON.parse(atob(localStorage.getItem("applicant_token").split(".")[1])).id }
                    get_applicant_details_by_id(obj).then(data => {
                        console.log(data.message);
                        setName(data.message.applicant_name);
                        setEmail(data.message.applicant_email);
                        setDescription(data.message.applicant_description);
                        setExperience(data.message.applicant_experience);
                    })
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

                        <div className="profile-details text-left text-2xl ml-[38%] mr-[35%] font-semibold">
                            <h1> Name : {name}</h1>
                            <h1> Email Address : {email} </h1>
                            <h1> Description : {description} </h1>
                            <h1> Experience : {experience} </h1>
                        </div>

                        <div className="profile flex flex-row ml-[35%] mr-[35%] ">

                            <button className="p-4 px-6 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => { localStorage.removeItem("applicant_token"); window.location.reload(); }}>Logout</button>



                        </div>

                    </div> :
                    <div className="apply-job-container text-left  dark:bg-[#2e2e2e] relative w-[38%] shadow-xl p-10 text-2xl md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
                        "You are not logged in , <Link className="font-medium text-indigo-700 underline underline-offset-1" to="/login">Login</Link> as <span className="font-semibold">Applicant</span> to continue"
                    </div>

                }


            </div>
        </>

    )
}