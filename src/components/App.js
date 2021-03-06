import React, { useContext, useEffect } from 'react';
import Game from "screens/Game";
import Howto from "screens/Howto";
import Nav from "components/Nav";
import About from "screens/About";
import 'styles/App.css';
import { GameContext } from 'components/GameContext';
import Card from "components/Card";
import last_image from "images/covid1.jpg";

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  const cardReq = "http://sracela.pythonanywhere.com/cards/";

  const [cards, setCards, , setShow] = useContext(GameContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(cardReq).catch(err => console.error(err));
      const data = await response.json().catch(err => console.error(err));
      //setCards(data.slice(0, 5));
      setCards(data);
      setShow(true);
    };

    fetchData();
    console.log(`loaded cards: ${cards}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/howto" exact component={Howto}/>
        <Route path="/about" component= {About}/>
        <Route path="/game" component={Game}/>
      </Switch>
    </div>
    </Router>

  );
}

const Home = () => (
  <div>
  <section>
      <h1>Stay Safe While Having Fun</h1>
      <h2>Together we will get through this, so we might as well get drunk.</h2>
  </section>
  <div className="container">
  <div className="wrapper">
        <Card key="loading"
      description={"To start you have to press PLAY! in the Navigation bar. Don't be shy!"}
      image_url={last_image}
      />
    </div>
  </div>
  </div>


);

export default App;