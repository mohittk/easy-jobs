const express = require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    return res.json({
        "messsage":"hello from auth route"
    })
})

module.exports =  router;