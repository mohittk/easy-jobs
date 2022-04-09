const base = "http://localhost:5000";

export const register_recruiter = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/signup`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const login_recruiter = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const apply_jobpost = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/jobpost`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const get_jobposts = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/jobpost`, {
        method: "GET",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const edit_jobpost = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/jobpost`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

export const delete_jobpost = async (obj) => {
    const res = await fetch(`${base}/api/recruiter/jobpost`, {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const ans = await res.json();
    return ans;
}

