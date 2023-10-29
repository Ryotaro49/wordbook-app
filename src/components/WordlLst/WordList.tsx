import React from 'react';

const WordList: React.FC<{ words: { word: string, reason: string }[] }> = ({ words }) => {
  return (
    <div className="word-list">
      <h2>Word List</h2>
      <ul>
        {words.map((entry, index) => (
          <li key={index}>
            <strong>Word:</strong> {entry.word}
            <br />
            <strong>Reason:</strong> {entry.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
