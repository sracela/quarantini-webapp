import React from 'react';
import 'styles/App.css';
import logo from 'images/quarantini_logo.jpg';
import { Link } from 'react-router-dom';

//when we Link to something we get access to something in our props like this:
//function itemDetail({ match }) { useEffect(); } and then... match.params.id
function Nav () {

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }

  return(
    <nav>
        <Link style={navStyle} to='/'>
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1>Let's play Quarantini!</h1>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/game'>
                <li>Game</li>
            </Link>
            {/* <Link to={`/game'/${item.id}`}>{item.name}</Link> */}
        </ul>
    </nav>
  );
}

export default Nav;