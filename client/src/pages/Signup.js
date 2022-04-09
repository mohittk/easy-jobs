import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { register_applicant } from "../controllers/applicant";
import { register_recruiter } from "../controllers/recruiter";


export default function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();

    // userType
    let userType = document.getElementById("userType").value;
    if (userType === "applicant") {
      let obj = {
        applicant_email: email,
        applicant_password: password,
        applicant_name: fullname
      }
      register_applicant(obj).then(data => alert(data.message));
    }
    else if (userType === "recruiter") {
      let obj = {
        recruiter_email: email,
        recruiter_password: password,
        recruiter_name: fullname
      }
      register_recruiter(obj).then(data => alert(data.message));
    }
    setEmail('');
    setFullname('');
    setPassword('');
  }

  return (
    <>
      <div className="signup-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar active="signup" />
          </div>
          <Link to="/">
            <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
              {" "}
              Easy Jobs
            </h1>
          </Link>
        </div>

        <div className="signup-form text-left p-32 bg-white m-32 rounded-lg">
          <h1 className="ml-20 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
            Signup
            <br />
            <span className="text-xl">Tell us about yourself !</span>
          </h1>
          <label className="text-xl ml-20 font-medium "> Full Name</label>
          <br />
          <input
            type="text"
            value={fullname}
            onChange={((e) => { setFullname(e.target.value) })}
            className="role shadow-2xl p-3 w-[20%] text-xl ml-20 bg-white  outline-none border-2 rounded-xl"
          />


          <div className="jobtype mt-5">
            <label className="jobtype ml-20 text-xl font-medium ">
              User Type{" "}
            </label>
            <br />
            <select id="userType" className="job-type shadow-2xl p-3 w-[20%] text-xl border-2 ml-20 bg-white outline-none rounded-xl">
              <option value="applicant">Applicant</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <div className="company mt-5">
            <label className="text-xl ml-20 font-medium">
              Email Address
            </label>
            <br />
            <input
              type="text"
              value={email}
              onChange={((e) => { setEmail(e.target.value) })}
              className="company shadow-2xl p-3 w-[20%] text-xl border-2 ml-20 bg-white outline-none rounded-xl"
            />
          </div>

          <div className="location mt-5">
            <label className="text-xl ml-20 font-medium"> Password</label>
            <br />
            <input
              type="text"
              value={password}
              onChange={((e) => { setPassword(e.target.value) })}
              className="location p-3 border-2 shadow-2xl w-[20%] text-xl mb-10 ml-20 bg-white outline-none rounded-xl"
            />
          </div>

          <button
            className="submit p-3 border-2 shadow-2xl w-[20%] text-xl hover:bg-[#c0c0c0] ml-20 bg-white outline-none rounded-xl "
            type="submit"
            onClick={handleChange}

          >
            Submit
          </button>

          <div className="already flex flex-row">
            <h3 className="ml-20 p-3 text-2xl text-indigo-600 font-medium">Already have an account?</h3>
            <button
              className="submit p-2 border-2 shadow-2xl w-[10%] text-xl hover:bg-[#c0c0c0] bg-white outline-none rounded-xl "
              type="submit"
              onClick={() => { navigate('/login') }}

            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
