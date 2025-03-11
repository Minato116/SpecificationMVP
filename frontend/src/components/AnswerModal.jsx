import React from "react";

const AnswerModal = ({ show, onClose, questions, categorizedAnswers, clickAnswer }) => {
  if (!show) return null;

  const handleSubmit = async () => {
    const submittedData = Object.entries(categorizedAnswers).map(([type, answers]) => ({
      type,
      answers: answers.map((answer) => ({
        question: questions[answer.index]?.question || "Unknown Question",
        yourAnswer: clickAnswer[answer.index] || "No Answer",
        correctAnswer: questions[answer.index]?.answer || "No Correct Answer",
      })),
    }));
  
    try {
      const response = await fetch("http://127.0.0.1:3000/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedData),
      });
  
      if (response.ok) {
        alert("✅ Answers submitted successfully!");
      } else {
        alert("❌ Failed to submit answers.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error submitting answers.");
    }
  };
  

  let ind = 1;

  return (
    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">All Answers by Category</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {Object.entries(categorizedAnswers).map(([type, answers]) => (
              <div key={type}>
                <h6>{type}</h6>
                <ul className="list-group mb-3">
                  {answers.map((answer) => {
                    const questionIndex = answer.index;
                    return (
                      <li key={questionIndex} className="list-group-item">
                        <div className="w-3/4">
                          <strong>Q{ind++}: {questions[questionIndex]?.question || "Unknown"}</strong>
                          <br />
                          <span>Your Answer: {clickAnswer[questionIndex] || "No Answer"}</span>
                          <br />
                          <span>Correct Answer: {questions[questionIndex]?.answer || "No Correct Answer"}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
