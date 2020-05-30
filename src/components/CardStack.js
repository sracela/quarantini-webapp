import React, { useState, useContext } from 'react';
import Card from "components/Card";
import {
  MorphIcon
} from 'react-svg-buttons';
import { TinderLikeCard } from 'react-stack-cards';
import 'styles/Game.css';
import { GameContext } from 'components/GameContext';
import last_image from "images/covid1.jpg";
import { NavLink } from 'react-router-dom';



const CardStack = () => {
  const last_description = "Suggest more cards sending an email to quarantini@gmail.com";

  const [cards, , , , isLast, setIsLast] = useContext(GameContext);
  const [Tinder, setTinder] = useState(null);

  const images = cards.map(card => "#202020");

  function onTinderSwipe() {
    setTinder(Tinder.swipe());
    if(Tinder.state.current === cards.length){
      setIsLast(true);
    }

  }

  return(
    <div className="CardStack">
        {!isLast && <div className="tinder">
         <TinderLikeCard
          colors={images}
          width="400"
          height="450"
          direction="swipeLeft"
          duration={150}
          ref={(node) =>  setTinder(node)}>
             {cards.map((card, i, arr) => <Card key={card.id} description={card.description} image_url={card.image_url} />
             )}
        </TinderLikeCard>
        <button onClick={onTinderSwipe}>
          <MorphIcon
            type="check"
            size={75}
            thickness={2}
            color="#202020" />
        </button>
        </div>}
        {isLast && <div className="tinder">
        <Card key="last" description={last_description} image_url={last_image} />
        <NavLink exact style={{textDecoration: 'none'}} activeClassName="selected-main" className="Link main" to='/'>
        <button onClick={() => setIsLast(false)}>
          <MorphIcon
            type="thunderbolt"
            size={75}
            thickness={2}
            color="#202020" />
        </button>
        </NavLink>
        </div>}
      </div>
  );

}
export default CardStack;
