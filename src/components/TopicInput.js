import React, { useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TopicInput = ({ setTopic, setNotes, setQuiz }) => {
  const [input, setInput] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSubmit = async () => {
    const finalTopic = input || transcript;
    if (!finalTopic) return;

    setTopic(finalTopic);
    resetTranscript();

    try {
      const res = await axios.post('http://localhost:5000/api/generate', { topic: finalTopic });
      setNotes(res.data.notes);
      setQuiz(res.data.quiz);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter or speak topic..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
      <button onClick={SpeechRecognition.startListening}>🎙️ Speak</button>
      {listening && <p>Listening...</p>}
    </div>
  );
};

export default TopicInput;
