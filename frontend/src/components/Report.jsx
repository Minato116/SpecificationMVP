// import React, { useEffect, useState } from 'react';
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

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Report = ({ score, totalQuestions, onRestart, categorizedResults, questions, clickAnswer, typeNum }) => {
  // const [ setShowModal] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  
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


  const generateReport = async () => {
    const percentage = Object.entries(categorizedResults).map(([type, correct], index) => {
          let typeResult;
          typeNum.forEach((val, ind) => {
            if (type === val._id) {
              typeResult = Math.floor((Number(correct) / Number(val.count) * 100));
            }
          });        
          return typeResult          
        }) 
    const report = {
      data: {
        firstName: userInfo.firstName,
      middleName: userInfo.middleName,
      lastName: userInfo.lastName,
      emailAddress: userInfo.email,
      gender: userInfo.gender,
      education: userInfo.education,
      employmentDetails: userInfo.employmentDetails,
      score: score,
      type: Object.keys(categorizedResults),
      percentage: percentage,
      totalQuestions:totalQuestions,
      keySkills: userInfo.keySkills
      }, 
    }
console.log(totalQuestions);
    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify(report),
    })
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
      // console.log(Object.keys(categorizedResults),"asfasfasfasf");
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
    <div className="print:hidden card text-center m-0 border-0 shadow-0">
      <div className="card-header bg-primary text-white mb-4">
        <h3 className="mb-0 p-2">Quiz Results</h3>
      </div>
      <div className="card-body pb-5 shadow-0 border-0">
        <div className="mb-4 ">        
          {/* <CircularWithValueLabel score={percentage} /> */}
          <div className='d-flex justify-content-center w-100'>
          <GaugeChart value= {percentage} />
          </div>
          
          <p className="lead">You scored {score} out of {totalQuestions}</p>
        </div>
        <div className="card-text mb-4">{resultMessage}</div>

        <div className="block d-lg-flex justify-content-around align-items-center w-100 p-5 gap-5">
 

  {categoryResults.length > 0 && (
    <div className='w-100'>
      <h5 className="mb-3">Performance by Category:</h5>
      <ul className="list-group d-flex gap-2">
        {categoryResults}
      </ul>
    </div>
  )}

    <div className='w-100 mt-5'>
      <PieAnimation itemNumber = {categoryResults.length} categoryResults = {categorizedResults} typeNum = {typeNum}/>
    </div>
 
</div>

        
        <button className="btn btn-primary btn-lg mt-4" onClick={generateReport}>
          Save Report
        </button>
        <button className="btn btn-primary btn-lg mt-4 ms-3" onClick={onRestart}>
          Take Quiz Again
        </button>
        <button className=" btn btn-primary btn-lg mt-4 ms-3" onClick={handlePrint}>
          Print
        </button>
      </div>

      {/* <AnswerModal
        show={showModal}
        onClose={() => setShowModal(false)}
        questions={questions}
        categorizedAnswers={categorizedAnswers}
        clickAnswer={clickAnswer}
      /> */}
    </div>
  );
};

export default Report;
