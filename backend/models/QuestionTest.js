
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionTestShema = new Schema({
    id:{type:Number},
    question:{type:String},
    content:{type:Array},
    answer:{type:String},
    type:{type:String},
    reason:{type:String},
    question_type:{type:Number},
    question_image:{type:String},
})

const QuestionTest = mongoose.model("QuestionTest", questionTestShema);
export default QuestionTest;