const express = require("express");
const mongoose =  require("mongoose");

const feedbackSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
feedbackComment:{
type:String,
 required:true
},
feedbackRating: 
 {
 type:String,
 required:true
 }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
