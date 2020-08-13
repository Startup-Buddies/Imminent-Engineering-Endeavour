import React from 'react'
import "./style.css"
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Gallery from './Gallery'


function Header(){
    return(
        <React.Fragment>
        <BrowserRouter>
            <div class="topnav">
            <a class="active"><Link to="/Home">Home</Link></a>
            <a><Link to="/Gallery">Gallery</Link></a>
            <a><Link to="/About">About</Link></a>
            
            </div>
    
    <Route path="/Home" component={Home}/>
    <Route path="/Gallery" component={Gallery}/>
    <Route path="/About" component={About}/>
    </BrowserRouter>
    </React.Fragment>
    
    );
}

export default Header