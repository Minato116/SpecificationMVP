
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportsSchema = new Schema({    
     fullName:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    employmentDetails:{
        type:String,
        required:true
    },
    answers:{
        question:{type:String},
        yourAnswer:{type:String},
        correctAnswer:{type:String},
    },
    type:{type:String}        
})

const Reports = mongoose.model("Reports", reportsSchema);
export default Reports;