import React from 'react';
import style from './card.module.css';

const Card = ({description,image_url}) => {
    return(
        <div className={style.card}>
            <div className={style.imageDiv}>
                <img className={style.image} src={image_url} alt=""/>
            </div>
            <div className={style.textDiv}><h4>{description}</h4></div>
        </div>
    );
}

export default Card;