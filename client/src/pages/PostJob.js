import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { auth_recruiter, create_jobpost } from "../controllers/recruiter";


export default function PostJob() {

  let [isLoggedIn,setIsLoggedIn]=useState(false);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [jobMode, setJobMode] = useState("");
  const [jobType, setJobType] = useState("");
  const [duration, setDuration] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("recruiter_token")){
      let obj={
        token:localStorage.getItem("recruiter_token")
      }
      auth_recruiter(obj).then(data=>{
        if(data.tag){
          isLoggedIn(true);
        }
        else{
          isLoggedIn(false);
        }
      })
    }
  })

  // jobpost_recruiter_id
  // jobpost_type (part-time/full-time /internship) - done
  // jobpost_mode (work form home / in-office) - done
  // jobpost_location - done
  // jobpost_company_name - done
  // jobpost_duration -done
  // jobpost_role (ex: backend dev , business developer) -done
  // jobpost_pay (salary kitna loge) - done
  // jobpost_job_description - 
  // jobpost_experience (entry level , mid-senior level , etc )

  const handleChange = async (e) => {
    e.preventDefault();
    let recruiter_id = JSON.parse(atob(localStorage.getItem("applicant_token").split(".")[1])).id;
    let obj = {
      jobpost_recruiter_id: recruiter_id,
      jobpost_type: jobType,
      jobpost_mode: jobMode,
      jobpost_location: location,
      jobpost_company_name: company,
      jobpost_duration: duration,
      jobpost_role: role,
      jobpost_pay: salary,
      jobpost_job_description: description,
      jobpost_experience: experience
    }

    create_jobpost(obj).then(data => {
      alert(data.message);
      window.location.reload();
    })

  }


  return (<>
      <div className="upperbar bg-indigo-600">
        <div className="nav float-right p-[3rem] text-2xl font-encode text-white">
          <Navbar active="post_a_job" />
        </div>
        <Link to="/">
          <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
            {" "}
            Easy Jobs
          </h1>
        </Link>
      </div>
   {isLoggedIn? <>

      <div className="post-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
        <div className="title ">
          <h1 className="m-10 text-3xl font-semibold text-indigo-600">
            {" "}
            Job posting Form{" "}
          </h1>
        </div>
        <div className="role">
          <label className="text-xl ml-10 font-medium ">Enter the role </label>
          <br />
          <input
            type="text"
            value={role}
            onChange={((e) => { setRole(e.target.value); })}
            className="role shadow-2xl p-3  text-xl ml-10 w-[85%] bg-white outline-none border-2 rounded-xl"
          />
        </div>

        <div className="company mt-5">
          <label className="text-xl ml-10 font-medium">
            Enter Your company name
          </label>
          <br />
          <input value={company}
            type="text"
            onChange={((e) => { setCompany(e.target.value) })}
            className="company shadow-2xl p-3  ml-10 w-[85%] text-xl border-2 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="jobtype mt-5">
          <label className="jobtype ml-10 text-xl font-medium ">
            Select job type{" "}
          </label>
          <br />
          <select value={jobType} onChange={((e) => { setJobType(e.target.value) })} className="job-type shadow-2xl p-3 text-xl border-2  ml-10 w-[85%] bg-white outline-none rounded-xl">
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div className="jobmode mt-5">
          <label className="jobtype ml-10 text-xl font-medium ">
            Select mode of work
          </label>
          <br />
          <select value={jobMode} onChange={((e) => { setJobMode(e.target.value) })} className="job-type shadow-2xl p-3 text-xl border-2  ml-10 w-[85%] bg-white outline-none rounded-xl">
            <option value="Work From Home">Work From Home</option>
            <option value="In-office">In-office</option>
          </select>
        </div>

        <div className="location mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Location</label>
          <div className="text-md ml-10">(leave blank if work from home)</div>
          <br /><input
            type="text"
            value={location}
            onChange={((e) => { setLocation(e.target.value) })}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="duration mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Job Duration</label>
          <div className="text-md ml-10">(fill only for internships)</div>
          <br /><input
            type="text"
            value={duration}
            onChange={((e) => { setDuration(e.target.value) })}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="salary mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Salary/Stipend</label>
          <br /><input
            type="text"
            value={salary}
            onChange={((e) => { setSalary(e.target.value) })}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
          />
        </div>

        <div className="description mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Job Description</label>
          <br /><textarea
            type="text"
            value={description}
            onChange={((e) => { setDescription(e.target.value) })}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
            style={{ height: "150px" }}
          ></textarea>
        </div>

        <div className="experience mt-5">
          <label className="text-xl ml-10 font-medium"> Enter Experience required</label>
          <br /><input
            type="text"
            value={experience}
            onChange={((e) => { setExperience(e.target.value) })}
            className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
          />
        </div>

        <button
          className="submit mb-5 p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 bg-white outline-none rounded-xl "
          type="submit"
          onClick={handleChange}
        >
          Submit
        </button>
      </div>
    </>
    :
    <div className="post-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
    "You are not logged in , <Link className="font-medium text-indigo-700 underline underline-offset-1" to="/login">Login</Link> to continue"
    </div>
    }
    </>
  );
}
