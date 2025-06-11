import React, { useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TopicInput = ({ setTopic, setNotes }) => {
  const [input, setInput] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSubmit = async () => {
    const finalTopic = input || transcript;
    if (!finalTopic) return;

    setTopic(finalTopic);
    resetTranscript();

    try {
      const res = await axios.post('https://6eb5-34-168-194-236.ngrok-free.app/generate-notes', {
        topic: finalTopic,
      });
      setNotes(res.data.notes);
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
