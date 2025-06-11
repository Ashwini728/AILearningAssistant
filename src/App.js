
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopicInput from './components/TopicInput';
import NotesDisplay from './components/NotesDisplay';
import QuizSection from './components/QuizSection';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <div className={`App ${theme}`}>
        <div className="top-bar">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <h1>AI Learning Assistant</h1>
                <p className="subtitle">Transforming Curiosity into Knowledge with Every Click.</p>
                <TopicInput setTopic={setTopic} setNotes={setNotes} setQuiz={setQuiz} />
                {notes && <NotesDisplay notes={notes} />}
              </div>
            }
          />
          <Route
            path="/quiz"
            element={<QuizSection quiz={quiz} setScore={setScore} />}
          />
        </Routes>

        {/* Always display result if present */}
        {score !== null && <ResultDisplay score={score} />}
      </div>
    </Router>
  );
}

export default App;
