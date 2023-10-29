import React from 'react';

const WordList: React.FC<{ words: string[] }> = ({ words }) => {
  return (
    <div className="word-list">
      <h2>Word List</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
