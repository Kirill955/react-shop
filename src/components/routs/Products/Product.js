import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Product.sass'
import Baaner from '../../Banner/Banner'
import ProductCard from '../../productCard/productCard'
import SliderCategories from '../../SliderCategpries/SliderCategories'
import Banner from '../../Banner/Banner'

export default function Product(props) {
    const showMore = () => {
        return <ProductCard />
    }
    return (
        <>
            <Banner />
            <SliderCategories />
            <div className="product-page__title">
                FEATURED PRODUCTS
            </div>
            <div className="product-container container">
                <ProductCard sumCart={props.sumCart} changeSum={props.changeSum} />
            </div>
        </>
    )
} 