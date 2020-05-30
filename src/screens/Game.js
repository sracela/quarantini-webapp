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
    <div>
      <h1>Let's play Quarantini!</h1>
        {show ? <CardStack /> : <Card key="loading"
          description={loading}
          image_url={last_image}
          />}
    </div>
  );
}

export default Game;