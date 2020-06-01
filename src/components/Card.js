import React from 'react';
import style from 'styles/card.module.css';


const Card = ({description, image_url}) => {

        return(
            <div className={style.card}>
                <div className={style.imageDiv}>
                    <img src={image_url} alt=""/>
                </div>
                <div className={style.textDiv}>
                    <p>{description}</p>
                </div>
            </div>
        );

}

export default Card;