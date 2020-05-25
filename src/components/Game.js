import React from 'react';
import { useEffect, useState } from 'react';

import 'styles/App.css';
import CardStack from 'CardStack';


function Game(){
  const cardReq = "http://sracela.pythonanywhere.com/cards/";

  //create a state to put 'cards' in there

  const [cards, setCards] = useState([]);

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
      <h1>Game page</h1>
        <CardStack cards={cards}></CardStack>
    </div>
  );
}

export default Game;