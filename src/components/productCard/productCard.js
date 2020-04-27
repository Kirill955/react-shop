import React, { useState } from 'react'
import './productCard.sass'

function ProductCard(props) {
    const [amount, changeAmount] = useState(6)
    const [arrProducts, fetchProducts] = useState(
        [
        {   
            img: "/assets/products/Layer 7.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 1
        }, 
        {   
            img: "/assets/products/Layer 8.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 2
        }, 
        {   
            img: "/assets/products/Layer 9.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 3
        }, 
        {
            img: "/assets/products/Layer 10.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "bread black", 
            idx: 4
        }, 
        {
            img: "/assets/products/Layer 11.svg", 
            title: "BRANDED SHOE", 
            price: 300, 
            description: "bals", 
            idx: 5
        }, 
        {
            img: "/assets/products/Layer 12.svg", 
            title: "BRANDED SHOE",
            price: 300, 
            description: "water", 
            idx: 6
        },
        {   
            img: "/assets/products/Layer 7.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 7
        }, 
        {   
            img: "/assets/products/Layer 8.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 8
        }, 
        {   
            img: "/assets/products/Layer 9.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 9
        }, 
        {
            img: "/assets/products/Layer 10.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "bread black", 
            idx: 10
        }, 
        {
            img: "/assets/products/Layer 11.svg", 
            title: "BRANDED SHOE", 
            price: 300, 
            description: "bals", 
            idx: 11
        }, 
        {
            img: "/assets/products/Layer 12.svg", 
            title: "BRANDED SHOE",
            price: 300, 
            description: "water", 
            idx: 12
        },
        {   
            img: "/assets/products/Layer 7.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 13
        }, 
        {   
            img: "/assets/products/Layer 8.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 14
        }, 
        {   
            img: "/assets/products/Layer 9.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 15
        }, 
        {
            img: "/assets/products/Layer 10.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "bread black", 
            idx: 16
        }, 
        {
            img: "/assets/products/Layer 11.svg", 
            title: "BRANDED SHOE", 
            price: 300, 
            description: "bals", 
            idx: 17
        }, 
        {
            img: "/assets/products/Layer 12.svg", 
            title: "BRANDED SHOE",
            price: 300, 
            description: "water", 
            idx: 18
        },
        {   
            img: "/assets/products/Layer 7.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 19
        }, 
        {   
            img: "/assets/products/Layer 8.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 20
        }, 
        {   
            img: "/assets/products/Layer 9.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "milk", 
            idx: 21
        }, 
        {
            img: "/assets/products/Layer 10.svg", 
            title: "BRANDED SHOE",
            price: 300,  
            description: "bread black", 
            idx:22
        }, 
        {
            img: "/assets/products/Layer 11.svg", 
            title: "BRANDED SHOE", 
            price: 300, 
            description: "bals", 
            idx: 23
        }, 
        {
            img: "/assets/products/Layer 12.svg", 
            title: "BRANDED SHOE",
            price: 300, 
            description: "water", 
            idx: 24
        }
    ])
    return (
        <React.Fragment>
            {arrProducts.map((item, index) => {
                return (
                    <React.Fragment>
                        { item.idx <= amount ? 
                            <div key={index} className="product-item">
                                <div className="product-content">
                                    { item.img ? <div className="product-img"><img src={item.img} alt={item.title}/></div> : null}
                                    <div className="product-title">{item.title}</div>
                                    <div className="product-buy">
                                        <span className="product-price">{`${item.price}$`}</span>
                                        <button onClick={() => props.changeSum(item.price)}>
                                            BUY NOW
                                        </button>
                                    </div>
                                </div>
                            </div> 
                            : null
                        }
                    </React.Fragment>
                )
            })}
            <button className="product-show" onClick={() => changeAmount(amount + 6)}>show more</button>
        </React.Fragment>
    )
}

export default ProductCard