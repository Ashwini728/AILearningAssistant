// src/components/TopicList.js
import React from 'react';

const topics = [
  "Data Structures", "Operating Systems", "Computer Networks",
  "Database Management Systems", "Machine Learning", "Cybersecurity",
  "Artificial Intelligence", "Software Engineering", "Web Development", "Cloud Computing"
];

const TopicList = ({ onSelectTopic }) => {
  return (
    <div>
      <h2>🧠 Choose a Topic to Start Quiz</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <button onClick={() => onSelectTopic(topic)}>{topic}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
