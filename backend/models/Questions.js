
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id:{type:Number},
    question:{type:String},
    content:{type:Array},
    answer:{type:String},
    type:{type:String},
    reason:{type:String},
    question_type:{type:Number},
    question_image:{type:String},
})

const Question = mongoose.model("Question", questionSchema);
export default Question;