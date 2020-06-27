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
    <section>
      <h1>Let's play Quarantini!</h1>
        {/* <h2>Together we will get through this, so we might as well get drunk.</h2> */}
    </section>
    <div className="container">
    <div className="wrapper">
      {show ? <CardStack /> : 
            <Card key="loading"
          description={loading}
          image_url={last_image}
          />}
    </div>
  </div>
  </div>
  );
}

export default Game;