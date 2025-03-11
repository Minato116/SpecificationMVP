import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';
// import { Pie } from 'react-chartjs-2';
import AnswerModal from './AnswerModal';
import CircularWithValueLabel from './CircleChart';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Report = ({ score, totalQuestions, onRestart, categorizedResults, questions, clickAnswer, typeNum }) => {
  const [showModal, setShowModal] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);
  let resultMessage;
  if (percentage >= 90) {
    resultMessage = "Excellent! You've mastered these concepts.";
  } else if (percentage >= 70) {
    resultMessage = "Good job! You have a solid understanding.";
  } else if (percentage >= 50) {
    resultMessage = "You passed! But there's room for improvement.";
  } else {
    resultMessage = "You might want to review the material and try again.";
  }

  // Generate category-specific results
  const categoryResults = categorizedResults
    ? Object.entries(categorizedResults).map(([type, correct], index) => {
      let typeResult;
      typeNum.forEach((val, ind) => {
        if (type === val._id) {
          typeResult = Math.floor((Number(correct) / Number(val.count) * 100));
        }
      });

      let typeResultMessage = "";
      if (typeResult >= 90) {
        typeResultMessage = "Top";
      } else if (typeResult >= 75) {
        typeResultMessage = "High";
      } else if (typeResult >= 50) {
        typeResultMessage = "Medium";
      } else if (typeResult >= 30) {
        typeResultMessage = "Low";
      } else {
        typeResultMessage = "Poor";
      }

      return (
        <li key={type} className="list-group-item d-flex justify-content-between align-items-center">
          {type}
          <div className="badge bg-primary rounded-mx w-10">
            <span>{typeResult}%</span>
            <span className='mx-3'>{typeResultMessage}</span>
          </div>
        </li>
      );
    })
    : [];

  // Create an object to store the detailed answers by category
  const categorizedAnswers = questions.reduce((acc, question, index) => {
    const type = question.type;
    const selectedOption = categorizedResults[type] && categorizedResults[type] > 0 ? question.content.find(option => option === question.answer) : 'N/A';

    if (!acc[type]) acc[type] = [];
    acc[type].push({ index, selectedOption });
    return acc;
  }, {});


    const handlePrint =  () => {
       window.scrollTo({top:0, behavior: 'smooth'});
       window.print(); // This triggers the browser's print function
    };
  
  return (
    <div className="print:hidden card text-center my-5">
      <div className="card-header bg-primary text-white mb-5">
        <h3 className="mb-0 p-2">Quiz Results</h3>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <CircularWithValueLabel score={percentage} />
          <p className="lead">You scored {score} out of {totalQuestions}</p>
        </div>
        <div className="card-text mb-4">{resultMessage}</div>

        {/* Category Results */}
        {categoryResults.length > 0 && (
          <div className="mt-4">
            <h5 className="mb-3">Performance by Category:</h5>
            <ul className="list-group">
              {categoryResults}
            </ul>
          </div>
        )}
        <button className="btn btn-primary btn-lg mt-4" onClick={() => setShowModal(true)}>
          Save Report
        </button>
        <button className="btn btn-primary btn-lg mt-4 ms-3" onClick={onRestart}>
          Take Quiz Again
        </button>
        <button className=" btn btn-primary btn-lg mt-4 ms-3" onClick={handlePrint}>
          Print
        </button>
      </div>

      <AnswerModal
        show={showModal}
        onClose={() => setShowModal(false)}
        questions={questions}
        categorizedAnswers={categorizedAnswers}
        clickAnswer={clickAnswer}
      />
    </div>
  );
};

export default Report;
