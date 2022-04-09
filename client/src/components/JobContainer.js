import React from 'react';


export default function JobContainer(props){
    return(
        <>
        <div className="job-container flex flex-row m-10 shadow-2xl">
            <div className="role w-[50%] p-3 text-2xl font-medium ">{props.role}
            <div className="company text-lg p-1 bg-indigo-600 text-white rounded w-[35%] text-center">
                {props.company}</div>
                </div>
            <div className="job-location m-3 w-[50%] text-xl font-medium p-3">
                {props.location}
            </div>
            <div className="job-type m-3 w-[50%] text-xl font-medium p-3">
                {props.jobtype}
            </div>
            <button className="check m-3 w-[50%] bg-indigo-600 rounded-xl text-white font-medium p-3">
                Check
            </button>
        </div>
        </>


    )

}