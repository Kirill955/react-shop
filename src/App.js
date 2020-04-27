import React, {useState} from 'react';
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BrowserRouter from 'react-router-dom';
import Header from './components/header/Header';
import Product from './components/routs/Products/Product'
import Sale from './components/routs/Sale/Sale'
import Handbags from './components/routs/Handbags/Handbags'
import Wallets from './components/routs/Wallets/Wallets'
import Accessories from './components/routs/Accessories/Accessories'
import MensStore from './components/routs/MensStore/MensStore'
import Shoes from './components/routs/Shoes/Shoes'
import Vintage from './components/routs/Vintage/Vintage'
import Services from './components/routs/Services/Services'
import Contact from './components/routs/Contact/Contact'
import Footer from './components/footer/footer'

function App() {
  const [sumCart, changeSum] = useState(0)
  return (
    <Router>
      <Header sumCart={`${sumCart}$`}/>
      <main>
        <Switch>
          <Route exact path="/"><Product sumCart={sumCart} changeSum={(sum) => changeSum(sumCart + sum)}/></Route>
          <Route exact path="/sale"><Sale /></Route>
          <Route exact path="/handbags"><Handbags /></Route>
          <Route exact path="/wallets"><Wallets /></Route>
          <Route exact path="/accessories"><Accessories /></Route>
          <Route exact path="/mens-store"><MensStore /></Route>
          <Route exact path="/shoes"><Shoes /></Route>
          <Route exact path="/vintage"><Vintage /></Route>
          <Route exact path="/services"><Services /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
