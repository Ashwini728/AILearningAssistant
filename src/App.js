import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopicInput from './components/TopicInput';
import NotesDisplay from './components/NotesDisplay';
import ResultDisplay from './components/ResultDisplay';
import QuizPage from './pages/QuizPage';

function App() {
  const [notes, setNotes] = useState('');
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
          {/* Main Home Route */}
          <Route
            path="/"
            element={
              <div className="main-content">
                <h1>AI Learning Assistant</h1>
                <p className="subtitle">
                  Transforming Curiosity into Knowledge with Every Click.
                </p>
                <TopicInput setNotes={setNotes} />
                {notes && <NotesDisplay notes={notes} />}
              </div>
            }
          />

          {/* New Quiz Route using Revamped QuizPage */}
          <Route
            path="/quiz"
            element={
              <QuizPage setScore={setScore} />
            }
          />
        </Routes>

        {/* Show Result Summary if Quiz Score Exists */}
        {score !== null && <ResultDisplay score={score} />}
      </div>
    </Router>
  );
}

export default App;
