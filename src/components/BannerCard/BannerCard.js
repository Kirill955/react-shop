import React from 'react'
import './BannerCard.sass'

function BannerCard(props) {
    return (
        <div className="banner-item">
            <div className="banner-img">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="banner-content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>{props.btn}</button>
            </div>
        </div>
    )
}

export default BannerCard