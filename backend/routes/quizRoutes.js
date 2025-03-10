import express from 'express'
import {
    getAllQuiz,
} from '../controller/quizController.js'

const router = express.Router();

router.route('/').get(getAllQuiz);

export default router;