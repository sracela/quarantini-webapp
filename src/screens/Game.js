import React, { useContext } from 'react';
import { useEffect, useState } from 'react';

import 'styles/App.css';
import CardStack from 'components/CardStack';
import { GameContext } from 'components/GameContext';


function Game(){
  const cardReq = "http://sracela.pythonanywhere.com/cards/";


  const [cards, setCards] = useContext(GameContext);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await fetch(cardReq);
    const data = await response.json();
    setCards(data);
  }

  return(
    <div>
      <h1>Let's play Quarantini!</h1>
        <CardStack cards={cards}></CardStack>
    </div>
  );
}

export default Game;