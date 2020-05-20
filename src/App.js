import React, { useEffect, useState } from 'react';
import Card from "./Card"
//import logo from './logo.svg';
import './App.css';

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
    <div className="cards">
    {cards.map(card => (
      <Card key={card.id} description={card.description} image_url={card.image_url}></Card>
    ))};
    </div>

    </div>
  );
}

export default App;
