import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import AnswerModal from './AnswerModal';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Report = ({ score, totalQuestions, onRestart, categorizedResults, questions }) => {
  const [showModal, setShowModal] = useState(false);

  const percentage = Math.round((score / totalQuestions) * 100);

  // Result message logic
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

  // Create the chart data
  const chartData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [score, totalQuestions - score],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        padding: 10,
        bodyFont: {
          size: 14
        }
      }
    }
  };

  // Generate category-specific results
  const categoryResults = categorizedResults
    ? Object.entries(categorizedResults).map(([type, correct]) => {
        return (
          <li key={type} className="list-group-item d-flex justify-content-between align-items-center">
            {type}
            <span className="badge bg-primary rounded-pill">{correct}</span>
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

  return (
    <div className="card text-center my-5">
      <div className="card-header bg-primary text-white">
        <h3 className="mb-0">Quiz Results</h3>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <h1 className="display-1">{percentage}%</h1>
          <p className="lead">You scored {score} out of {totalQuestions}</p>
        </div>
        <div className="card-text mb-4">{resultMessage}</div>

        {/* Pie Chart */}
        {/* <div className="my-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Pie data={chartData} options={chartOptions} />
        </div> */}

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
          See All Answers by Questions
        </button>

        <button className="btn btn-secondary btn-lg mt-4 ms-3" onClick={onRestart}>
          Take Quiz Again
        </button>
      </div>

      <AnswerModal
        show={showModal}
        onClose={() => setShowModal(false)}
        questions={questions}
        categorizedAnswers={categorizedAnswers}
      />
    </div>
  );
};

export default Report;
