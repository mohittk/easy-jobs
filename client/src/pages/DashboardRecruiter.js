import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth_recruiter } from "../controllers/recruiter";
import { get_all_jobposts } from "../controllers/recruiter";
import JobContainer from "../components/JobContainer";

export default function DashboardRecruiter() {
  document.title = "Recruiter-Dashboard | Easy-Jobs";

  let [isRecruiterLoggedIn, setIsRecruiterLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("recruiter_token")) {
      let obj = {
        token: localStorage.getItem("recruiter_token"),
      };
      auth_recruiter(obj).then((data) => {
        if (data.tag) {
          setIsRecruiterLoggedIn(true);
          //   get_all_jobposts().then(data => {
          //     console.log(data);
          //     setJobs(data.message);
          //   })
        } else {
          setIsRecruiterLoggedIn(false);
        }
      });
    }
  });

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

        {isRecruiterLoggedIn ? (
          <div className="profile bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-20">
            <div className="profile-details text-left text-2xl w-[25%] rounded border-indigo-600 font-semibold border-2">
              <h1 className="m-2 p-2"> Name : Elon musk | recruiter</h1>
              <h1 className="m-2 p-2"> Email Address : lol@gmail.com </h1>
            </div>

            <div className="response-section">
              <div className="text-3xl font-semibold m-10">
                Jobs Posted By You
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
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 
                        <div className="profile flex flex-row ml-[35%] mr-[35%] ">

                            <button className="p-4 px-6 m-10 text-2xl font-semibold bg-indigo-600 text-white rounded" onClick={() => { localStorage.removeItem("recruiter_token"); }}>Logout</button>

                        </div> */}
          </div>
        ) : (
          <div className="post-job-container text-left relative w-[38%] shadow-xl p-10 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 text-2xl bg-[#ffffff]">
            "You are not logged in ,{" "}
            <Link
              className="font-medium text-indigo-700 underline underline-offset-1"
              to="/login"
            >
              Login
            </Link>{" "}
            as <span className="font-semibold">Recruiter</span> to continue"
          </div>
        )}
      </div>
    </>
  );
}
