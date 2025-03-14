// import Question from '../models/QuestionTest.js';
import Question from '../models/Questions.js';
import asyncHandler from '../middleware/asyncHandler.js'

export const getAllQuiz = asyncHandler(async (req, res) => {

  try {
    const quiz = await Question.find();
    const typeNum = await Question.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
        }
      }
    ]);

    res.status(200).json({ data: quiz, typeNum: typeNum });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});