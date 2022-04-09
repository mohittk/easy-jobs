const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const Applicant = require("../models/Applicant");


router.post("/signup", async (req, res) => {

    let { applicant_email,
        applicant_password,
        applicant_name } = req.body;

    const result = await Applicant.findOne({ applicant_email });

    if (result) {
        return res.json({ "message": "Applicant already exists", "tag": false })
    }
    else {
        var hash = bcrypt.hashSync(applicant_password, 8);
        applicant_password = hash;
        const applicant = new Applicant({
            applicant_email,
            applicant_password,
            applicant_name
        })
        applicant.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "Applicant SignUp Success", tag: true })
        })
    }

})

router.post("/login", async (req, res) => {

    const obj = req.body;
    const result = await Applicant.findOne({ applicant_email: obj.applicant_email });
    if (result) {
        bcrypt.compare(req.body.applicant_password, result.applicant_password, function (err, hashed) {
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

module.exports = router;