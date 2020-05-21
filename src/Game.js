import React from 'react';
import Card from "./Card";

import {
  MorphIcon,
  PlusButton
} from 'react-svg-buttons';
import { TinderLikeCard } from 'react-stack-cards';
import './Game.css'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.Tinder = null
    
  }

  onTinderSwipe() {
    this.Tinder.swipe();
  }

  // handleClick() {
  //   this.forceUpdate();
  //   return(
  //     <div className="Game">
  //     <PlusButton />
  //   </div>
  //   );
  // }

  render() {
    const images = this.props.cards.map(card => "#202020");
    const last_id = this.props.cards.length - 1;
    const first_card = this.props.cards[0];

      return (
        <div className="Game">
          <TinderLikeCard
            colors={images}
            width="400"
            height="450"
            direction="swipeCornerDownRight"
            duration={100}
            ref={(node) => this.Tinder = node}
            className="tinder">
            {this.props.cards.map(card =>
              <Card key={card.id}
              description={card.description}
              image_url={card.image_url}
              last_id={last_id}
              value={card.id-first_card.id}
              // onTest={() => this.handleClick()}
              />
            )}
          </TinderLikeCard>
          <button onClick={this.onTinderSwipe.bind(this)}>
            <MorphIcon
              type="check"
              size={75}
              thickness={2}
              color="#202020" />
          </button>
        </div>
  
      );    

  }

}

export default Game;