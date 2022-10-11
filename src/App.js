import './App.css';
import List from './pages/list-name';
import React from 'react';
import PersistentDrawerRight from './pages/navbar';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#808080"
    }}>
      <PersistentDrawerRight />,
      <List />,
    </div>
  );
}

export default App;
