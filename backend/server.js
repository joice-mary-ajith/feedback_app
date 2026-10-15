const express = require("express");
const mongoose =  require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{ res.send("server is ruunning");});
app.get("/feedback", (req,res) =>{ res.send("Feedback server is ruunning");});
app.get("/course", (req,res) =>{ res.send("Course server is ruunning");});


app.listen(5000,() => { console.log("Server is running on port 5000")});