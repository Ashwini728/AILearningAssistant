import React, { useState } from 'react';
import TopicInput from '../components/TopicInput';
import NotesDisplay from '../components/NotesDisplay';
import QuizSection from '../components/QuizSection';
import ResultDisplay from '../components/ResultDisplay';

function ClassicAssistant({ theme }) {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(null);

  return (
    <div className={`App ${theme}`}>
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

export default ClassicAssistant;
