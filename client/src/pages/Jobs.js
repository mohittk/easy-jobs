import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobContainer from "../components/JobContainer";
import { Link } from 'react-router-dom';
import { get_all_jobposts } from "../controllers/recruiter";
import { auth_applicant } from "../controllers/applicant";


export default function Jobs() {

  document.title="Jobs | Easy-Jobs";

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("applicant_token")) {
      let obj = {
        token: localStorage.getItem("applicant_token")
      }
      auth_applicant(obj).then(data => {
        if (data.tag) {
          setIsLoggedIn(true);
          get_all_jobposts().then(data => {
            console.log(data);
            setJobs(data.message);
          })
        }
        else {
          setIsLoggedIn(false);
        }
      })
    }

  }, []);

  const jobSearch = () => {

  }

  return (<>
    <div className="upperbar bg-indigo-600">
      <div className="nav float-right p-[3rem] text-2xl  font-encode text-white">
        <Navbar active="jobs" />
      </div>
      <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
          {" "}
          Easy Jobs
        </h1>
      </Link>
    </div>
    {isLoggedIn ? <>
      <div className="find-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
        <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
          Find Jobs
        </h2>

        <div className="flex flex-row">
          <select className="p-3 w-[50%] text-xl m-5 bg-[#e0e0e0] outline-none rounded-xl ">
            <option value="full-time">Full-Time</option>
            <option selected value="part-time">
              Part-Time
            </option>
          </select>

          <select className="p-3 w-[50%] text-xl m-5 bg-[#e0e0e0] outline-none rounded-xl ">
            <option value="grapefruit">Remote</option>
            <option selected value="coconut">
              In-office
            </option>
          </select>

          <button className="p-3 w-[50%] text-white text-xl m-5 rounded-xl bg-indigo-600" onClick={jobSearch}>
            Search
          </button>
        </div>



      </div>


      <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
        <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
          {"3"} Results Found
        </h2>
        {
          jobs ? jobs.map(job =>
            <JobContainer
              id={job._id}
              type={job.jobpost_type}
              mode={job.jobpost_mode}
              location={job.jobpost_location}
              company_name={job.jobpost_company_name}
              duration={job.jobpost_duration}
              role={job.jobpost_role}
              pay={job.jobpost_pay}
              job_description={job.jobpost_job_description}
              experience={job.jobpost_experience}
            />)

            : "No jobs openings"
        }


      </div>
    </> :
      <>
        <div className="apply-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
          "You are not logged in , <Link className="font-medium text-indigo-700 underline underline-offset-1" to="/login">Login</Link> as Applicant to continue"
        </div>
      </>
    }
  </>
  );
}
