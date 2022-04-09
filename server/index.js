const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors=require("cors");
const authRoutes=require("./routes/authRoutes")
const applicantRoutes=require("./routes/applicantRoutes")
const recruiterRoutes=require("./routes/recruiterRoutes")


app.use(cors());
app.use(express.json());    

app.use("/api/auth",authRoutes);
app.use("/api/applicant",applicantRoutes);
app.use("/api/recruiter",recruiterRoutes);

app.get("/",(req,res)=>{
    res.json({
        "message":"hello world"
    })
})

app.listen(port, () => {
    console.log("The server is up and running at port 5000");
})