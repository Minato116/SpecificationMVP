// AnswerModal.js
import React from 'react';

const AnswerModal = ({ show, onClose, questions, categorizedAnswers }) => {
  if (!show) return null;

  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">All Answers by Category</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {Object.entries(categorizedAnswers).map(([type, answers]) => (
              <div key={type}>
                <h6>{type}</h6>
                <ul className="list-group mb-3">
                  {answers.map((answer, index) => (
                    <li key={index} className="list-group-item">
                      <strong>Q: {questions[answer.index].question}</strong>
                      <br />
                      <span>Your Answer: {answer.selectedOption}</span>
                      <br />
                      <span>Correct Answer: {questions[answer.index].answer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
