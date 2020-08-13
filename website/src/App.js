import React from 'react';
import "./App.css"
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Footer/>
    </React.Fragment>
    
    
  );
}

export default App;
