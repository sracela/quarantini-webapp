import React from 'react';
import Card from "./Card";
import { PushButton } from 'react-cupertino';
import style from './game.module.css';

function CardStack(props) {
    if (props.cards[props.value]){
      let card = props.cards[props.value];
      return <Card key={card.id} description={card.description} image_url={card.image_url}></Card>;
    }else{
      return <p>No more cards</p>;
    }

}

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

   render(){
     return(
       <div className={style.game}>
        <PushButton className={style.button} title="PREV" color="red" onClick={() => this.setState({value: this.state.value - 1}) } />       
        <div className={style.cards}>
          <CardStack cards={this.props.cards} value={this.state.value}></CardStack>
        </div>
        <PushButton className={style.button} title="NEXT" color="green" onClick={() => this.setState({value: this.state.value + 1}) } />
       </div>

     );

   }
   
}

export default Game;