import React, { useState } from 'react';

const AddWord: React.FC<{ onAddWord: (word: string, reason: string) => void }> = ({ onAddWord }) => {
  const [newWord, setNewWord] = useState<string>('');
  const [newWordReason, setNewWordReason] = useState<string>('');

  const handleAddWord = () => {
    if (newWord) {
      onAddWord(newWord, newWordReason);
      setNewWord('');
      setNewWordReason('');
    }
  };

  return (
    <div className="add-word">
      <h2>Add a Word</h2>
      <input
        type="text"
        placeholder="Enter a new word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter a reason"
        value={newWordReason}
        onChange={(e) => setNewWordReason(e.target.value)}
      />
      <button onClick={handleAddWord}>Add</button>
    </div>
  );
};

export default AddWord;
