import React from 'react';
import { useEffect, useState } from 'react';
import Game from "components/Game";
//import logo from './logo.svg';
import 'styles/App.css';


const App = () => {

  const cardReq = "http://sracela.pythonanywhere.com/cards/";

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
    <div className="App">
      <h1>Let's play Quarantini!</h1>
      <div><Game cards={cards}></Game></div>
    </div>
  );
}

export default App;
