import React from 'react'
import "./style.css"
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Services from './Services'
import Contact from './Contact'


function Header(){
    return(
        <React.Fragment>
            <BrowserRouter>
                <div class="topnav">
                <a class="active"><Link to="/">Home</Link></a>
                <a><Link to="/Gallery">Gallery</Link></a>
                <a><Link to="/About">About Us</Link></a>
                <a><Link to="/Services">Services</Link></a>
                <a><Link to="/Testimonials">Testimonials</Link></a>
                <a><Link to="/Contact">Contact Us</Link></a>
                
                </div>
        
                <Route exact path="/" component={Home}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route path="/About" component={About}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Testimonials" component={Testimonials}/>
                <Route path="/Contact" component={Contact}/>
            </BrowserRouter>
        </React.Fragment>
    
    );
}

export default Header