import Question from '../models/QuestionTest.js';
// import Question from '../models/Questions.js';
import asyncHandler from '../middleware/asyncHandler.js'

export const getAllQuiz = asyncHandler(async (req, res) => {

  try {
    const questions = await Question.find();
    const typeNum = await Question.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
        }
      }
    ]);

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found." });
    }

    res.json({ data: questions, typeNum: typeNum }); // ✅ Ensure response is JSON
  } catch (error) {
    res.status(500).json({ message: "Server error" }); // ✅ Proper error response
  }
});