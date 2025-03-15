import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';

import PieAnimation from './PieChart';
import GaugeChart from './GaugeChart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../Screens/index.css'

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Report = ({ score = 0, totalQuestions = 1, onRestart, categorizedResults = {}, questions = [], clickAnswer, typeNum = [] }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Calculate percentage score
  const percentage = Math.round((score / totalQuestions) * 100);

  let resultMessage = "You might want to review the material and try again.";
  if (percentage >= 90) resultMessage = "Excellent! You've mastered these concepts.";
  else if (percentage >= 70) resultMessage = "Good job! You have a solid understanding.";
  else if (percentage >= 50) resultMessage = "You passed! But there's room for improvement.";

  const generateReport = async () => {
    if (!userInfo) {
      alert("User information is missing. Cannot generate report.");
      return;
    }
  
    // Ensure typeNum is an array before processing
    const percentageArray = Object.entries(categorizedResults).map(([type, correct]) => {
      let typeResult = 0;
      if (Array.isArray(typeNum)) {
        typeNum.forEach((val) => {
          if (type === val._id) {
            typeResult = Math.floor((Number(correct) / Number(val.count)) * 100);
          }
        });
      }
      return typeResult;
    });
  
    const report = {
      data: {
        firstName: userInfo.firstName || "",
        middleName: userInfo.middleName || "",
        lastName: userInfo.lastName || "",
        emailAddress: userInfo.email || "",
        gender: userInfo.gender || "",
        education: userInfo.education || "",
        employmentDetails: userInfo.employmentDetails || "",
        score,
        type: Object.keys(categorizedResults),
        percentage: percentageArray,
        totalQuestions,
        isAdmin: userInfo.isAdmin || false,
      },
    };
  
    console.log("Report being sent:", JSON.stringify(report));
  
    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report),
      });
  
      const responseData = await response.json();
      console.log("Response Data:", responseData);
  
      if (!response.ok) {
        throw new Error(responseData.message || "Failed to save report.");
      }
  
      alert("Successfully reported!");
      navigate('/');
    } catch (error) {
      console.error("Error saving report:", error);
      alert("Error saving report. Please try again.");
    }
  };
  

  // Generate category-specific results
  const categoryResults = Object.entries(categorizedResults).map(([type, correct]) => {
    let typeResult = 0;
    typeNum.forEach((val) => {
      if (type === val._id) {
        typeResult = Math.floor((Number(correct) / Number(val.count)) * 100);
      }
    });

    let typeResultMessage = "Low";
    if (typeResult >= 75) typeResultMessage = "High";
    else if (typeResult >= 45) typeResultMessage = "Medium";
    
    return (
      <li key={type} className="list-group-item d-flex justify-content-between align-items-center">
        {type}
        <div className="badge bg-primary rounded-mx w-10">
          <span>{typeResult}%</span>
          <span className="mx-3">{typeResultMessage}</span>
        </div>
      </li>
    );
  });

  // Categorized Answers
  const categorizedAnswers = (questions || []).reduce((acc, question, index) => {
    const type = question?.type || "Unknown";
    const selectedOption =
      categorizedResults[type] && categorizedResults[type] > 0
        ? question.content.find((option) => option === question.answer)
        : "N/A";

    if (!acc[type]) acc[type] = [];
    acc[type].push({ index, selectedOption });
    return acc;
  }, {});

  const handlePrint = async () => {
    await window.scrollTo({ top: 0, behavior: 'smooth' });
    window.print();
  };

  return (
    <div className=" card text-center m-0 border-0 shadow-0">
      <div className="card-header bg-primary text-white mb-4">
        <h3 className="mb-0 p-2">Quiz Results</h3>
      </div>
      <div className="card-body pb-5 shadow-0 border-0">
        <div className="mb-4">
          <div className="d-flex justify-content-center w-100">
            <GaugeChart value={percentage} />
          </div>
          <p className="lead">You scored {score} out of {totalQuestions}</p>
        </div>
        <div className="card-text mb-4">{resultMessage}</div>

        <div className="block d-lg-flex justify-content-around align-items-center w-100 p-5 gap-5">
          {categoryResults.length > 0 && (
            <div className="w-100">
              <h5 className="mb-3">Performance by Category:</h5>
              <ul className="list-group d-flex gap-2">
                {categoryResults}
              </ul>
            </div>
          )}

          <div className="w-100 mt-5">
            <PieAnimation itemNumber={categoryResults.length} categoryResults={categorizedResults} typeNum={typeNum} />
          </div>
        </div>
        <div className="no-print d-flex justify-content-center mt-4">
        <button className="btn btn-primary btn-lg mt-4" onClick={generateReport}>
          Save Report
        </button>
        <button className="btn btn-primary btn-lg mt-4 ms-3" onClick={onRestart}>
          Take Quiz Again
        </button>
        <button className="btn btn-primary btn-lg mt-4 ms-3" onClick={handlePrint}>
          Print
        </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
