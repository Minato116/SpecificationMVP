import React from 'react';

const AnswerModal = ({ show, onClose, questions, categorizedAnswers, clickAnswer }) => {
  if (!show) return null;

  const handleSubmit = () => {
    const submittedData = Object.entries(categorizedAnswers).map(([type, answers]) => ({
      type: type,
      answers: answers.map((answer, index) => ({
        question: questions[index].question,
        yourAnswer: clickAnswer[index],
        correctAnswer: questions[answer.index].answer,
      })),
    }));

    console.log("Submitted Data:", submittedData);

    alert("Answers submitted successfully!"); // Replace with API call if needed
  };

  let ind = 1;

  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
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
                  {answers.map((answer, index) => (
                    <li key={index} className="flex list-group-item">
                      <div className="w-3/4">
                        <strong>Q{ind++}: {questions[index].question}</strong>
                        <br />
                        <span>Your Answer: {clickAnswer[index]}</span>
                        <br />
                        <span>Correct Answer: {questions[answer.index].answer}</span>
                      </div>
                    </li>
                  ))}
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
