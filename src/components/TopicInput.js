import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TopicInput = ({ setTopic, setNotes , setQuiz }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!input) return;
    setTopic(input);

    try {
      const res = await axios.post('http://localhost:5000/api/generate', { topic: input });
      setNotes(res.data.notes);
      setQuiz(res.data.quiz);
    } catch (err) {
      console.error('API error:', err);
    }
  };

  const handleQuiz = async () => {
    await handleGenerate();
    navigate('/quiz');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a topic..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={handleQuiz}>Quiz</button>
    </div>
  );
};

export default TopicInput;
