import React, { useState } from 'react';


export default function JobContainer(props){
    const [isOpen,setIsOpen]=useState(false);

    
  
    return(
        <>
        {
            isOpen &&  <>
            <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex drop-shadow-2xl backdrop-blur-[3px]">
            <div className="relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg">
                <div className='flex items-center justify-between'>
                    <div className="other-data flex flex-col text-2xl">
                        Role : {props.role}<br />
                        Company Name : {props.company} <br />
                        Location : {props.location} <br />
                        Job Type : {props.jobtype} <br />
                    </div>
                <div className="flex flex-col text-xl">
                
                <button 
                className="bg-indigo-600 m-2 rounded-xl text-white font-medium p-3"
                onClick={()=>setIsOpen(false)}
                >
                    Close
                </button>
                <button 
                className="bg-indigo-600 m-2 rounded-xl text-white font-medium p-3"
                onClick={()=>setIsOpen(false)}
                >
                    Apply
                </button>
                </div>
                
                </div>
               
                </div>
            
            
            </div>
            </>
        }
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
            <button 
            className="check m-3 w-[50%] bg-indigo-600 rounded-xl text-white font-medium p-3"
            onClick={()=>setIsOpen(true)}
            >
                Check
            </button>
        </div>
        </>


    )

}

