const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
app.get("/",(req,res)=>{
    res.send("Hi,i am root");
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});
