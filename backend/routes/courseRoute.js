const express = require("express");
const Router = express.Router();

Router.post("/course", async (req,res) => {
    const {courseId, courseName, courseDuration, overallFeedback} = req.body;
    try{ await Course.create({
        courseId,
        courseName,
        courseDuration,
        overallFeedback
    });
    res.status(201).json({ message: "Course submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error submitting course" });
    }
});

Router.get("/course", async (req,res) => {
    const {courseId, courseName, courseDuration, overallFeedback} = req.body;
    try{ await Course.create({
        courseId,
        courseName,
        courseDuration,
        overallFeedback
    });
    res.status(201).json({ message: "All courses loaded successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error loading courses" });
    }
});

Router.put("/course", async (req,res) => {
    const {courseId, courseName, courseDuration, overallFeedback} = req.body;
    try{ await Course.create({
        courseId,
        courseName,
        courseDuration,
        overallFeedback
    });
    res.status(201).json({ message: "course updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating course" });
    }
});

Router.delete("/course", async (req,res) => {
    const {courseId, courseName, courseDuration, overallFeedback} = req.body;
    try{ await Course.create({  
          courseId,
          courseName,
          courseDuration,
          overallFeedback
    });
    res.status(201).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting course" });
    }
});      




