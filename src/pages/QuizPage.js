import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizPage = ({ selectedTopic }) => {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await axios.post('http://localhost:5000/api/generate-quiz', {
        topic: selectedTopic,
      });
      setQuiz(res.data.quiz);
    };

    if (selectedTopic) fetchQuiz();
  }, [selectedTopic]);

  const handleSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore((correct / quiz.length) * 100);
  };

  return (
    <div>
      <h2>🧠 Quiz Time - {selectedTopic}</h2>
      {quiz.length === 0 ? (
        <p>Generating quiz... Please wait.</p>
      ) : (
        <>
          {quiz.map((q, i) => (
            <div key={i}>
              <p>{q.question}</p>
              {q.options.map((opt, j) => (
                <label key={j}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    onChange={() => handleSelect(i, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>✅ Submit Quiz</button>
          {score !== null && <h3>🎯 Your Score: {score} / 100</h3>}
        </>
      )}
    </div>
  );
};

export default QuizPage;
