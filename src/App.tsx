import React, { useState } from 'react';
import './App.css';
import WordList from './components/WordlLst/WordList';
import AddWord from './components/AddWord/AddWord';

function App() {
  const [wordEntries, setWordEntries] = useState<{ word: string, reason: string }[]>([]);

  const handleAddWord = (newWord: string, newReason: string) => {
    const newEntry = { word: newWord, reason: newReason };
    setWordEntries([...wordEntries, newEntry]);
  };

  return (
    <div className="App">
      <AddWord onAddWord={handleAddWord} />
      <WordList words={wordEntries} />
    </div>
  );
}

export default App;
