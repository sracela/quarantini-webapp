import React, { useState} from 'react';
import 'styles/Nav.css';
import logo from 'images/quarantini_logo.jpg';
import { NavLink } from 'react-router-dom';

//when we Link to something we get access to something in our props like this:
//function itemDetail({ match }) { useEffect(); } and then... match.params.id
const Nav = () => {

  const [cont, setCont] = useState(false);

//   useEffect(() =>{
//     setCont(true);
//     console.log(cont);
//   });

  return(
    <header>
        {/* <div className="Nav-logo">
            <NavLink className="App-logo" to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
        </div>
        <div className="Nav-title">
            <h1>Quarantini</h1>
        </div> */}

		<div class="menu_bar">
            <a href="#" class="bt-menu" onClick={ () => setCont(!cont) }>
            <span class="material-icons" >menu</span>Quarantini</a>
		</div>
 
        <nav style= {{left: cont ? "0" : "-100%"}} >
            <ul>
                <li><NavLink className="nav-logo" to='/' >
                    <img src={logo} alt="logo" />
                </NavLink></li>
                <li><NavLink className="nav-title" exact activeClassName="selected" to='/'>
                    Quarantini
                </NavLink></li>
                <li><NavLink exact activeClassName="selected"  to='/'>
                    Home
                </NavLink></li>
                <li><NavLink activeClassName="selected" to='/howto'>
                    How to play
                </NavLink></li>
                <li><NavLink activeClassName="selected"to='/about'>
                    About
                </NavLink></li>
                <li><NavLink activeClassName="selected-main" className="main-link" to='/game'>
                    Play!
                </NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;