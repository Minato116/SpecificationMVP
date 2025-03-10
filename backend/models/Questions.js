
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionShema = new Schema({
    id:{type:Number},
    question:{type:String},
    content:{type:JSON},
    answer:{type:String},
    type:{type:String},
    reason:{type:String},
    question_type:{type:Number},
})

const Question = mongoose.model("Question", questionSchema);
export default Question;