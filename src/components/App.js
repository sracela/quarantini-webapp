import React from 'react';
import Game from "components/Game";
import Nav from "components/Nav";
import About from "components/About";
import 'styles/App.css';

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
        <Route path="/about" component= {About}/>
        <Route path="/game" component={Game}/>
        {/* <Route path="/game/:id" /> */}
      </Switch>

    </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
