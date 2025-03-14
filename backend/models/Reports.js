
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportsSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    gender: {
        type: String,        
    },
    education: {
        type: String
    },
    employmentDetails: {
        type: String
    },
    score: {
        type: Number,
        required: true
    },

    type: {
        type: Array,
        required: true
    },
    percentage: {
        type: Array,
        required: true
    },
    isAdmin: {
        type: String
    }

})

const Reports = mongoose.model("Reports", reportsSchema);
export default Reports;