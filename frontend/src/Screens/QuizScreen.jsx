import React, { useState, useEffect } from 'react';
import Report from '../components/Report';
// import { getQuestions, submitQuiz } from '../services/api';
import Question from '../components/Question';
// import questionnaire from '../questionnaire';
import WaveEffect from '../components/WaveEffect';

const QuizScreen = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [results, setResults] = useState(null);

    const getQuestions = async () => {
        const res = await fetch('/api/quiz');
        if(res.ok){
            const data = await res.json();
            // console.log(data);    
            return data.data;             
        }
        else return [];       
    }

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            setIsLoading(true);
            const data = await getQuestions();
            console.log(data[0]);
            setQuestions(data);
            setIsLoading(false);
          } catch (err) {
            setError('Failed to load questions. Please try again later.');
            setIsLoading(false);
          }
        };

        fetchQuestions();
        // setQuestions(questionnaire);
        setIsLoading(false);
    }, []);
    // console.log("question, option", selectedOptions)
    const handleSelectOption = (option) => {
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestionIndex]: option
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleQuizSubmit();
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleQuizSubmit = async () => {
        try {
            const answers = Object.keys(selectedOptions).map(index => ({
                questionId: questions[index]._id,
                selectedOption: selectedOptions[index]
            }));

            // const result = await submitQuiz({ answers });
            // setResults(result);
            // setQuizCompleted(true);
        } catch (err) {
            setError('Failed to submit quiz. Please try again.');
        }
        let score = 0;
        let categorizedResults = {};

        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                score += 1;
                categorizedResults[question.type] = (categorizedResults[question.type] || 0) + 1;
            } else {
                categorizedResults[question.type] = (categorizedResults[question.type] || 0);
            }
        });

        setResults({
            score,
            totalQuestions: questions.length,
            categorizedResults
        });
        setQuizCompleted(true);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOptions({});
        setQuizCompleted(false);
        setResults(null);
    };

    if (isLoading) {
        return <div className="text-center my-5">Loading questions...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (quizCompleted && results) {
        return <Report score={results.score} questions={questions} totalQuestions={results.totalQuestions} onRestart={restartQuiz} categorizedResults={results.categorizedResults} />;
    }

    const progress = ((currentQuestionIndex+1) / questions.length) * 100;
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = selectedOptions[currentQuestionIndex];

    return (
        <>
            {
                currentQuestion && (
                    <WaveEffect title={currentQuestion.type} content={`Question ${currentQuestion.id} :  ${currentQuestion.question}`} />
                )
            }
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="quiz-container">
                            <div className="mb-4">
                                {/* <h4 className="mb-2">Online Assessment</h4> */}
                                <div className="progress" style={{ height: "35px" }} data-aos="zoom-out" data-aos-delay="100">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated fs-4 fw-semibold" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">                                        
                                    </div>                                    
                                </div>
                                <div className='!important absolute !important top-[-20px] text-center text-black'>{`${Math.round(progress)}%`}</div>
                                <div className=" text-muted mt-2" data-aos="zoom-in" data-aos-delay="200">
                                    Question {currentQuestionIndex + 1} of {questions.length}
                                </div>
                            </div>

                            {currentQuestion && (
                                <Question
                                    question={currentQuestion}
                                    selectedOption={selectedOption}
                                    onSelectOption={handleSelectOption}
                                />
                            )}

                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    className="btn btn-outline-dark py-2 fs-4"
                                    onClick={handlePrevQuestion}
                                    disabled={currentQuestionIndex === 0}
                                    data-aos="fade-left" data-aos-delay="400"
                                >
                                    Previous
                                </button>

                                <button
                                    className="btn btn-primary py-2 fs-4 px-5"
                                    onClick={handleNextQuestion}
                                    disabled={!selectedOption}
                                    data-aos="fade-right" data-aos-delay="400"
                                >
                                    {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit Quiz'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizScreen;
