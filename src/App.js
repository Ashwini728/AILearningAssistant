import React, { useState } from 'react';
import TopicInput from './components/TopicInput';
import NotesDisplay from './components/NotesDisplay';
import QuizSection from './components/QuizSection';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`App ${theme}`}>
      <div className="top-bar">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div className="main-content">
        <h1>AI Learning Assistant</h1>
        <p className="subtitle">Transforming Curiosity into Knowledge with Every Click.</p>
        <TopicInput setTopic={setTopic} setNotes={setNotes} setQuiz={setQuiz} />
      </div>

      {notes && <NotesDisplay notes={notes} />}
      {quiz.length > 0 && <QuizSection quiz={quiz} setScore={setScore} />}
      {score !== null && <ResultDisplay score={score} />}
    </div>
  );
}

export default App;
