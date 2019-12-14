import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './components/MainTable/mainTable';
import { catalogItems } from './api/api'
import {BrowserRouter} from "react-router-dom";
import BonInfo from './components/Information/modal/Modal';
import Sandbox from './components/Information/modal/Sandbox';
//import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <MainTable catalogItems={catalogItems} />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
