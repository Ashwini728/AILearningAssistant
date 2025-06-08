import React from 'react';

const ResultDisplay = ({ score }) => (
  <div>
    <h2>Quiz Result</h2>
    <p>Your Score: {score.toFixed(2)}%</p>
  </div>
);

export default ResultDisplay;
