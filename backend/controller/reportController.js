import asyncHandler from "../middleware/asyncHandler.js";
import Reports from "../models/Reports.js";

export const createReportData = asyncHandler(async (req, res) => {
    const { data } = req.body; // Expecting type and answers array  
    const { type } = data;
if (!type ){
        return res.status(400).json({ message: "❌ Missing or invalid required fields" });
    }

    try{
        const newReport = new Reports({
            fullName: `${data.firstName || ""} ${data.middleName || ""} ${data.lastName || ""}`.trim(),
            emailAddress: data.emailAddress,
            gender: data.gender,
            education: data.education,
            employmentDetails : data.employmentDetails,
            score:Math.floor((data.score/data.totalQuestions)*100),
            type:data.type,
            percentage:data.percentage,
            isAdmin:data.isAdmin,
        });

        await newReport.save();
        res.status(201).json({ message: "✅ Report saved successfully!", report: newReport });
    }catch(error){
        console.log(error);
        res.status(500).json({message: "❌ Internal server error!" });
    }
});
