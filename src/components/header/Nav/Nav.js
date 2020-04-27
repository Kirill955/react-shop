import React from 'react'
import './Nav.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/sale" exact>Sale</NavLink></li>
                <li><NavLink to="/handbags" exact>Handbags</NavLink></li>
                <li><NavLink to="/wallets" exact>Wallets</NavLink></li>
                <li><NavLink to="/accessories" exact>Accessories</NavLink></li>
                <li><NavLink to="/mens-store" exact>Mens Store</NavLink></li>
                <li><NavLink to="/shoes" exact>Shoes</NavLink></li>
                <li><NavLink to="/vintage" exact>Vintage</NavLink></li>
                <li><NavLink to="/services" exact>Services</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <div className="burger-menu">
                <span></span>
                <span></span>
            </div> 
        </nav>
    )
}

export default Nav