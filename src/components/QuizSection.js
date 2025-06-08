import React, { useState } from 'react';

const QuizSection = ({ quiz, setScore }) => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, choice) => {
    setAnswers({ ...answers, [qIndex]: choice });
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });
    setScore((correct / quiz.length) * 100);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {quiz.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((opt, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`q${index}`}
                onChange={() => handleSelect(index, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizSection;
