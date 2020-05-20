import React from 'react';
import style from './card.module.css'

const Card = ({description,image_url}) => {
    return(
        <div className={style.card}>
            <h1>Card</h1>
            <p>{description}</p>
            <img className={style.image} src={image_url} alt=""/>
        </div>
    );
}

export default Card;