import React from 'react';
import 'styles/Nav.css';
import logo from 'images/quarantini_logo.jpg';
import { NavLink } from 'react-router-dom';

//when we Link to something we get access to something in our props like this:
//function itemDetail({ match }) { useEffect(); } and then... match.params.id
function Nav () {

  return(
    <nav className="Nav">
        <div className="Nav-logo">
            <NavLink className="App-logo" to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
        </div>
        <div className="Nav-title">
            <h1>Quarantini</h1>
        </div>
        <div className="Nav-links">
            <ul className="nav-links">
                <NavLink exact activeClassName="selected" className="Link" to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink activeClassName="selected" className="Link" to='/howto'>
                    <li>How to play</li>
                </NavLink>
                <NavLink activeClassName="selected" className="Link" to='/about'>
                    <li>About</li>
                </NavLink>
                <NavLink activeClassName="selected-main" className="Link main" to='/game'>
                    <li>Play!</li>
                </NavLink>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;