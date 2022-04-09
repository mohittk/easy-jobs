const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const mongoose = require("mongoose");

const dotenv = require('dotenv');
const cors=require("cors");

const applicantRoutes=require("./routes/applicantRoutes")
const recruiterRoutes=require("./routes/recruiterRoutes")


const DB = "mongodb+srv://easyjobs:easyjobsgdsc@cluster0.ndymv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("Database error");
    console.log(err);
});

require('dotenv').config();
app.use(cors());
app.use(express.json());    


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