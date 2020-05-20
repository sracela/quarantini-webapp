import React from 'react';
import Card from "./Card";
import './Game.css'
import {
  MorphIcon
} from 'react-svg-buttons';
import { TinderLikeCard } from 'react-stack-cards';

function CardStack(props) {
    if (props.cards[props.value]){
      let card = props.cards[props.value];
      return <Card key={card.id} description={card.description} image_url={card.image_url}></Card>;
    }else{
      return <p>No more cards</p>;
    }

}

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:0,
      directionTinder: "swipeCornerDownRight",
      isOpen: false
    }
    this.Tinder = null
  }
  
  onTinderSwipe() {
    this.Tinder.swipe()
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0,
  //   };
  // }

   render(){
     const images = this.props.cards.map(card => card.image_url);
     const descriptions = this.props.cards.map(card => card.description);
     return(
       <div className="Game">
       <MorphIcon
          className="morph"
          type="arrowLeft"
          size={75}
          thickness={1}
          color="#202020"
          onClick={() => this.setState({value: this.state.value - 1})}
        />
        <div>
          <CardStack cards={this.props.cards} value={this.state.value}></CardStack>
        </div>
        <MorphIcon
          className="morph"
          type="arrowRight"
          size={75}
          thickness={1}
          color="#202020"
          onClick={() => this.setState({value: this.state.value + 1})}
        />
        {/* <div>
        <TinderLikeCard
            images={images}
            width="350"
            height="250"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="tinder">
            {descriptions.map(card => <div>{card}</div>)}
        </TinderLikeCard>
        </div>
        <button  onClick={this.onTinderSwipe.bind(this)}>
        <MorphIcon
          type="check" 
          size={75}
          thickness={1}
          color="#202020"
        /></button> */}

       </div>

     );

   }
   
}

export default Game;