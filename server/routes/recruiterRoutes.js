const express = require("express");
const router=express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const Recruiter = require("../models/Recruiter");


router.post("/signup", async (req, res) => {

    let { recruiter_email,
        recruiter_password,
        recruiter_name,recruiter_company } = req.body;

    const result = await Recruiter.findOne({ recruiter_email });

    if (result) {
        return res.json({ "message": "recruiter already exists", "tag": false })
    }
    else {
        var hash = bcrypt.hashSync(recruiter_password, 8);
        recruiter_password = hash;
        const recruiter = new Recruiter({
            recruiter_email,
            recruiter_password,
            recruiter_name,
            recruiter_company
        })
        recruiter.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "recruiter SignUp Success", tag: true })
        })
    }

})

router.post("/login", async (req, res) => {

    const obj = req.body;
    const result = await Recruiter.findOne({ recruiter_email: obj.recruiter_email });
    if (result) {
        bcrypt.compare(req.body.recruiter_password, result.recruiter_password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, 'easy_jobs_proj');
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }

})


module.exports =  router;