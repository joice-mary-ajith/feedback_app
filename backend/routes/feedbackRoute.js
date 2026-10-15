const express = require("express");
const Router = express.Router();

Router.post("/feedback", async (req,res) => {
    const {courseName, feedbackComment, feedbackRating} = req.body;
    try{ await Feedback.create({
        courseName,
        feedbackComment,
        feedbackRating
    });
    res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error submitting feedback" });
    }
});

Router.get("/feedback", async (req,res) => {
    const {courseName, feedbackComment, feedbackRating} = req.body;
    try{ await Feedback.create({
        courseName,
        feedbackComment,
        feedbackRating
    });
    res.status(201).json({ message: "All Feedbacks loaded successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error loading feedback" });
    }
});

Router.put("/feedback", async (req,res) => {
    const {courseName, feedbackComment, feedbackRating} = req.body;
    try{ await Feedback.create({
        courseName,
        
        feedbackComment,
        feedbackRating
    });
    res.status(201).json({ message: "Feedback updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating feedback" });
    }
});

Router.delete("/feedback", async (req,res) => {
    const {courseName, feedbackComment, feedbackRating} = req.body;
    try{ await Feedback.create({  
          courseName,
        feedbackComment,
        feedbackRating
    });
    res.status(201).json({ message: "Feedback deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting feedback" });
    }
});      


