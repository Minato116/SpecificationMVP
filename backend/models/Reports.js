
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportsSchema = new Schema({  
    type:{type:String},   
    answers:{
        question:{type:String},
        yourAnswer:{type:String},
        correctAnswer:{type:String},
    },
       
})

const Reports = mongoose.model("Reports", reportsSchema);
export default Reports;