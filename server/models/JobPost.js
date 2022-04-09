const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const JobPost = new Schema({
    jobPost_applicant_id:String,
    JobPost_jobpost_id:String
});


module.exports = mongoose.model('JobPosts', JobPost); 