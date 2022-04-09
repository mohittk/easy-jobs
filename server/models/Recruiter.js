const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Recruiter = new Schema({
    recruiter_email:String,
    recruiter_password:String,
    recruiter_name:String,
    recruiter_company:String,
});


module.exports = mongoose.model('Recruiters', Recruiter); 