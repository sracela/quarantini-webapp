import React from 'react';
import Game from "screens/Game";
import Howto from "screens/Howto";
import Nav from "components/Nav";
import About from "screens/About";
import 'styles/App.css';
import { GameProvider } from 'components/GameContext';

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  return(
    //Para handle routing, wrapp todos los components que necesitan routing en Router
    //Route renders components based on the URL
    //Switch kind of stops the whole process of going through all of these routes as soon as
    //it goes to one and it matches the URL and only render that component
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/howto" exact component={Howto}/>
        <Route path="/about" component= {About}/>
        <GameProvider><Route path="/game" component={Game}/></GameProvider>
      </Switch>

    </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Stay Safe While Having Fun</h1>
    <h2>Together we will get through this, so we might as well get drunk.</h2>
  </div>
);

export default App;
