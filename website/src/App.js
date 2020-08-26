import React from 'react';
import "./App.css"
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <Home/>
    </React.Fragment>
    
    
  );
}

export default App;
