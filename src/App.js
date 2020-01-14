import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './components/MainTable/mainTable';
import { catalogItems } from './api/api'
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Header from './components/Header/Header';
import MainTableContainer from './components/MainTable/MainTableContainer';
import MainTableContainer43 from './components/MainTable43/MainTableContainer';
import MainTableContainer58 from './components/MainTable58/MainTableContainer';
import MainTableContainer63 from './components/MainTable63/MainTableContainer';
import MainTableContainer66 from './components/MainTable66/MainTableContainer';
import MainTableContainer95 from './components/MainTable95/MainTableContainer';
import Footer from './components/Footer/Footer';


import RegistrationSuccess from './components/logreg/Registration/RegistrationSuccess';
import LoginPage from './components/logreg/Login/LoginPage'
import RegistrationContainer from './components/logreg/Registration/RegistrationContainer'
import LoginContainer from './components/logreg/Login/LoginContainer';
import { connect } from 'react-redux';
import {checkAutorization} from './redux/auth-reducer'
import ApplicationAdmin from './components/applicationAdmin/applicationAdmin';
import CatalogMainPage from './components/CatalogMainPage/CatalogMainPage';
//import 'bootstrap/dist/css/bootstrap.min.css'
function App(props) {

useEffect(()=>{

  props.checkAutorization()
}, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header currentPage = {''}/>
        <Route exact path='/registration' render={() => <div className="tableWrapper">
          <RegistrationContainer />
        </div>} />
        <Route exact path='/registration/success' render={() => <div className="tableWrapper">
          <RegistrationSuccess />
        </div>} />



        <Route exact path='/login' render={() => <div className="tableWrapper">
          <LoginContainer />
        </div>} />
        
        <Route exact path='/catalog' render={() => <CatalogMainPage/>} />
        <Route exact path='/catalog/catalog43' render={() => <div className="tableWrapper">
          <h4>1843-1854гг</h4>
          <MainTableContainer43 />
          <h4>1855-1857гг</h4>
          <MainTableContainer />
          <h4>1858-1862гг</h4>
          <MainTableContainer58/>
          <h4>1863-1865гг</h4>
          <MainTableContainer63/>
        </div>} />
        <Route exact path='/catalog/catalog66' render={() => <div className="tableWrapper">
          <MainTableContainer66 />
      </div>} />
        <Route exact path='/catalog/catalog95' render={() => <div className="tableWrapper">
          <MainTableContainer95/>
      </div>} />
        <Route exact path='/catalog/catalogsoviets' render={() => <div className="tableWrapper">
          Каталог Советы
      </div>} />
      <Route exact path='/requests' render={() => <div className="tableWrapper">
      <ApplicationAdmin/>
      </div>} />
      
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default connect(null, {checkAutorization})( App );
