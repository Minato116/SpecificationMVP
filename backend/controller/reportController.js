import asyncHandler from "../middleware/asyncHandler.js";
import Reports from "../models/Reports.js";

export const createReportData = asyncHandler(async (req, res) => {
    const { type, answers } = req.body; // Expecting type and answers array

    if (!type || !Array.isArray(answers) || answers.length === 0) {
        return res.status(400).json({ message: "❌ Missing or invalid required fields" });
    }

    const newReport = new Reports({
        type,
        answers,
    });

    await newReport.save();
    res.status(201).json({ message: "✅ Report saved successfully!", report: newReport });
});
