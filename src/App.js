import './App.css';
import List from './pages/list-name';
import React from 'react';
import PersistentDrawerRight from './pages/navbar';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#000000"
    }}>
      <PersistentDrawerRight />,
      <List />,
    </div>
  );
}

export default App;
