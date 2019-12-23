import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './components/MainTable/mainTable';
import { catalogItems } from './api/api'
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import BonInfo from './components/Information/modal/Modal';
import Sandbox from './components/Information/modal/Sandbox';
import Header from './components/Header/Header';
import MainTableContainer from './components/MainTable/MainTableContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';

//import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer currentPage = {'RoutingTest'}/>

        <Route exact path='/catalog' render={() => <div className="tableWrapper">
          <div><NavLink to='/catalog/catalog43'>Электронный каталог 1</NavLink></div>
          <div><NavLink to='/catalog/catalog66'>Электронный каталог 2</NavLink></div>
          <div><NavLink to='/catalog/catalog95'>Электронный каталог 3</NavLink></div>
          <div><NavLink to='/catalog/catalogsoviets'>Электронный каталог 4</NavLink></div>
        </div>} />
        <Route exact path='/catalog/catalog43' render={() => <div className="tableWrapper">
          <MainTableContainer />
        </div>} />
        <Route exact path='/catalog/catalog66' render={() => <div className="tableWrapper">
          Каталог 66-95
      </div>} />
        <Route exact path='/catalog/catalog95' render={() => <div className="tableWrapper">
          Каталог 95-12
      </div>} />
        <Route exact path='/catalog/catalogsoviets' render={() => <div className="tableWrapper">
          Каталог Советы
      </div>} />

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
