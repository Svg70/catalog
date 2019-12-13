import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './components/MainTable/mainTable';
import { catalogItems } from './api/api'

function App() {
  
  return (
    <div className="App">
      <MainTable catalogItems={catalogItems} />
    </div>
  );
}

export default App;
