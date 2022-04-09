import React from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'
import { useState } from "react"
import { login_applicant } from "../controllers/applicant";
import { login_recruiter } from "../controllers/recruiter";


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = async (e) => {
    e.preventDefault();
    let login_userType = document.getElementById("login_userType").value;
    if (login_userType === 'applicant') {
      let obj = {
        applicant_email: email,
        applicant_password: password
      }
      login_applicant(obj).then((data) => {
        if (data.tag === true) {
          localStorage.setItem("applicant_token", data.token);
        }
        console.log(data.message);
      })
    }
    else if (login_userType === "recruiter") {
      let obj = {
        recruiter_email: email,
        recruiter_password: password
      }
      login_recruiter(obj).then((data) => {
        if (data.tag === true) {
          localStorage.setItem("recruiter_token", data.token);
        }
        console.log(data.message);
      })
    }

    setEmail('');
    setPassword('');
  }
  

  



  return (
  <>
      <div className="signup-page">

        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3rem] text-2xl  font-encode text-white">
            <Navbar active="post_a_job" />
          </div>
          <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
          {" "}
          Easy Jobs
        </h1>
        </Link>
        </div>

        <div>

          {" "}
          Login
          <br />
          <span className="text-xl">Welcome Back !</span>

          
          <input
            type="text"
            value={email}

          />
        </div>


        <div className="location mt-5">
          <label className="text-xl ml-20 font-medium">  Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={((e) => setPassword(e.target.value))}
            className="location p-3 border-2 shadow-2xl w-[20%] text-xl  ml-20 bg-white outline-none rounded-xl"
          />
        </div>
      </div>
    </>

  );
}
