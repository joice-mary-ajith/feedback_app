
const mongoose =  require("mongoose");
const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
courseName:{
type:String,
 required:true
},
courseDuration: 
 {
 type:String,
 required:true
},
overallFeedback:{
    type:String,
 required:true
}
});
module.exports = mongoose.model("Course", courseSchema);