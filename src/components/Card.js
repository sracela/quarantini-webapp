import React from 'react';
import style from 'styles/card.module.css';
import last_image from "images/covid1.jpg";


const Card = ({description, image_url, onTest=0, last_id=0, value=0}) => {
    const last_description = "No more cards, suggest more sending an email to quarantini@gmail.com";
    const first_description = "Loading cards";
    console.log(value);
    // console.log(last_id);

    if(!last_id){
        return(
            <div className={style.card}>
                <div className={style.imageDiv}>
                    <img className={style.image} src={last_image} alt=""/>
                </div>
                <div className={style.textDiv}><p>{first_description}</p></div>
            </div>
        );
      }
  
      if(value === last_id){
        return(
            // <div className={style.card}  onClick={() => onTest()}>
            <div className={style.card} >
                <div className={style.imageDiv}>
                    <img className={style.image} src={last_image} alt=""/>
                </div>
                <div className={style.textDiv}><p>{last_description}</p></div>
                {/* <PlusButton onClick={() => onTest()}/> */}
            </div>
        );
      } else{

        return(
            <div className={style.card}>
                <div className={style.imageDiv}>
                    <img className={style.image} src={image_url} alt=""/>
                </div>
                <div className={style.textDiv}><p>{description}</p></div>
            </div>
        );

      }


}

export default Card;