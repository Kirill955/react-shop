import React from 'react'
import './Cart.sass'

export default function Cart(props) {
    return (
        <div className="cart">
            <img src="/assets/cart.svg" alt=""/>
            <div className="cart-sum">{props.sumCart}</div>
        </div>
    )
}