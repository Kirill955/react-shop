import React from 'react'
import './Header.sass'
import Search from './Search/Search'
import Cart from './Cart/Cart'
import Nav from './Nav/Nav'

export default function Header(props) {
    return (
        <header>
            <div className="top-panel">
                <div className="header-logo">
                    <img src="/assets/logo.png" alt=""/>
                </div>
                <Search />
                <Cart sumCart={props.sumCart}/>
            </div>
            <Nav />
        </header>
    )
}