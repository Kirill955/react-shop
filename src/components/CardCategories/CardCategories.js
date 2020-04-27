import React from 'react'
import './CardCategories.sass'

function CardCategories(props) {
    return (
        <div className="card-categories">
            <div className="card-categories__img">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="card-categories__content">
                <span>{props.title}</span>
                <button>{props.btn}</button>
            </div>
        </div>
    )
}

export default CardCategories