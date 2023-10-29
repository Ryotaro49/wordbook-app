import React, { useState } from 'react';
import './App.css';
import AddWord from './components/AddWord/AddWord';
import WordList from './components/WordlLst/WordList';

function App() {
  const [words, setWords] = useState<string[]>([]);

  const handleAddWord = (newWord: string) => {
    setWords([...words, newWord]);
  };

  return (
    <div className="App">
      <AddWord onAddWord={handleAddWord} />
      <WordList words={words} />
    </div>
  );
}

export default App;
