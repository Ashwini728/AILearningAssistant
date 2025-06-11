// import React, { useState } from 'react';

// const QuizSection = ({ quiz, setScore }) => {
//   const [answers, setAnswers] = useState({});

//   const handleSelect = (qIndex, choice) => {
//     setAnswers({ ...answers, [qIndex]: choice });
//   };

//   const handleSubmit = () => {
//     let correct = 0;
//     quiz.forEach((q, index) => {
//       if (answers[index] === q.answer) correct++;
//     });
//     setScore((correct / quiz.length) * 100);
//   };

//   return (
//     <div>
//       <h2>Quiz</h2>
//       {quiz.map((q, index) => (
//         <div key={index}>
//           <p>{q.question}</p>
//           {q.options.map((opt, i) => (
//             <label key={i}>
//               <input
//                 type="radio"
//                 name={`q${index}`}
//                 onChange={() => handleSelect(index, opt)}
//               />
//               {opt}
//             </label>
//           ))}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit Quiz</button>
//     </div>
//   );
// };

// export default QuizSection;


import React, { useState } from 'react';
import '../App.css'; // Assuming styles are there for .card etc.

const QuizSection = ({ quiz, setScore }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, choice) => {
    if (!submitted) {
      setAnswers({ ...answers, [qIndex]: choice });
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });
    setScore(((correct / quiz.length) * 100).toFixed(2));
    setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Quiz Time 🧠</h2>
      {quiz.map((q, index) => (
        <div key={index} className="quiz-question">
          <p><strong>Q{index + 1}:</strong> {q.question}</p>
          <div className="options-group">
            {q.options.map((opt, i) => (
              <label key={i} className={`option-label ${answers[index] === opt ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name={`q${index}`}
                  value={opt}
                  checked={answers[index] === opt}
                  onChange={() => handleSelect(index, opt)}
                  disabled={submitted}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit Quiz
        </button>
      ) : (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'var(--accent)' }}>
          Quiz submitted! Scroll down to see your score. 🎯
        </p>
      )}
    </div>
  );
};

export default QuizSection;
