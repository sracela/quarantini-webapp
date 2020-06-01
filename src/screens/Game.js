import React, { useContext } from 'react';
import 'styles/App.css';
import CardStack from 'components/CardStack';
import { GameContext } from 'components/GameContext';
import Card from "components/Card";
import last_image from "images/covid1.jpg";


function Game(){
  const loading = "Loading cards";

  const [, , show, , , ] = useContext(GameContext);
  return(
    <div className="container">
    <div className="header">
      <h1>Let's play Quarantini!</h1>
    </div>
    <div className="item2">
      <h2>Together we will get through this, so we might as well get drunk.</h2>
    </div>
    <div className="item">
    </div>
    <div className="wrapper">
      {show ? <CardStack /> : 
            <Card key="loading"
          description={loading}
          image_url={last_image}
          />}
    </div>
    <div className="item">
    </div>
  </div>
  );
}

export default Game;