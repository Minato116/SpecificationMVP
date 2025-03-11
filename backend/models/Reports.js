
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportsShema = new Schema({     
    answers:{
        question:{type:String},
        yourAnswer:{type:String},
        correctAnswer:{type:String},
    },
    type:{type:String}        
})

const Reports = mongoose.model("Reports", reportsShema);
export default Reports;