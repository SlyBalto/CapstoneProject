import React from 'react';
import { Link } from 'react-router-dom';

function Nav({isVertical}) {
  return (
    <nav aria-label="Main Menu" className={isVertical ? "nav-content-vertical" : "nav-content"}>

      {isVertical ? (  <div style={{display: "flex", justifyContent: "flex-end"}}>
      </div>) : <div></div>
      }
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;