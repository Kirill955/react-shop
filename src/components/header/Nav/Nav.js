import React, { useState } from 'react'
import './Nav.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Nav = () => {
    const [isOpen, toggleMenu] = useState(false)
    return (
        <nav className={isOpen ? "nav-active" : null}> 
            <ul>
                <li onClick={() => toggleMenu(false)}><NavLink to="/" exact>Home</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/sale" exact>Sale</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/handbags" exact>Handbags</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/wallets" exact>Wallets</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/accessories" exact>Accessories</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/mens-store" exact>Mens Store</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/shoes" exact>Shoes</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/vintage" exact>Vintage</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/services" exact>Services</NavLink></li>
                <li onClick={() => toggleMenu(false)}><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <div className={`burger-menu ${isOpen ? "active" : null}`} onClick={() => toggleMenu(!isOpen)}>
            </div>
        </nav>
    )
}

export default Nav