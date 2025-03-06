import React from 'react';

const Question = ({ question, selectedOption, onSelectOption }) => {
  const optionLetters = ['a', 'b', 'c', 'd'];

  return (
    <div className="card mb-4">
      <div className="card-body border border-primary" data-aos="zoom-out" data-aos-delay="300">
        {/* <h6 className="badge bg-secondary mb-2">{question.type}</h6> */}
        {/* <h5 className="card-title mb-3">{question.question}</h5> */}
        <div className="list-group">
          {question.contents.map((content, index) => (
            <button
              key={index}
              className={`list-group-item list-group-item-action ${selectedOption === optionLetters[index] ? 'active' : ''}`}
              onClick={() => onSelectOption(optionLetters[index])}
            >
              <strong>{optionLetters[index].toUpperCase()}.</strong> {content}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
